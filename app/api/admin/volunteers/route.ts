import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';
import { getSession } from '@/lib/auth';

export async function GET(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const ward = searchParams.get('ward');
    const status = searchParams.get('status');

    const volunteers = await prisma.volunteer.findMany({
      where: {
        ...(ward && ward !== 'ALL' && { ward }),
        ...(status && status !== 'ALL' && { status }),
      },
      orderBy: { createdAt: 'desc' },
    });

    return NextResponse.json({ volunteers });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const body = await request.json();
    const { id, status, ward, pollingStation } = body;

    if (!id) {
      return NextResponse.json({ error: 'Volunteer ID required' }, { status: 400 });
    }

    const updated = await prisma.volunteer.update({
      where: { id },
      data: {
        ...(status && { status }),
        ...(ward && { ward }),
        ...(pollingStation !== undefined && { pollingStation }),
      },
    });

    return NextResponse.json({ success: true, volunteer: updated });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const session = await getSession();
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }

    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Volunteer ID required' }, { status: 400 });
    }

    await prisma.volunteer.delete({ where: { id } });
    return NextResponse.json({ success: true });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
