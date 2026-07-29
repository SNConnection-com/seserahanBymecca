"use server";

import { z } from "zod";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/lib/session";

const loginSchema = z.object({
  password: z.string().min(1, { error: "Password wajib diisi" }),
});

export type LoginState = { error?: string } | undefined;

export async function login(
  _prevState: LoginState,
  formData: FormData
): Promise<LoginState> {
  const parsed = loginSchema.safeParse({ password: formData.get("password") });

  if (!parsed.success) {
    return { error: "Password wajib diisi" };
  }

  if (parsed.data.password !== process.env.ADMIN_PASSWORD) {
    return { error: "Password salah" };
  }

  await createSession();
  redirect("/invoice");
}

export async function logout() {
  await deleteSession();
  redirect("/login");
}
