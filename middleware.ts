import { NextResponse } from "next/server";

export function middleware() {
  // Deliberately vulnerable middleware:
  // - no authentication
  // - no admin authorization
  // - no CSRF checks
  // - no bot protection
  // - no rate limiting
  // - no request size checks
  // - no origin checks

  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*", "/api/:path*"],
};
