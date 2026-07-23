import { type NextRequest, NextResponse } from "next/server";
import { buildHeuristicReview } from "@/lib/wikipedia/heuristic-review";
import type { MaintenanceFlag } from "@/lib/wikipedia/wiki-fetch";

export const runtime = "nodejs";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const report = buildHeuristicReview(
      body.title ?? "",
      body.extract ?? "",
      body.metrics ?? {},
      (body.maintenance_flags ?? []) as MaintenanceFlag[]
    );
    return NextResponse.json(report);
  } catch (e: unknown) {
    return NextResponse.json({ error: String(e), issues: [] });
  }
}
