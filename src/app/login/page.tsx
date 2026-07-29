import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";
import { LoginForm } from "@/components/site/LoginForm";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function LoginPage() {
  const authed = await verifySession();
  if (authed) redirect("/invoice");

  return (
    <main className="flex min-h-screen items-center justify-center bg-bg px-5">
      <LoginForm />
    </main>
  );
}
