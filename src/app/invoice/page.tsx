import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";
import { AdminWorkspace } from "@/components/site/AdminWorkspace";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function InvoicePage() {
  const authed = await verifySession();
  if (!authed) redirect("/login");

  return <AdminWorkspace />;
}
