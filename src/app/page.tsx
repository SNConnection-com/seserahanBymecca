import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Packages } from "@/components/site/Package";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonial";
import { ContactFooter } from "@/components/site/ContactFooter";
import { Gallery } from "@/components/site/Galery";
import { Terms } from "@/components/site/Terms";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Seserahan by Mecca",
  image: "https://seserahanbymecca.snconnection.id/images/hero1.jpeg",
  url: "https://seserahanbymecca.snconnection.id",
  telephone: "+6281366665092",
  email: "seserahanbymecca@gmail.com",
  priceRange: "Rp375.000 - Rp850.000",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Jl. Tenjo City No.11, Singabangsa",
    addressLocality: "Kec. Tenjo, Kabupaten Bogor",
    addressRegion: "Jawa Barat",
    postalCode: "16370",
    addressCountry: "ID",
  },
  sameAs: [
    "https://instagram.com/seserahanbymecca",
    "https://www.tiktok.com/@seserahanbymecca",
    "https://www.threads.net/@seserahanbymecca",
    "https://www.facebook.com/seserahanbymecca",
  ],
  description:
    "Jasa pembuatan dan dekorasi seserahan pernikahan, lamaran, tunangan, dan mahar akrilik custom.",
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Navbar />
      <div className="h-[76px]" aria-hidden />
      <Hero />
      <About />
      <Packages />
      <Process />
      <Gallery />
      <Terms />
      <Testimonials />
      <ContactFooter />
    </>

  );
}
