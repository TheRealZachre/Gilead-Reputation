import { NextResponse } from "next/server";
import { requireAdmin } from "@/lib/auth/admin";
import {
  createUserResetLink,
  deleteUser,
  setUserPassword,
} from "@/lib/auth/users";

export async function DELETE(
  _request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { session, response } = await requireAdmin();
  if (response || !session?.user.id) return response!;

  const { id } = await params;

  try {
    await deleteUser(id, { actingUserId: session.user.id });
    return NextResponse.json({ ok: true });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not delete user.";

    if (message === "User not found.") {
      return NextResponse.json({ error: message }, { status: 404 });
    }

    if (
      message.includes("cannot delete") ||
      message.includes("Cannot delete")
    ) {
      return NextResponse.json({ error: message }, { status: 409 });
    }

    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { session, response } = await requireAdmin();
  if (response || !session?.user.id) return response!;

  const { id } = await params;
  const body = (await request.json().catch(() => ({}))) as {
    action?: string;
    password?: string;
  };

  try {
    if (body.action === "send-reset") {
      const origin = new URL(request.url).origin;
      const result = await createUserResetLink(id, origin);
      return NextResponse.json({
        ok: true,
        emailed: result.sent,
        email: result.email,
        resetUrl: result.sent ? undefined : result.resetUrl,
      });
    }

    if (body.action === "set-password") {
      const password = body.password ?? "";
      if (password.length < 8) {
        return NextResponse.json(
          { error: "Password must be at least 8 characters." },
          { status: 400 }
        );
      }
      await setUserPassword(id, password);
      return NextResponse.json({ ok: true });
    }

    return NextResponse.json({ error: "Unknown action." }, { status: 400 });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Could not complete request.";

    if (message === "User not found.") {
      return NextResponse.json({ error: message }, { status: 404 });
    }

    return NextResponse.json({ error: message }, { status: 400 });
  }
}
