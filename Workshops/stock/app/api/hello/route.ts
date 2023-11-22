// export const dynamic = 'auto'
// export const dynamicParams = true
// export const revalidate = false
// export const fetchCache = 'auto'
// export const runtime = 'nodejs'
// export const preferredRegion = 'auto'

import { NextResponse } from 'next/server';

export async function GET(): Promise<any> {
  return NextResponse.json({ result: 'ok' });
}
