"use client";

import { useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReactToPrint } from "react-to-print";
import { z } from "zod";
import { logout } from "@/app/login/actions";

const itemSchema = z.object({
  description: z.string().min(1, { error: "Wajib diisi" }),
  qty: z.coerce.number().min(1, { error: "Min 1" }),
  price: z.coerce.number().min(0, { error: "Tidak boleh negatif" }),
});

const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, { error: "Wajib diisi" }),
  invoiceDate: z.string().min(1, { error: "Wajib diisi" }),
  clientName: z.string().min(1, { error: "Nama klien wajib diisi" }),
  eventDate: z.string().optional(),
  items: z.array(itemSchema).min(1, { error: "Minimal 1 item" }),
  discount: z.coerce.number().min(0).optional(),
  notes: z.string().optional(),
});

type InvoiceInput = z.input<typeof invoiceSchema>;
type InvoiceOutput = z.output<typeof invoiceSchema>;

const emptyItem = { description: "", qty: 1, price: 0 };

function generateInvoiceNumber() {
  const now = new Date();
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  const rand = Math.floor(1000 + Math.random() * 9000);
  return `INV-${y}${m}${d}-${rand}`;
}

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

function formatRupiah(n: number) {
  return new Intl.NumberFormat("id-ID", {
    style: "currency",
    currency: "IDR",
    maximumFractionDigits: 0,
  }).format(Number.isFinite(n) ? n : 0);
}

