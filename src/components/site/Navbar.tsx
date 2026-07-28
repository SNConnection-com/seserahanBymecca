"use client";

import { useState } from "react";
import Image from "next/image";
const links = [
  ["#d1-tentang", "About"],
  ["#d1-paket", "Paket"],
  ["#d1-proses", "Proses"],
  ["#d1-testimoni", "Testimoni"],
  ["#d1-kontak", "Kontak"],
];

export function Navbar() {
    const [open, setOpen] = useState(false);

    return (
      <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-surface/95 backdrop-blur-sm">
        <nav className="relative mx-auto flex max-w-[1180px] items-center justify-between gap-[18px] px-5 py-[15px] sm:px-8">
          <div className="font-script text-[34px] leading-none text-ink">
                <div className="flex items-center">
                  <Image
                    src="/images/Logo.PNG"
                    alt="Mecca Seserahan Atelier"
                    width={200}
                    height={140}
                    className="h-11 w-auto"
                    priority
                  />
                </div>
          </div>
          <button
                type="button"
                aria-label="Buka menu"
                aria-expanded={open}
                aria-controls="d1-menu"
                onClick={() => setOpen((v) => !v)}
                className="flex h-10 w-10 flex-none items-center justify-center text-ink md:hidden"
            >
              <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                <path d="M4 7h16M4 12h16M4 17h16" />
              </svg>
          </button>
          <div
              id="d1-menu"
              className={`${open ? "flex" : "hidden"} absolute inset-x-0 top-full z-20 flex-col gap-0 border-y border-line bg-surface px-5 pb-3.5 pt-1.5 shadow-[0_18px_30px_-20px_rgba(62,48,36,0.25)] sm:px-8 md:static md:flex md:flex-row md:items-center md:gap-7 md:border-0 md:bg-transparent md:p-0 md:shadow-none`}
            >
              {links.map(([href, label]) => (
                <a
                  key={href}
                  href={href}
                  onClick={() => setOpen(false)}
                  className="border-b border-line py-3 text-[13px] text-ink-soft transition-colors last:border-b-0 hover:text-accent md:border-0 md:py-1 md:text-[12.5px] md:uppercase md:tracking-[.04em]"
                >
                  {label}
                </a>
              ))}
          </div>
          <div className="flex flex-none gap-[9px]">
              <a
                href="https://www.tiktok.com/@seserahanbymecca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="TikTok"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-ink hover:bg-ink hover:text-btn-ink"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 3.2c.5 2.4 2.1 4 4.5 4.3v3c-1.6 0-3.1-.5-4.5-1.4v6.6c0 3.2-2.6 5.7-5.8 5.4-2.7-.3-4.8-2.6-4.7-5.3.1-2.9 2.6-5.1 5.5-4.8v3c-1.1-.2-2.1.6-2.2 1.7-.1 1.1.7 2.1 1.9 2.2 1.2.1 2.2-.7 2.3-2V3.2h3z" />
                </svg>
              </a>
              <a
                href="https://instagram.com/seserahanbymecca"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-ink hover:bg-ink hover:text-btn-ink"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <rect x="3.5" y="3.5" width="17" height="17" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.2" cy="6.8" r=".9" fill="currentColor" stroke="none" />
                </svg>
              </a>
              <a
                href="https://wa.me/6281366665092"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink-soft transition hover:border-ink hover:bg-ink hover:text-btn-ink"
              >
                <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M12 3.2a8.3 8.3 0 0 0-7.2 12.4L3.7 20l4.6-1.1A8.3 8.3 0 1 0 12 3.2z" />
                  <path
                    d="M8.6 8.9c.2-.6.9-.6 1.2-.1l.6 1c.2.3.1.7-.1.9l-.5.4c-.1.1-.1.3 0 .5.5.9 1.4 1.8 2.3 2.3.2.1.4.1.5 0l.4-.5c.2-.2.6-.3.9-.1l1 .6c.5.3.5 1-.1 1.2-.5.2-1.1.4-1.7.2-1.6-.4-3.2-2-3.6-3.6-.2-.6 0-1.2.2-1.7z"
                    fill="currentColor"
                    stroke="none"
                  />
                </svg>
              </a>
          </div>
        </nav>
      </header>
    );
}