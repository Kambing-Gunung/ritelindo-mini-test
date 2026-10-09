import { useState } from 'react';
import logo from '../../assets/logo/ritelindo-wordmark.png';
import { buildWhatsAppUrl, siteConfig } from '../../config/site';
import { ButtonLink } from '../ui/Button';
import { Icon } from '../ui/Icon';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line/80 bg-white/95 backdrop-blur">
      <div className="mx-auto flex min-h-16 max-w-7xl items-center justify-between gap-6 px-5 sm:px-6 lg:px-8">
        <a href="#home" aria-label="Ritelindo - Beranda" className="shrink-0">
          <img src={logo} alt="Ritelindo Akselera Kolaborasi" className="h-auto w-32" />
        </a>

        <nav aria-label="Navigasi utama" className="hidden items-center gap-7 lg:flex">
          {siteConfig.navigation.map((item) => (
            <a
              key={item.href}
              className="text-sm font-medium text-ink transition-colors hover:text-brand-secondary"
              href={item.href}
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ButtonLink
            href={buildWhatsAppUrl(siteConfig.whatsapp.message)}
            target="_blank"
            rel="noreferrer"
            className="gap-2 bg-brand-primary hover:bg-brand-secondary"
          >
            <Icon name="whatsapp" className="size-6" />
            Konsultasi WA Gratis
            <Icon name="arrow" />
          </ButtonLink>
        </div>

        <button
          type="button"
          aria-expanded={isOpen}
          aria-controls="mobile-navigation"
          aria-label={isOpen ? 'Tutup menu' : 'Buka menu'}
          onClick={() => setIsOpen((open) => !open)}
          className="inline-flex size-11 items-center justify-center rounded-full border border-line text-ink transition-colors hover:bg-surface lg:hidden"
        >
          <span className="sr-only">Menu</span>
          <Icon name={isOpen ? 'close' : 'menu'} className="size-5" />
        </button>
      </div>

      {isOpen && (
        <nav id="mobile-navigation" aria-label="Navigasi mobile" className="border-t border-line bg-white lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-4 sm:px-6">
            {siteConfig.navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-ink hover:bg-surface"
              >
                {item.label}
              </a>
            ))}
            <ButtonLink
              href={buildWhatsAppUrl(siteConfig.whatsapp.message)}
              target="_blank"
              rel="noreferrer"
              className="gap-2 mt-2 w-full bg-brand-primary hover:bg-brand-secondary"
            >
              <Icon name="whatsapp" className="size-6" />
              Konsultasi WA Gratis
              <Icon name="arrow" />
            </ButtonLink>
          </div>
        </nav>
      )}
    </header>
  );
}
