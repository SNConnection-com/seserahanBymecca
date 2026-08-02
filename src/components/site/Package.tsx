import { Reveal } from "./Reveal";

const packages = [
  {
    key: "Aurora",
    title: "Aurora Package",
    photo: "/images/package aurora.jpeg",
    alt: "Aurora Package — seserahan 8 box bebas tema",
    desc: "Seserahan 8 box dengan bunga lebih full dan desain aesthetic bebas pilih tema sesuai selera kalian.",
    price: "Rp 580.000 / 8 Box",
    priceNote: "Satuan Rp75.000/box · Hias bedcover +Rp65.000",
    items: ["Box Bebas Pilih Varian Box", "Bebas Pilih Tema Bunga", "Bunga Lebih Full", "Lebih Kekinian/Aesthetic", "Tutup Akrilik Lengkung", "Alas Songket"],
    featured: false,
  },
  {
    key: "Veloura",
    title: "Veloura Package",
    photo: "/images/VELOURA.jpeg",
    alt: "Veloura Package — seserahan 8 box dengan box premium crystal",
    desc: "Upgrade dari Aurora dengan box premium crystal tampil lebih mewah untuk momen spesialmu.",
    price: "Rp 690.000 / 8 Box",
    priceNote: "Satuan Rp90.000/box · Hias bedcover +Rp65.000",
    items: ["Box Premium Crystal", "Bebas Pilih Tema Bunga", "Bunga Lebih Full", "Lebih Kekinian/Aesthetic", "Tutup Akrilik Lengkung"],
    featured: true,
  },
  {
    key: "Hidden",
    title: "Hidden Seserahan",
    photo: "/images/hidden.jpeg",
    alt: "Hidden Seserahan — seserahan tertutup kain satin",
    desc: "Seserahan tertutup kain satin yang lebih private dan ramah budget, tetap rapi dan elegan.",
    price: "Rp375.000 / 8 Box",
    priceNote: "Satuan Rp50.000/box · Pakai baki +Rp10.000",
    items: ["Box dari Kardus", "Pilihan Bunga yang Available", "Desain Tertutup Menggunakan Kain Satin", "Tidak Pakai Tutup Akrilik", "Lebih Privacy"],
    featured: false,
  },
  {
    key: "Mahar",
    title: "Mahar Package",
    photo: "/images/package mahar.jpeg",
    alt: "Mahar Package — mahar akrilik custom",
    desc: "Mahar akrilik custom dengan bunga artificial premium jadi hak milik, bukan sewaan.",
    price: "Mulai Rp380.000",
    priceNote: "Tersedia varian Garden & Gen Z (vintage paper)",
    items: ["Ukuran 30x30 cm & 30x40 cm (upsize)", "Pilihan tulisan timbul atau tidak timbul", "Bisa digantung atau diletakkan di meja", "Request tema warna & bunga sesuai keinginan"],
    featured: false,
  },
];

export function Packages() {
  return (
    <section id="d1-paket" className="bg-surface-2 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 max-w-xl sm:mb-14">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
              </svg>
              Paket Seserahan
            </p>
            <h2 className="text-display-section mt-3.5 font-display font-semibold text-ink">
              Pilih Rangkaian yang Bercerita
            </h2>
            <p className="mt-4 leading-[1.7] text-ink-soft">
              Tiga tingkatan seserahan plus mahar custom, semua bisa disesuaikan warna dan temanya dengan pernikahanmu.
            </p>
          </div>
        </Reveal>

        <div className="grid gap-6 pb-8 lg:grid-cols-4">
          {packages.map((pkg) => (
            <Reveal key={pkg.key}>
              <div className="group flex h-full flex-col overflow-hidden rounded-[22px] border border-line bg-surface transition hover:-translate-y-1.5 hover:shadow-[0_26px_50px_-28px_rgba(62,48,36,0.3)]">
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    loading="lazy"
                    src={pkg.photo}
                    alt={pkg.alt}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  {pkg.featured && (
                    <span className="absolute right-3.5 top-3.5 rounded-full bg-ink px-3 py-1.5 text-[10.5px] uppercase tracking-wide text-btn-ink">
                      Favorit
                    </span>
                  )}
                </div>
                <div className="flex flex-1 flex-col px-6 pb-7 pt-6">
                  <h3 className="font-display text-2xl font-semibold text-ink">{pkg.title}</h3>
                  <p className="mt-1 text-sm font-bold text-accent">{pkg.price}</p>
                  <p className="text-[11.5px] text-ink-soft">{pkg.priceNote}</p>
                  <p className="mt-2.5 text-[13.5px] leading-[1.65] text-ink-soft">{pkg.desc}</p>
                  <ul className="mt-4 flex flex-1 flex-col gap-2.5 border-t border-line pt-4">
                    {pkg.items.map((item) => (
                      <li key={item} className="flex items-start gap-2.5 text-[13px] text-ink">
                        <span className="mt-[7px] h-[5px] w-[5px] flex-none rounded-full bg-accent-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a
                    href={`https://wa.me/6281366665092?text=${encodeURIComponent(`Hai, saya ingin konsultasi untuk paket ${pkg.title}`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/cta mt-5 inline-flex items-center gap-1.5 self-start text-xs font-bold uppercase tracking-wide text-accent"
                  >
                    Konsultasi Paket Ini
                    <svg
                      className="h-[13px] w-[13px] transition-transform group-hover/cta:translate-x-1"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    >
                      <path d="M4 12h15M13 6l6 6-6 6" />
                    </svg>
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}