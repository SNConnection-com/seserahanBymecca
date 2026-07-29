"use client";

import { useActionState } from "react";
import Link from "next/link";
import { login } from "@/app/login/actions";

export function LoginForm() {
  const [state, formAction, pending] = useActionState(login, undefined);

  return (
    <form
      action={formAction}
      className="w-full max-w-sm rounded-2xl border border-line bg-surface p-8 shadow-[0_30px_60px_-30px_rgba(62,48,36,0.25)]"
    >
      <p className="font-script text-3xl text-accent">Admin</p>
      <h1 className="mt-1 font-display text-2xl font-semibold text-ink">
        Masuk untuk Membuat Invoice
      </h1>

      <div className="mt-6">
        <label
          htmlFor="password"
          className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft"
        >
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          autoFocus
          className="input"
        />
      </div>

      {state?.error && <p className="mt-3 text-sm text-red-600">{state.error}</p>}

      <button
        type="submit"
        disabled={pending}
        className="btn-primary mt-6 w-full justify-center disabled:opacity-60"
      >
        {pending ? "Memeriksa..." : "Masuk"}
      </button>

      <Link
        href="/"
        className="mt-5 block text-center text-xs text-ink-soft transition-colors hover:text-accent"
      >
        &larr; Kembali ke beranda
      </Link>
    </form>
  );
}
