import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { verifySession } from "@/lib/session";
import { InvoiceForm } from "@/components/site/InvoiceForm";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default async function InvoicePage() {
  const authed = await verifySession();
  if (!authed) redirect("/login");

  return <InvoiceForm />;
}