export function InvoiceForm() {
  const previewRef = useRef<HTMLDivElement>(null);

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<InvoiceInput, unknown, InvoiceOutput>({
    resolver: zodResolver(invoiceSchema),
    defaultValues: {
      invoiceNumber: "",
      invoiceDate: "",
      clientName: "",
      eventDate: "",
      items: [emptyItem],
      discount: 0,
      notes: "",
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  useEffect(() => {
    setValue("invoiceNumber", generateInvoiceNumber());
    setValue("invoiceDate", todayISO());
  }, [setValue]);

  const values = watch();
  const subtotal =
    values.items?.reduce(
      (sum, item) => sum + (Number(item?.qty) || 0) * (Number(item?.price) || 0),
      0
    ) ?? 0;
  const discount = Number(values.discount) || 0;
  const total = Math.max(subtotal - discount, 0);

  const printFn = useReactToPrint({
    contentRef: previewRef,
    documentTitle: values.invoiceNumber || "invoice",
  });

  const onGeneratePrint = handleSubmit(() => {
    printFn();
  });

  function handleReset() {
    reset({
      invoiceNumber: generateInvoiceNumber(),
      invoiceDate: todayISO(),
      clientName: "",
      eventDate: "",
      items: [emptyItem],
      discount: 0,
      notes: "",
    });
  }

  return (
    <main className="min-h-screen bg-bg px-5 py-10 sm:px-8">
      <div className="mx-auto max-w-[1180px]">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-script text-3xl text-accent">Admin</p>
            <h1 className="font-display text-2xl font-semibold text-ink">Buat Invoice</h1>
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

        <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
          <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  No. Invoice
                </label>
                <input {...register("invoiceNumber")} className="input" />
                {errors.invoiceNumber && (
                  <p className="mt-1 text-xs text-red-600">{errors.invoiceNumber.message}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Tanggal Invoice
                </label>
                <input type="date" {...register("invoiceDate")} className="input" />
                {errors.invoiceDate && (
                  <p className="mt-1 text-xs text-red-600">{errors.invoiceDate.message}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Nama Klien
                </label>
                <input
                  {...register("clientName")}
                  placeholder="Nama calon pengantin"
                  className="input"
                />
                {errors.clientName && (
                  <p className="mt-1 text-xs text-red-600">{errors.clientName.message}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Tanggal Acara (opsional)
                </label>
                <input type="date" {...register("eventDate")} className="input" />
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-2 flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Item
                </label>
                <button
                  type="button"
                  onClick={() => append(emptyItem)}
                  className="text-xs font-bold uppercase tracking-wide text-accent hover:underline"
                >
                  + Tambah Item
                </button>
              </div>

              <div className="flex flex-col gap-3">
                {fields.map((field, index) => (
                  <div
                    key={field.id}
                    className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_60px_100px_28px] sm:items-start"
                  >
                    <div>
                      <input
                        {...register(`items.${index}.description`)}
                        placeholder="Deskripsi (mis. Paket Aurora)"
                        className="input"
                      />
                      {errors.items?.[index]?.description && (
                        <p className="mt-1 text-xs text-red-600">
                          {errors.items[index]?.description?.message}
                        </p>
                      )}
                    </div>
                    <input
                      type="number"
                      min={1}
                      {...register(`items.${index}.qty`, { valueAsNumber: true })}
                      className="input"
                    />
                    <input
                      type="number"
                      min={0}
                      {...register(`items.${index}.price`, { valueAsNumber: true })}
                      className="input"
                    />
                    <button
                      type="button"
                      onClick={() => remove(index)}
                      disabled={fields.length === 1}
                      aria-label="Hapus item"
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-red-300 hover:text-red-600 disabled:pointer-events-none disabled:opacity-40"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Diskon (Rp)
                </label>
                <input
                  type="number"
                  min={0}
                  {...register("discount", { valueAsNumber: true })}
                  className="input"
                />
              </div>
            </div>

            <div className="mt-4">
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                Catatan (opsional)
              </label>
              <textarea rows={3} {...register("notes")} className="input" />
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <button type="button" onClick={onGeneratePrint} className="btn-primary">
                Cetak / Download PDF
              </button>
              <button type="button" onClick={handleReset} className="btn-ghost">
                Invoice Baru
              </button>
            </div>
          </div>

          <div className="rounded-2xl border border-line bg-surface-2 p-4 sm:p-6">
            <div ref={previewRef} className="mx-auto max-w-[560px] bg-surface p-8 text-ink">
              <div className="flex items-start justify-between border-b border-line pb-5">
                <div>
                  <p className="font-script text-2xl text-accent">Mecca</p>
                  <p className="text-[10px] uppercase tracking-[.2em] text-ink-soft">
                    Seserahan Atelier
                  </p>
                </div>
                <div className="text-right text-xs text-ink-soft">
                  <p className="font-bold uppercase tracking-wide text-ink">Invoice</p>
                  <p>{values.invoiceNumber}</p>
                  <p>{values.invoiceDate}</p>
                </div>
              </div>

              <div className="mt-5 text-sm">
                <p className="text-xs font-bold uppercase tracking-wide text-ink-soft">Untuk</p>
                <p className="mt-1 font-semibold">{values.clientName || "-"}</p>
                {values.eventDate && (
                  <p className="text-ink-soft">Tanggal acara: {values.eventDate}</p>
                )}
              </div>

              <table className="mt-6 w-full text-sm">
                <thead>
                  <tr className="border-b border-line text-left text-xs uppercase tracking-wide text-ink-soft">
                    <th className="pb-2 font-bold">Deskripsi</th>
                    <th className="pb-2 text-right font-bold">Qty</th>
                    <th className="pb-2 text-right font-bold">Harga</th>
                    <th className="pb-2 text-right font-bold">Subtotal</th>
                  </tr>
                </thead>
                <tbody>
                  {values.items?.map((item, i) => (
                    <tr key={i} className="border-b border-line/60">
                      <td className="py-2">{item?.description || "-"}</td>
                      <td className="py-2 text-right">{Number(item?.qty) || 0}</td>
                      <td className="py-2 text-right">{formatRupiah(Number(item?.price) || 0)}</td>
                      <td className="py-2 text-right">
                        {formatRupiah((Number(item?.qty) || 0) * (Number(item?.price) || 0))}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              <div className="mt-4 flex flex-col items-end gap-1 text-sm">
                <div className="flex w-48 justify-between text-ink-soft">
                  <span>Subtotal</span>
                  <span>{formatRupiah(subtotal)}</span>
                </div>
                {discount > 0 && (
                  <div className="flex w-48 justify-between text-ink-soft">
                    <span>Diskon</span>
                    <span>-{formatRupiah(discount)}</span>
                  </div>
                )}
                <div className="flex w-48 justify-between border-t border-line pt-1.5 font-bold text-ink">
                  <span>Total</span>
                  <span>{formatRupiah(total)}</span>
                </div>
              </div>

              {values.notes && (
                <div className="mt-6 border-t border-line pt-4 text-xs text-ink-soft">
                  <p className="font-bold uppercase tracking-wide text-ink">Catatan</p>
                  <p className="mt-1 whitespace-pre-line">{values.notes}</p>
                </div>
              )}

              <div className="mt-6 border-t border-line pt-4 text-xs text-ink-soft">
                <p className="font-bold uppercase tracking-wide text-ink">Pembayaran</p>
                <p className="mt-1">BCA 8880392973 a.n Cut Lisya Indriyeni</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
