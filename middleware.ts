import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

const SECRET = new TextEncoder().encode(
  process.env.JWT_SECRET || 'gitau2027_naivasha_mp_campaign_secret_key_983745'
);

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Only protect /admin routes
  if (pathname.startsWith('/admin')) {
    // Allow login route
    if (pathname === '/admin/login') {
      const token = request.cookies.get('campaign_admin_session')?.value;
      if (token) {
        try {
          await jwtVerify(token, SECRET);
          return NextResponse.redirect(new URL('/admin', request.url));
        } catch (e) {
          // Token invalid, allow login page
        }
      }
      return NextResponse.next();
    }

    // Require valid session for all other /admin routes
    const token = request.cookies.get('campaign_admin_session')?.value;
    if (!token) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    try {
      const { payload } = await jwtVerify(token, SECRET);
      const role = (payload as any).role;

      // SuperAdmin-only routes
      if (pathname.startsWith('/admin/users') && role !== 'SUPERADMIN') {
        return NextResponse.redirect(new URL('/admin?error=unauthorized', request.url));
      }

      return NextResponse.next();
    } catch (e) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
