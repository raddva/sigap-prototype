import { NextResponse } from 'next/server';
import { demoStore } from '@/lib/store';

// Wajib agar Next.js tidak men-cache response ini
export const dynamic = 'force-dynamic';

export async function GET() {
  return NextResponse.json(demoStore);
}