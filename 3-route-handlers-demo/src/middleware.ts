import { NextRequest, NextResponse } from 'next/server';

/**
 * Custom matcher config approach
 */
/*
export function middleware(request: NextRequest) {
  return NextResponse.redirect(new URL('/', request.url));
}

export const config = {
  matcher: '/profile',
};
*/

/**
 * Conditional statements approach
 */
/*
export function middleware(request: NextRequest) {
  // redirect
  if (request.nextUrl.pathname === '/profile') {
    return NextResponse.redirect(new URL('/', request.url));
  }

  // URL rewrite
  if (request.nextUrl.pathname === '/about') {
    return NextResponse.rewrite(new URL('/hello', request.url));
  }
}
*/

/**
 * Using headers and cookies in middleware
 */
export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  response.headers.set('x-custom-header', 'Hello from middleware!');

  const theme = request.cookies.get('theme');
  if (!theme) {
    response.cookies.set('theme', 'dark');
  }

  return response;
}
