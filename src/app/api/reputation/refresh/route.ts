import { NextResponse } from "next/server";
import { getRefreshMeta, refreshReputationData } from "@/lib/reputation/refresh";

export const runtime = "nodejs";

export async function GET() {
  return NextResponse.json(await getRefreshMeta());
}

export async function POST() {
  return NextResponse.json(await refreshReputationData());
}
