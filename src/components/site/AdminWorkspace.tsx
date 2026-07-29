"use client";

import { useState } from "react";
import { logout } from "@/app/login/actions";
import { InvoiceForm } from "@/components/site/InvoiceForm";
import { HandoverForm } from "@/components/site/HandoverForm";

const tabs = [
  { key: "invoice", label: "Invoice" },
  { key: "handover", label: "Tanda Terima Barang" },
] as const;

type TabKey = (typeof tabs)[number]["key"];

export function AdminWorkspace() {
  const [tab, setTab] = useState<TabKey>("invoice");

  return (
    <main className="min-h-screen bg-bg px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-script text-3xl text-accent">Admin</p>
            <h1 className="font-display text-2xl font-semibold text-ink">
              {tab === "invoice" ? "Buat Invoice" : "Buat Tanda Terima Barang"}
            </h1>
          </div>
          <form action={logout}>
            <button
              type="submit"
              className="rounded-full border border-line px-5 py-2 text-xs font-bold uppercase tracking-wide text-ink-soft transition hover:border-ink hover:bg-ink hover:text-btn-ink"
            >
              Keluar
            </button>
          </form>
        </div>

        <div className="mb-6 flex gap-2 border-b border-line">
          {tabs.map((t) => (
            <button
              key={t.key}
              type="button"
              onClick={() => setTab(t.key)}
              className={`-mb-px border-b-2 px-1 py-2.5 text-xs font-bold uppercase tracking-wide transition-colors ${
                tab === t.key
                  ? "border-accent text-accent"
                  : "border-transparent text-ink-soft hover:text-ink"
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === "invoice" ? <InvoiceForm /> : <HandoverForm />}
      </div>
    </main>
  );
}
