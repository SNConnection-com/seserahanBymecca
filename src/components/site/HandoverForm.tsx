"use client";

import { useEffect, useRef } from "react";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useReactToPrint } from "react-to-print";
import { z } from "zod";

const barangSchema = z.object({
  name: z.string().min(1, { error: "Wajib diisi" }),
  qty: z.coerce.number().min(1, { error: "Min 1" }),
});

const handoverSchema = z.object({
  clientName: z.string().min(1, { error: "Nama wajib diisi" }),
  phone: z.string().optional(),
  boxType: z.string().optional(),
  flowerTheme: z.string().optional(),
  instagram: z.string().optional(),
  loanDate: z.string().min(1, { error: "Wajib diisi" }),
  returnDate: z.string().optional(),
  items: z.array(barangSchema).min(1, { error: "Minimal 1 barang" }),
});

type HandoverInput = z.input<typeof handoverSchema>;
type HandoverOutput = z.output<typeof handoverSchema>;

const emptyBarang = { name: "", qty: 1 };

function todayISO() {
  return new Date().toISOString().slice(0, 10);
}

export function HandoverForm() {
  const previewRef = useRef<HTMLDivElement>(null);

  const {
    register,
    control,
    watch,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<HandoverInput, unknown, HandoverOutput>({
    resolver: zodResolver(handoverSchema),
    defaultValues: {
      clientName: "",
      phone: "",
      boxType: "",
      flowerTheme: "",
      instagram: "",
      loanDate: "",
      returnDate: "",
      items: [emptyBarang],
    },
  });

  const { fields, append, remove } = useFieldArray({ control, name: "items" });

  useEffect(() => {
    setValue("loanDate", todayISO());
  }, [setValue]);

  const values = watch();

  const printFn = useReactToPrint({
    contentRef: previewRef,
    documentTitle: `Tanda Terima - ${values.clientName || "customer"}`,
  });

  const onGeneratePrint = handleSubmit(() => {
    printFn();
  });

  function handleReset() {
    reset({
      clientName: "",
      phone: "",
      boxType: "",
      flowerTheme: "",
      instagram: "",
      loanDate: todayISO(),
      returnDate: "",
      items: [emptyBarang],
    });
  }

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_1fr]">
      <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
        <div className="grid gap-4 sm:grid-cols-2">
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
              Jenis Box
            </label>
            <input
              {...register("boxType")}
              placeholder="Aurora / Veloura / Hidden"
              className="input"
            />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
              Thema Warna Bunga
            </label>
            <input {...register("flowerTheme")} className="input" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
              Instagram Customer
            </label>
            <input {...register("instagram")} placeholder="@username" className="input" />
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
              Tanggal Peminjaman
            </label>
            <input type="date" {...register("loanDate")} className="input" />
            {errors.loanDate && (
              <p className="mt-1 text-xs text-red-600">{errors.loanDate.message}</p>
            )}
          </div>
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wide text-ink-soft">
              Tanggal Pengembalian
            </label>
            <input type="date" {...register("returnDate")} className="input" />
          </div>
        </div>

        <div className="mt-6">
          <div className="mb-2 flex items-center justify-between">
            <label className="text-xs font-bold uppercase tracking-wide text-ink-soft">
              Nama Barang
            </label>
            <button
              type="button"
              onClick={() => append(emptyBarang)}
              className="text-xs font-bold uppercase tracking-wide text-accent hover:underline"
            >
              + Tambah Barang
            </button>
          </div>

          <div className="flex flex-col gap-3">
            {fields.map((field, index) => (
              <div
                key={field.id}
                className="flex flex-col gap-2 sm:grid sm:grid-cols-[1fr_70px_28px] sm:items-start"
              >
                <div>
                  <input
                    {...register(`items.${index}.name`)}
                    placeholder="Nama barang (mis. Mukena, Sepatu)"
                    className="input"
                  />
                  {errors.items?.[index]?.name && (
                    <p className="mt-1 text-xs text-red-600">
                      {errors.items[index]?.name?.message}
                    </p>
                  )}
                </div>
                <input
                  type="number"
                  min={1}
                  placeholder="Jml"
                  {...register(`items.${index}.qty`, { valueAsNumber: true })}
                  className="input"
                />
                <button
                  type="button"
                  onClick={() => remove(index)}
                  disabled={fields.length === 1}
                  aria-label="Hapus barang"
                  className="flex h-9 w-9 flex-none items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-red-300 hover:text-red-600 disabled:pointer-events-none disabled:opacity-40"
                >
                  &times;
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-6 flex flex-wrap gap-3">
          <button type="button" onClick={onGeneratePrint} className="btn-primary">
            Cetak / Download PDF
          </button>
          <button type="button" onClick={handleReset} className="btn-ghost">
            Form Baru
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-line bg-surface-2 p-4 sm:p-6">
        <div
          ref={previewRef}
          className="relative mx-auto max-w-[560px] overflow-hidden bg-surface p-8 text-ink"
        >
          <h2 className="font-display text-xl font-bold uppercase tracking-wide text-ink">
            Tanda Serah / Terima Barang
          </h2>

          <div className="mt-5 space-y-1 text-[13px]">
            {[
              ["Nama", values.clientName],
              ["No. Telp", values.phone],
              ["Jenis Box", values.boxType],
              ["Thema Warna Bunga", values.flowerTheme],
              ["Instagram Customer", values.instagram],
              ["Tanggal Peminjaman", values.loanDate],
              ["Tanggal Pengembalian", values.returnDate],
            ].map(([label, value]) => (
              <div key={label} className="flex gap-2">
                <span className="w-[150px] flex-none text-ink-soft">{label}</span>
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
                    Nama Barang
                  </th>
                  <th className="px-3 py-2 text-right text-xs uppercase tracking-wide">Jumlah</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td colSpan={2} className="p-0">
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
                              <td className="px-3 py-2">{item?.name || "-"}</td>
                              <td className="px-3 py-2 text-right">{Number(item?.qty) || 0}</td>
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

          <div className="mt-6 space-y-1.5 text-[11px] font-bold text-ink-soft">
            <p>
              - Jika terjadi kerusakan / kehilangan atas barang yang disewakan menjadi tanggung
              jawab penyewa
            </p>
            <p>
              - Pengembalian box yang telah lewat dari tanggal yang ditentukan akan dikenakan
              denda sebesar IDR 25.000 / box / hari.
            </p>
            <p>
              - Jam operasional gallery pukul 09.00 - 17.00 atau hubungi team kami untuk info
              lebih lanjut.
            </p>
            <p>
              - Hari minggu dan hari besar lainnya LIBUR. Gallery tidak menerima pengambilan /
              pengembalian box.
            </p>
          </div>

          <p className="mt-8 text-center font-bold text-ink">Hormat kami,</p>

          <div className="mt-10 flex justify-between gap-6 text-center text-xs">
            <div className="flex-1">
              <p className="text-ink-soft">( &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; )</p>
              <p className="mt-2 font-bold text-ink">Mecca&apos;s Team</p>
            </div>
            <div className="flex-1">
              <p className="text-ink-soft">( &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; )</p>
              <p className="mt-2 font-bold text-ink">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
