import { cookies } from "next/headers";
import crypto from "node:crypto";

export const SESSION_COOKIE = "admin_session";
const WEEK_IN_SECONDS = 60 * 60 * 24 * 7;

function sign(payload: string) {
  const secret = process.env.SESSION_SECRET ?? "";
  return crypto.createHmac("sha256", secret).update(payload).digest("hex");
}

export function isValidSessionValue(value: string | undefined): boolean {
  if (!value) return false;
  const [expiresAt, signature] = value.split(".");
  if (!expiresAt || !signature) return false;
  if (sign(expiresAt) !== signature) return false;
  return Number(expiresAt) > Date.now();
}

export async function createSession() {
  const expiresAt = Date.now() + WEEK_IN_SECONDS * 1000;
  const payload = String(expiresAt);
  const value = `${payload}.${sign(payload)}`;

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, value, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: WEEK_IN_SECONDS,
  });
}

export async function verifySession() {
  const cookieStore = await cookies();
  return isValidSessionValue(cookieStore.get(SESSION_COOKIE)?.value);
}

export async function deleteSession() {
  const cookieStore = await cookies();
  cookieStore.delete(SESSION_COOKIE);
}
