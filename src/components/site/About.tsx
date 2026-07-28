import { Reveal } from "./Reveal";

const highlights = [
  {
    title: "Konsultasi tema personal",
    desc: "Obrolan santai lewat WhatsApp untuk memahami cerita kalian.",
    icon: "M4.5 5.5h15v10.5H10l-4.5 4v-4H4.5V5.5z",
  },
  {
    title: "Dirangkai tangan dengan detail",
    desc: "Setiap pita dan lipatan dikerjakan satu per satu.",
    icon: "M12 12c-2.2-3-7-2.8-8 .2 1 3 6.2 2.6 8-.2zM12 12c2.2-3 7-2.8 8 .2-1 3-6.2 2.6-8-.2z",
  },
  {
    title: "Dikemas aman untuk luar kota",
    desc: "Sampai rapi meski perjalanan jauh.",
    icon: "M3.5 8 12 4l8.5 4-8.5 4-8.5-4z",
  },
];

const categories = [
  { label: "Seserahan Nikah", icon: "M4 20c8 0 14-6 14-14 0 0-11-2-14 8-1 3 0 6 0 6z" },
  { label: "Hampers Lamaran", icon: "M12 3c1.6 0 2.6 1.5 1.9 3.2-.6.5-1.9.5-1.9.5s-1.3 0-1.9-.5C9.4 4.5 10.4 3 12 3zM12 21c1.6 0 2.6-1.5 1.9-3.2-.6-.5-1.9-.5-1.9-.5s-1.3 0-1.9.5C9.4 19.5 10.4 21 12 21zM3 12c0-1.6 1.5-2.6 3.2-1.9.5.6.5 1.9.5 1.9s0 1.3-.5 1.9C4.5 14.6 3 13.6 3 12zM21 12c0-1.6-1.5-2.6-3.2-1.9-.5.6-.5 1.9-.5 1.9s0 1.3.5 1.9c1.7.7 3.2-.3 3.2-1.9z" },
  { label: "Dekorasi Tema", icon: "M12 8V4M9.5 5.5 12 3l2.5 2.5" },
  { label: "Custom Bespoke", icon: "M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" },
];

export function About() {
  return (
    <section id="d1-tentang" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <div className="grid items-center gap-10 py-8 lg:grid-cols-[0.9fr_1fr_0.7fr]">
          <Reveal>
            <div className="relative aspect-[4/5] overflow-hidden rounded-[130px_20px_130px_20px] shadow-[0_30px_60px_-30px_rgba(62,48,36,0.35)]">
              <img
                loading="lazy"
                src="/images/about.jpeg"
                alt="Rangkaian bunga pastel untuk seserahan"
                className="h-full w-full object-cover"
              />
            </div>
          </Reveal>

          <Reveal>
            <div>
              <p className="flex items-center gap-2.5 font-script text-3xl text-accent">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 20.2s-7.2-4.4-9.6-9.1C.9 7.6 3 4.2 6.6 4.2c2 0 3.5 1.1 5.4 3.3 1.9-2.2 3.4-3.3 5.4-3.3 3.6 0 5.7 3.4 4.2 6.9-2.4 4.7-9.6 9.1-9.6 9.1z" />
                </svg>
                oh, hai calon pengantin
              </p>
              <h2 className="text-display-about mt-1.5 font-display font-semibold leading-tight text-ink">
                Dirangkai dari Hati, untuk Hari Bahagiamu
              </h2>
              <p className="mt-3.5 text-[0.98rem] leading-[1.75] text-ink-soft">
                Kami merangkai seserahan nikah, lamaran, dan hantaran spesial dengan sentuhan elegan, modern, dan penuh ketelitian mengubah setiap detail menjadi simbol cinta dan kebahagiaan.
              </p>
              <ul className="mt-[22px] flex flex-col gap-4">
                {highlights.map((h) => (
                  <li key={h.title} className="flex items-start gap-3 text-sm text-ink-soft">
                    <span className="flex h-[30px] w-[30px] flex-none items-center justify-center rounded-full bg-surface-3 text-accent">
                      <svg className="h-[15px] w-[15px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round">
                        <path d={h.icon} />
                      </svg>
                    </span>
                    <span>
                      <b className="mb-0.5 block text-[14.5px] font-bold text-ink">{h.title}</b>
                      {h.desc}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal>
            <div className="flex flex-col gap-[18px] border-t border-line pt-[18px] lg:flex-col lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
              {categories.map((cat) => (
                <a
                  key={cat.label}
                  href="#d1-paket"
                  className="flex items-center gap-[11px] text-[13px] text-ink transition-colors hover:text-accent"
                >
                  <svg className="h-4 w-4 flex-none text-accent-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                    <path d={cat.icon} />
                  </svg>
                  {cat.label}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}