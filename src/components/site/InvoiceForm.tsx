"use client";

import { useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReactToPrint } from "react-to-print";
import { z } from "zod";

const itemSchema = z.object({
  description: z.string().min(1, { error: "Wajib diisi" }),
  qty: z.coerce.number().min(1, { error: "Min 1" }),
  price: z.coerce.number().min(0, { error: "Tidak boleh negatif" }),
});

const invoiceSchema = z.object({
  invoiceNumber: z.string().min(1, { error: "Wajib diisi" }),
  invoiceDate: z.string().min(1, { error: "Wajib diisi" }),
  clientName: z.string().min(1, { error: "Nama klien wajib diisi" }),
  phone: z.string().optional(),
  instagram: z.string().optional(),
  address: z.string().optional(),
  acara: z.string().optional(),
  items: z.array(itemSchema).min(1, { error: "Minimal 1 item" }),
  dp: z.coerce.number().min(0).optional(),
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
      phone: "",
      instagram: "",
      address: "",
      acara: "",
      items: [emptyItem],
      dp: 0,
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  useEffect(() => {
    setValue("invoiceNumber", generateInvoiceNumber());
    setValue("invoiceDate", todayISO());
  }, [setValue]);

  const values = watch();
  const total =
    values.items?.reduce(
      (sum, item) => sum + (Number(item?.qty) || 0) * (Number(item?.price) || 0),
      0
    ) ?? 0;
  const dp = Number(values.dp) || 0;
  const balance = total - dp;
  const isOverpaid = balance < 0;
  const sisa = Math.abs(balance);

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
      phone: "",
      instagram: "",
      address: "",
      acara: "",
      items: [emptyItem],
      dp: 0,
    });
  }

  return (
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
                  Tanggal
                </label>
                <input type="date" {...register("invoiceDate")} className="input" />
                {errors.invoiceDate && (
                  <p className="mt-1 text-xs text-red-600">{errors.invoiceDate.message}</p>
                )}
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Nama
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
                  No. Telp
                </label>
                <input {...register("phone")} placeholder="08xx-xxxx-xxxx" className="input" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Instagram
                </label>
                <input {...register("instagram")} placeholder="@username" className="input" />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Acara
                </label>
                <input
                  {...register("acara")}
                  placeholder="Pernikahan / Lamaran / Tunangan"
                  className="input"
                />
              </div>
              <div className="sm:col-span-2">
                <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
                  Alamat
                </label>
                <input {...register("address")} className="input" />
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
                    className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_100px_60px_28px] sm:items-start"
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
                      min={0}
                      placeholder="Harga"
                      {...register(`items.${index}.price`, { valueAsNumber: true })}
                      className="input"
                    />
                    <input
                      type="number"
                      min={1}
                      placeholder="Qty"
                      {...register(`items.${index}.qty`, { valueAsNumber: true })}
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
                  DP (Rp)
                </label>
                <input
                  type="number"
                  min={0}
                  {...register("dp", { valueAsNumber: true })}
                  className="input"
                />
              </div>
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
            <div
              ref={previewRef}
              className="relative mx-auto max-w-[560px] overflow-hidden bg-surface p-8 text-ink"
            >
              <div className="flex items-start justify-between">
                <h2 className="font-display text-2xl font-semibold text-ink">Seserahan By Mecca</h2>
                <p className=" text-3xl font-bold text-red-600">Invoice</p>
              </div>

              <div className="mt-3 flex items-start gap-2 text-xs text-ink-soft">
                <span className="flex-none font-semibold text-ink">Official Galery :</span>
                <span>Tenjo City Tahap 3 Blok i 1 no 3 - Tenjo // Tigaraksa - Tangerang</span>
              </div>

              <div className="mt-5 space-y-1 text-[13px]">
                {[
                  ["No. Invoice", values.invoiceNumber],
                  ["Tanggal", values.invoiceDate],
                  ["Nama", values.clientName],
                  ["No. Telp", values.phone],
                  ["Instagram", values.instagram],
                  ["Alamat", values.address],
                  ["Acara", values.acara],
                ].map(([label, value]) => (
                  <div key={label} className="flex gap-2">
                    <span className="w-[90px] flex-none text-ink-soft">{label}</span>
                    <span className="text-ink-soft">:</span>
                    <span className="font-medium text-ink">{value || "-"}</span>
                  </div>
                ))}
              </div>

              <div className="relative mt-6 overflow-hidden rounded-sm border border-line">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-ink text-btn-ink">
                      <th className="px-3 py-2 text-left text-xs uppercase tracking-wide">
                        Deskripsi
                      </th>
                      <th className="px-3 py-2 text-right text-xs uppercase tracking-wide">
                        Harga
                      </th>
                      <th className="px-3 py-2 text-right text-xs uppercase tracking-wide">Qty</th>
                      <th className="px-3 py-2 text-right text-xs uppercase tracking-wide">
                        Total
                      </th>
                    </tr>
                  </thead>
                  <tbody className="relative">
                    <tr>
                      <td colSpan={4} className="p-0">
                        <div className="relative min-h-[140px]">
                          <img
                            src="/images/Logo.PNG"
                            alt=""
                            aria-hidden
                            className="pointer-events-none absolute left-1/2 top-1/2 w-40 -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
                          />
                          <table className="relative w-full text-sm">
                            <tbody>
                              {values.items?.map((item, i) => (
                                <tr key={i} className="border-t border-line/60">
                                  <td className="px-3 py-2">{item?.description || "-"}</td>
                                  <td className="px-3 py-2 text-right">
                                    {formatRupiah(Number(item?.price) || 0)}
                                  </td>
                                  <td className="px-3 py-2 text-right">{Number(item?.qty) || 0}</td>
                                  <td className="px-3 py-2 text-right">
                                    {formatRupiah(
                                      (Number(item?.qty) || 0) * (Number(item?.price) || 0)
                                    )}
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-3  flex justify-between gap-3 text-sm">
                <div className="mt-3 gap-6 text-xs">
                  <div>
                    <p className="font-bold uppercase tracking-wide text-ink">Payment Details</p>
                    <p className="mt-1.5 text-ink-soft">
                      <span className="font-bold text-ink">BCA</span> 8880392973
                      <br />
                      A.n Cut Lisya Indriyeni
                    </p>
                  </div>
                  <div className="mt-4">
                    <p className="font-bold uppercase tracking-wide text-ink">Contact Us</p>
                    <p className="mt-1.5 text-ink-soft">
                      081366665092
                      <br />
                      @seserahanbymecca
                    </p>
                  </div>
                </div>
                <div className="w-56 overflow-hidden rounded-sm border border-line text-sm">
                  <div className="flex items-center justify-between border-b border-line px-3 py-2">
                    <span className="font-bold uppercase tracking-wide text-ink">Total</span>
                    <span className="font-bold text-ink">{formatRupiah(total)}</span>
                  </div>
                  <div className="flex items-center justify-between border-b border-line px-3 py-2">
                    <span className="font-bold uppercase tracking-wide text-ink">DP</span>
                    <span className="text-ink">{formatRupiah(dp)}</span>
                  </div>
                  <div className="flex items-center justify-between px-3 py-2">
                    <span className="font-bold uppercase tracking-wide text-ink">
                      {isOverpaid ? "Lebih Bayar" : "Sisa"}
                    </span>
                    <span className={isOverpaid ? "font-bold text-green-600" : "text-ink"}>
                      {isOverpaid ? "+" : ""}
                      {formatRupiah(sisa)}
                    </span>
                  </div>
                </div>
              </div>

              <div className="mt-24 flex justify-end">
                <div className="w-40 border-t border-ink pt-2 text-center text-[11px] text-ink-soft">
                  Tanda Tangan
                </div>
              </div>
            </div>
          </div>
        </div>
  );
}
