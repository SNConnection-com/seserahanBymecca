import { Reveal } from "./Reveal";

const stripImages = [1, 2, 3, 4, 5];

const address = "Jl. Tenjo City No.11, Singabangsa, Kec. Tenjo, Kabupaten Bogor, Jawa Barat 16370, Indonesia";
const waNumber = "6281366665092";
const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent(`Hai, saya ingin konsultasi untuk seserahan pernikahan saya`)}`;

const contacts = [
  {
    label: "WhatsApp",
    value: "0813-6666-5092",
    href: waLink,
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M12 3.2a8.3 8.3 0 0 0-7.2 12.4L3.7 20l4.6-1.1A8.3 8.3 0 1 0 12 3.2z" fill="none" stroke="currentColor" strokeWidth="1.6" />
        <path d="M8.6 8.9c.2-.6.9-.6 1.2-.1l.6 1c.2.3.1.7-.1.9l-.5.4c-.1.1-.1.3 0 .5.5.9 1.4 1.8 2.3 2.3.2.1.4.1.5 0l.4-.5c.2-.2.6-.3.9-.1l1 .6c.5.3.5 1-.1 1.2-.5.2-1.1.4-1.7.2-1.6-.4-3.2-2-3.6-3.6-.2-.6 0-1.2.2-1.7z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    value: "Seserahan By Mecca",
    href: "https://instagram.com/seserahanbymecca",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "TikTok",
    value: "Seserahan By Mecca",
    href: "https://www.tiktok.com/@seserahanbymecca",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M15.5 3.2c.5 2.4 2.1 4 4.5 4.3v3c-1.6 0-3.1-.5-4.5-1.4v6.6c0 3.2-2.6 5.7-5.8 5.4-2.7-.3-4.8-2.6-4.7-5.3.1-2.9 2.6-5.1 5.5-4.8v3c-1.1-.2-2.1.6-2.2 1.7-.1 1.1.7 2.1 1.9 2.2 1.2.1 2.2-.7 2.3-2V3.2h3z" />
      </svg>
    ),
  },
  {
    label: "Threads",
    value: "Seserahan By Mecca",
    href: "https://www.threads.net/@seserahanbymecca",
    icon: <span className="font-display text-base font-bold leading-none">@</span>,
  },
  {
    label: "Facebook",
    value: "Seserahan By Mecca",
    href: "https://www.facebook.com/seserahanbymecca",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4">
        <path d="M13 21v-7.5h2.4l.4-2.6H13v-1.7c0-.7.2-1.2 1.3-1.2H16V5.7c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.4v1.9H7v2.6h2V21h4z" />
      </svg>
    ),
  },
  {
    label: "Email",
    value: "seserahanbymecca@gmail.com",
    href: "mailto:seserahanbymecca@gmail.com",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" className="h-4 w-4">
        <rect x="3.5" y="5" width="17" height="14" rx="2.5" />
        <path d="M4.5 6.5 12 12.5l7.5-6" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export function ContactFooter() {
  return (
    <section id="d1-kontak" className="py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="grid items-center gap-8 rounded-[32px] bg-surface-2 p-7 sm:p-12 md:grid-cols-2 md:gap-14">
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 20.2s-7.2-4.4-9.6-9.1C.9 7.6 3 4.2 6.6 4.2c2 0 3.5 1.1 5.4 3.3 1.9-2.2 3.4-3.3 5.4-3.3 3.6 0 5.7 3.4 4.2 6.9-2.4 4.7-9.6 9.1-9.6 9.1z" />
                </svg>
                Tetap Terhubung
              </p>
              <h2 className="text-display-band mt-2 font-display font-semibold text-ink">
                Ikuti Momen Seserahan Kami
              </h2>
              <p className="mt-3 max-w-[42ch] text-[0.98rem] leading-[1.7] text-ink-soft">
                Lihat inspirasi rangkaian terbaru dan cerita pengantin kami setiap minggu di TikTok &amp; Instagram.
              </p>
              <a href={waLink}
                    target="_blank" rel="noopener noreferrer" className="btn-primary mt-5">
                Chat via WhatsApp
              </a>
            </div>
            <div className="grid grid-cols-3 gap-2.5 sm:grid-cols-5">
              <span className="col-span-full mb-0.5 text-[11.5px] uppercase tracking-[.12em] text-ink-soft">
                @seserahanbymecca
              </span>
              {stripImages.map((n) => (
                <a key={n} href="#" className="group relative block aspect-square overflow-hidden rounded-2xl">
                  <img
                    loading="lazy"
                    src={`/images/strip-${n}.jpeg`}
                    alt={`Momen seserahan ${n}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-110"
                  />
                </a>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-8 sm:mt-12">
          <div className="grid gap-6 rounded-[32px] border border-line bg-surface p-7 sm:p-12 md:grid-cols-2 md:gap-10">
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Lokasi Seserahan by Mecca"
                src={`https://www.google.com/maps?q=${encodeURIComponent(address)}&output=embed`}
                className="h-[280px] w-full sm:h-full"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div>
              <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
                <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  <path d="M12 21s-7-6.2-7-11a7 7 0 1 1 14 0c0 4.8-7 11-7 11z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                Kunjungi &amp; Hubungi Kami
              </p>
              <h2 className="text-display-band mt-2 font-display font-semibold text-ink">Lokasi &amp; Kontak</h2>
              <p className="mt-3 text-[0.95rem] leading-[1.7] text-ink-soft">{address}</p>
              <ul className="mt-5 flex flex-col gap-3">
                {contacts.map((c) => (
                  <li key={c.label} className="flex items-center gap-3 text-[13.5px] text-ink">
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      aria-label={c.label}
                      className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-surface-3 text-accent-2 transition hover:bg-ink hover:text-btn-ink"
                    >
                      {c.icon}
                    </a>
                    <a
                      href={c.href}
                      target={c.href.startsWith("http") ? "_blank" : undefined}
                      rel={c.href.startsWith("http") ? "noopener noreferrer" : undefined}
                      className="transition-colors hover:text-accent"
                    >
                      {c.value}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal className="mt-16 sm:mt-24">
          <div className="text-center">
            <h2 className="text-display-cta font-display font-semibold text-ink">
              Yuk, Wujudkan Seserahan Impianmu
            </h2>
            <p className="mx-auto mt-3.5 max-w-[48ch] text-ink-soft">
              Konsultasi gratis, ceritakan tema pernikahanmu dan biar kami yang merangkainya.
            </p>
            <div className="mt-[34px] flex flex-wrap justify-center gap-3.5">
              <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary">
                Chat via WhatsApp
              </a>
              <a href="https://www.tiktok.com/@seserahanbymecca" target="_blank" rel="noopener noreferrer" className="btn-ghost">
                Lihat TikTok @seserahanbymecca
              </a>
            </div>
          </div>
        </Reveal>

        <div className="mt-2.5 flex flex-wrap items-center justify-between gap-3.5 border-t border-line py-8 text-[13px] text-ink-soft">
          <span>&copy; Seserahan by Mecca — dirangkai dengan hati.</span>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.tiktok.com/@seserahanbymecca" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">TikTok</a>
            <a href="https://instagram.com/seserahanbymecca" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">Instagram</a>
            <a href="https://www.threads.net/@seserahanbymecca" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">Threads</a>
            <a href="https://www.facebook.com/seserahanbymecca" target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">Facebook</a>
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-accent">WhatsApp</a>
            <a href="mailto:seserahanbymecca@gmail.com" className="transition-colors hover:text-accent">Email</a>
          </div>
        </div>
      </div>
    </section>
  );
}