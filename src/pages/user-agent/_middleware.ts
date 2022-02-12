import { type NextRequest, NextResponse } from 'next/server';

export default function middleware(req: NextRequest) {
  const os = req.ua?.os.name ?? 'unknown';

  return NextResponse.rewrite(`/user-agent?os=${os}`);
}
