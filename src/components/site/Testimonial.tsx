import { Reveal } from "./Reveal";

const quotes = [
  {
    text: "Seserahannya cantik banget, sesuai tema pernikahan kita. Prosesnya juga gampang, tinggal konsultasi via WA.",
    who: "— Pengantin, Klien Paket Signature",
  },
  {
    text: "Detailnya rapi dan terasa personal, keluarga besar sampai tanya-tanya vendornya siapa.",
    who: "— Pengantin, Klien Paket Bespoke",
  },
];

export function Testimonials() {
  return (
    <section id="d1-testimoni" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 max-w-xl sm:mb-14">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 20.2s-7.2-4.4-9.6-9.1C.9 7.6 3 4.2 6.6 4.2c2 0 3.5 1.1 5.4 3.3 1.9-2.2 3.4-3.3 5.4-3.3 3.6 0 5.7 3.4 4.2 6.9-2.4 4.7-9.6 9.1-9.6 9.1z" />
              </svg>
              Testimoni
            </p>
            <h2 className="text-display-section mt-3.5 font-display font-semibold text-ink">
              Cerita dari Pengantin Kami
            </h2>
          </div>
        </Reveal>

        <div className="grid gap-5 sm:grid-cols-2">
          {quotes.map((q) => (
            <Reveal key={q.who}>
              <div className="rounded-[26px] bg-surface-3 p-8">
                <span className="mb-2 block font-script text-4xl leading-[.6] text-accent">&ldquo;</span>
                <p className="font-display text-xl font-semibold leading-[1.45] text-ink">{q.text}</p>
                <footer className="mt-4 text-[13px] text-ink-soft">{q.who}</footer>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}