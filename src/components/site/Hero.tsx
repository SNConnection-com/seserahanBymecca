export function Hero() {
  return (
    <div className="mx-auto grid max-w-[1180px] items-center gap-10 px-5 pb-16 pt-4 sm:px-8 md:grid-cols-[1.05fr_0.95fr] md:gap-16 md:pb-24 md:pt-8">
      <div>
        <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
            <path d="M12 20.2s-7.2-4.4-9.6-9.1C.9 7.6 3 4.2 6.6 4.2c2 0 3.5 1.1 5.4 3.3 1.9-2.2 3.4-3.3 5.4-3.3 3.6 0 5.7 3.4 4.2 6.9-2.4 4.7-9.6 9.1-9.6 9.1z" />
          </svg>
          Atelier Seserahan Pengantin
        </p>
        <h1 className="text-display-hero mb-5 mt-4 font-display font-semibold leading-[1.08] text-ink">
          Kasih yang Dirangkai,
          <br />
          <span className="font-script text-[1.28em] font-normal leading-none text-accent">dengan Cinta</span>
        </h1>
        <p className="text-lede max-w-[46ch] font-sans leading-[1.7] text-ink-soft">
          Setiap seserahan kami susun dengan tangan, Menghadirkan Seserahan Indah, Mengabadikan Momen Bahagia.
        </p>
        <div className="mt-[34px] flex flex-wrap gap-3.5">
          <a href="#d1-kontak" className="btn-primary">
            Konsultasi via WhatsApp
          </a>
          <a href="#d1-paket" className="btn-ghost">
            Lihat Paket
          </a>
        </div>
        <ul className="mt-9 flex flex-wrap gap-x-[22px] gap-y-2.5 border-t border-line pt-6">
          {["100% Custom Tema", "Dirangkai Tangan", "Kirim ke Seluruh Indonesia"].map((f) => (
            <li key={f} className="flex items-center gap-2 text-xs uppercase tracking-wide text-ink-soft">
              <span className="h-[5px] w-[5px] rounded-full bg-accent" />
              {f}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative mx-auto flex aspect-square w-full max-w-md items-center justify-center">
        <div className="absolute -inset-[2.5%] animate-morph-reverse rounded-blob border border-accent-soft motion-reduce:animate-none" />
        <div className="absolute inset-[4%] animate-morph overflow-hidden rounded-blob bg-surface-2 shadow-[0_30px_60px_-30px_rgba(62,48,36,0.35)] motion-reduce:animate-none">
          <img
            src="/images/hero1.jpeg"
            alt="Buket bunga dibungkus pita untuk seserahan pernikahan"
            className="h-full w-full object-cover"
          />
        </div>
        {/* <svg
          className="absolute right-[-2%] top-[2%] w-16 text-accent-2 opacity-80"
          viewBox="0 0 70 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M35 88C33 60 33 30 35 4" />
          <path d="M35 20c-10-4-16-14-14-22" />
          <path d="M35 38c12-2 20-12 19-22" />
          <path d="M35 55c-11 0-19-9-19-18" />
          <circle cx="19" cy="15" r="3" />
          <circle cx="55" cy="14" r="3" />
          <circle cx="17" cy="46" r="3" />
        </svg> */}
        {/* <svg
          className="absolute bottom-0 left-[-4%] w-[52px] rotate-[205deg] text-accent-2 opacity-80"
          viewBox="0 0 70 90"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.4"
        >
          <path d="M35 88C33 60 33 30 35 4" />
          <path d="M35 20c-10-4-16-14-14-22" />
          <path d="M35 38c12-2 20-12 19-22" />
        </svg> */}
      </div>
    </div>
  );
}