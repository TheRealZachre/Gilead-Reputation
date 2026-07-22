"use client";

import { FormEvent, useState } from "react";
import Link from "next/link";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

const inputClassName =
  "mt-1.5 w-full rounded-lg border border-brand-ink/10 bg-white px-4 py-2.5 text-sm text-brand-ink outline-none focus:border-brand-indigo focus:ring-2 focus:ring-brand-indigo/20";

export function LoginForm() {
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") ?? "/";
  const authError = searchParams.get("error");
  const resetDone = searchParams.get("reset") === "1";
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(
    authError ? "Invalid email/username or password." : null
  );
  const [pending, setPending] = useState(false);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);
    setPending(true);

    try {
      await signIn("credentials", {
        login,
        password,
        redirect: true,
        callbackUrl,
      });
    } catch {
      setError("Something went wrong. Please try again.");
      setPending(false);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <label className="block text-sm font-medium text-brand-ink">
        Email or username
        <input
          value={login}
          onChange={(event) => setLogin(event.target.value)}
          type="text"
          autoComplete="username"
          className={inputClassName}
          required
        />
      </label>

      <label className="block text-sm font-medium text-brand-ink">
        Password
        <input
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          type="password"
          autoComplete="current-password"
          className={inputClassName}
          required
        />
      </label>

      <div className="flex justify-end">
        <Link
          href="/forgot-password"
          className="text-sm font-medium text-brand-indigo hover:text-brand-indigo-bright"
        >
          Forgot password?
        </Link>
      </div>

      {resetDone && (
        <p className="rounded-lg bg-emerald-50 px-4 py-3 text-sm text-emerald-800">
          Your password has been updated. Sign in with your new password.
        </p>
      )}

      {error && <p className="text-sm text-rose-600">{error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-lg bg-brand-indigo px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand-indigo-bright disabled:opacity-60"
      >
        {pending ? "Signing in…" : "Sign in"}
      </button>
    </form>
  );
}
