import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Packages } from "@/components/site/Package";
import { Process } from "@/components/site/Process";
import { Testimonials } from "@/components/site/Testimonial";
import { ContactFooter } from "@/components/site/ContactFooter";
import { Gallery } from "@/components/site/Galery";
import { Terms } from "@/components/site/Terms";
export default function Home() {
  return (
    <>
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
