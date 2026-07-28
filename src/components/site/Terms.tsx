import { Reveal } from "./Reveal";

const terms = [
  {
    title: "1. Booking DP",
    desc: "Menetapkan tanggal & pemilihan box. DP untuk booking Rp100.000 — apabila terjadi pembatalan, DP hangus.",
  },
  {
    title: "2. Foto Identitas (KTP)",
    desc: "Klien memberikan foto KTP melalui WhatsApp.",
  },
  {
    title: "3. Penyerahan Barang",
    desc: "Penyerahan barang yang akan dihias dilakukan H-14 dan diambil kembali pada H-2 sebelum acara.",
  },
  {
    title: "4. Pengembalian Barang",
    desc: "Pengembalian box beserta aksesoris H+2 setelah acara. Lewat dari tempo yang diberikan dikenakan charge Rp25.000/hari/box. Box tidak boleh ditumpuk karena akrilik bisa tergores dan pecah. Mohon konfirmasi terlebih dahulu untuk kedatangan penyerahan, pengambilan, dan pengembalian box.",
  },
  {
    title: "5. Kerusakan & Kehilangan",
    desc: "Box dan aksesori yang ada dalam penyewaan wajib dikembalikan tanpa kekurangan apa pun. Kehilangan atau kerusakan akan dikenakan denda sesuai harga barang yang hilang/rusak.",
  },
  {
    title: "6. Penjemputan dengan Jasa Online",
    desc: "Kami tidak bertanggung jawab atas kerusakan dan kehilangan box jika penjemputan dilakukan lewat jasa online. Pemesanan jasa online dilakukan oleh pihak penyewa.",
  },
  {
    title: "7. Delivery Service",
    desc: "Kami menyediakan jasa antar/jemput langsung dengan tim kami (bukan driver online); tarif ditentukan sesuai jarak KM aplikasi Gocar XL/GoBox.",
  },
  {
    title: "8. Isi Seserahan",
    desc: "Mohon maaf, kami tidak menerima hias dekorasi produk yang diharamkan dalam Islam, seperti makanan/minuman non-halal, atau simbol, kitab, dan ritual agama lain (khusus non-Muslim).",
  },
];

export function Terms() {
  return (
    <section id="d1-syarat" className="bg-surface-2 py-14 sm:py-20 lg:py-28">
      <div className="mx-auto max-w-[1180px] px-5 sm:px-8">
        <Reveal>
          <div className="mb-10 max-w-xl sm:mb-14">
            <p className="flex items-center gap-2 text-xs font-bold uppercase tracking-[.14em] text-accent">
              <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 20.2s-7.2-4.4-9.6-9.1C.9 7.6 3 4.2 6.6 4.2c2 0 3.5 1.1 5.4 3.3 1.9-2.2 3.4-3.3 5.4-3.3 3.6 0 5.7 3.4 4.2 6.9-2.4 4.7-9.6 9.1-9.6 9.1z" />
              </svg>
              Syarat & Ketentuan
            </p>
            <h2 className="text-display-section mt-3.5 font-display font-semibold text-ink">
              Yuk, Baca Dulu Sebelum Booking
            </h2>
          </div>
        </Reveal>

        <Reveal>
          <div className="divide-y divide-line rounded-2xl border border-line bg-surface">
            {terms.map((term) => (
              <details key={term.title} className="group px-6 py-4 first:rounded-t-2xl last:rounded-b-2xl open:bg-surface-3/40">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-[14.5px] font-bold text-ink marker:content-none [&::-webkit-details-marker]:hidden">
                  {term.title}
                  <svg
                    className="h-4 w-4 flex-none text-accent transition-transform duration-300 group-open:rotate-45"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </summary>
                <p className="mt-2.5 text-[13.5px] leading-[1.7] text-ink-soft">{term.desc}</p>
              </details>
            ))}
          </div>
        </Reveal>

        <Reveal>
          <p className="mt-6 rounded-xl border border-accent-soft bg-surface-3 px-5 py-4 text-[12.5px] leading-[1.7] text-ink-soft">
            <b className="text-ink">Catatan:</b> harga sudah termasuk jasa hias dan sewa box akrilik. Sewa
            khusus wilayah Jabodetabek — kami tidak menjual isian seserahan. Harga tertera belum termasuk
            jasa kirim.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
