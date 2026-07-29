import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { SESSION_COOKIE, isValidSessionValue } from "@/lib/session";

export default function proxy(request: NextRequest) {
  const value = request.cookies.get(SESSION_COOKIE)?.value;

  if (!isValidSessionValue(value)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", request.nextUrl.pathname);
    return NextResponse.redirect(loginUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/invoice/:path*"],
};
