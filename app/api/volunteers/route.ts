import { NextResponse } from 'next/server';
import { prisma } from '@/lib/db';

export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, phone, email, ward, pollingStation, interests } = body;

    if (!fullName || !phone || !ward) {
      return NextResponse.json(
        { error: 'Full name, phone number, and ward are required.' },
        { status: 400 }
      );
    }

    const volunteer = await prisma.volunteer.create({
      data: {
        fullName,
        phone,
        email: email || '',
        ward,
        pollingStation: pollingStation || '',
        interestsJson: JSON.stringify(interests || []),
        status: 'new',
      },
    });

    return NextResponse.json({ success: true, volunteer });
  } catch (error: any) {
    console.error('Volunteer submission error:', error);
    return NextResponse.json(
      { error: 'Failed to record volunteer signup. Please try again.' },
      { status: 500 }
    );
  }
}
