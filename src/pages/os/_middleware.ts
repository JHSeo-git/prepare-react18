import { type NextRequest, NextResponse } from 'next/server';

export function middleware(req: NextRequest) {
  const os = req.ua?.os.name;

  if (!os) {
    return NextResponse.rewrite('/os');
  }

  return NextResponse.rewrite(`/os/${os}`);
}
