import { Reveal } from "./Reveal";

const tiles = [
  { src: "/images/Blue.jpeg", label: "Dusty Blue" },
  { src: "/images/red gold.jpeg", label: "Crimson Gold" },
  { src: "/images/hidden.jpeg", label: "Dusty Mauve" },
  { src: "/images/VELOURA.jpeg", label: "Golden Petals" },
];


export function Gallery() {
  return (
    <section className="bg-surface-2 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 max-w-xl sm:mb-14">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2l1.8 6.2L20 10l-6.2 1.8L12 18l-1.8-6.2L4 10l6.2-1.8L12 2z" />
              </svg>
              Galeri Rangkaian
            </p>
            <h2 className="text-display-section mt-3.5 font-display font-semibold text-ink">
              Nuansa yang Bisa Kamu Pilih
            </h2>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tiles.map((tile) => (
            <Reveal key={tile.label}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl">
                <img loading="lazy" src={tile.src} alt={`Nuansa ${tile.label}`} className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/55 to-transparent to-45%" />
                <span className="absolute inset-x-4 bottom-3.5 z-10 text-xs text-white">{tile.label}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}