import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';
import { exec } from 'child_process';
import path from 'path';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const logs = await prisma.scraperLog.findMany({
      orderBy: { runAt: 'desc' },
      take: 20,
    });

    return NextResponse.json({ logs });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json().catch(() => ({}));
    const mode = body.mode || 'apify';
    const limit = body.limit || 15;

    // Create log entry for starting
    const log = await prisma.scraperLog.create({
      data: {
        status: 'RUNNING',
        message: `Triggered Facebook Feed Scraper (${mode} mode, limit: ${limit}) by ${session.name}`,
      },
    });

    // Execute Python script in background
    const scriptPath = path.resolve(process.cwd(), '../scripts/scrape_facebook.py');
    const cmd = `python "${scriptPath}" --mode ${mode} --limit ${limit}`;

    exec(cmd, async (error, stdout, stderr) => {
      if (error) {
        console.error('Scraper error:', error);
        await prisma.scraperLog.update({
          where: { id: log.id },
          data: {
            status: 'FAILED',
            message: `Scraper process exited with error: ${error.message}`,
          },
        });
      } else {
        console.log('Scraper stdout:', stdout);
        await prisma.scraperLog.update({
          where: { id: log.id },
          data: {
            status: 'SUCCESS',
            message: `Feed sync completed successfully.`,
            postsCount: limit,
          },
        });
      }
    });

    return NextResponse.json({
      success: true,
      message: 'Facebook Scraper task launched in background.',
      logId: log.id,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
