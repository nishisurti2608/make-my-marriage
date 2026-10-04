import { readEnv } from "@/config/env";
export const runtime = "nodejs";
export function GET() {
  try {
    readEnv();
    return Response.json(
      { data: { status: "ok" } },
      { headers: { "Cache-Control": "no-store" } },
    );
  } catch {
    return Response.json(
      {
        error: {
          code: "CONFIGURATION_ERROR",
          message: "Application unavailable.",
        },
      },
      { status: 503 },
    );
  }
}
