import { Reveal } from "./Reveal";

const steps = [
  { n: "01", title: "Isi Form Order", desc: "Calon klien mengisi form order yang telah ditentukan dan penyerahan tanda jadi." },
  { n: "02", title: "Serah Terima Barang", desc: "Calon klien memberikan barang-barang pada H-14 sebelum acara." },
  { n: "03", title: "Pengerjaan", desc: "Kami akan memproses box seserahan anda." },
  { n: "04", title: "Pengambilan Box", desc: "Box seserahan yang telah selesai dapat diambil pada H-2 sebelum acara." },
  { n: "05", title: "Your Big Day", desc: "Selamat menikmati hari bahagia kamu." },
  { n: "06", title: "Pengembalian Box", desc: "Pengembalian box dilakukan pada H+2 setelah acara selesai." },
];

export function Process() {
  return (
    <section id="d1-proses" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 max-w-xl sm:mb-14">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 20.2s-7.2-4.4-9.6-9.1C.9 7.6 3 4.2 6.6 4.2c2 0 3.5 1.1 5.4 3.3 1.9-2.2 3.4-3.3 5.4-3.3 3.6 0 5.7 3.4 4.2 6.9-2.4 4.7-9.6 9.1-9.6 9.1z" />
              </svg>
              Proses Pemesanan
            </p>
            <h2 className="text-display-section mt-3.5 font-display font-semibold text-ink">
              Enam Langkah Menuju Hari-H
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step) => (
            <Reveal key={step.n}>
              <div className="pt-2">
                <div className="font-script text-4xl text-accent opacity-80">{step.n}</div>
                <h4 className="mt-1 text-base font-bold text-ink">{step.title}</h4>
                <p className="mt-2 text-[13.5px] leading-[1.6] text-ink-soft">{step.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}