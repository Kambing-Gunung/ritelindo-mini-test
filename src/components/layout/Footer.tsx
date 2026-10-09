import { useState } from 'react';
import logo from '../../assets/logo/ritelindo-wordmark.png';
import { buildWhatsAppUrl, siteConfig } from '../../config/site';
import { Icon } from '../ui/Icon';

type FooterSection = 'navigation' | 'services' | 'contact' | 'socials';

export function Footer() {
  const currentYear = new Date().getFullYear();
  const [openSection, setOpenSection] = useState<FooterSection | null>(null);

  const toggleSection = (section: FooterSection) => {
    setOpenSection((current) => (current === section ? null : section));
  };

  const renderSocials = () => (
    <div className="flex items-center gap-2">
      {siteConfig.footer.socials.map((social) => (
        <a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noreferrer"
          title={social.label}
          aria-label={social.label}
          className="flex size-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-white/15 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
        >
          <Icon name={social.icon} className="size-4" />
        </a>
      ))}
    </div>
  );

  return (
    <footer className="bg-brand-primary text-white" aria-label="Footer Ritelindo">
      <div className="border-b border-white/10">
        <div id="contact" className="mx-auto max-w-7xl px-5 py-10 sm:px-6 lg:px-8 lg:py-16">
          <div className="grid gap-8 lg:grid-cols-[1.5fr_0.5fr_1fr_1.25fr_0.7fr] lg:gap-12">
            <div className="max-w-sm">
              <a href="#home" aria-label="Ritelindo - Beranda" className="inline-flex">
                <img
                  src={logo}
                  alt="Ritelindo Akselera Kolaborasi"
                  className="h-auto w-36 brightness-0 invert"
                />
              </a>
              <p className="mt-5 text-sm leading-6 text-white/65">
                Partner pertumbuhan retail Indonesia dengan solusi rak, perlengkapan, dan interior toko yang berkualitas.
              </p>
            </div>

            <div className="hidden lg:block">
              <h2 className="text-sm font-semibold text-white">Menu</h2>
              <nav className="mt-4" aria-label="Navigasi footer">
                <ul className="space-y-3">
                  {siteConfig.navigation.map((item) => (
                    <li key={item.href}>
                      <a
                        href={item.href}
                        className="text-sm text-white/65 transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div className="hidden lg:block">
              <h2 className="text-sm font-semibold text-white">Layanan</h2>
              <ul className="mt-4 space-y-3">
                {siteConfig.footer.services.map((service) => (
                  <li key={service} className="text-sm leading-5 text-white/65">
                    {service}
                  </li>
                ))}
              </ul>
            </div>

            <div className="hidden scroll-mt-24 lg:block">
              <h2 className="text-sm font-semibold text-white">Kontak</h2>
              <address className="mt-4 not-italic">
                <ul className="space-y-4 text-sm leading-5 text-white/65">
                  <li className="flex items-start gap-3">
                    <Icon name="whatsapp" className="mt-0.5 size-4 shrink-0" />

                    <a
                      href={buildWhatsAppUrl(siteConfig.whatsapp.message)}
                      target="_blank"
                      rel="noreferrer"
                      className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {`+${siteConfig.contact.whatsapp.slice(0, 2)} ${siteConfig.contact.whatsapp.slice(2, 5)}-${siteConfig.contact.whatsapp.slice(5, 9)}-${siteConfig.contact.whatsapp.slice(9)}`}
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <Icon name="phone" className="mt-0.5 size-4 shrink-0" />

                    <a
                      href={`tel:+62${siteConfig.contact.phone.replace(/\D/g, '')}`}
                      className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {siteConfig.contact.phone}
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <Icon name="mail" className="mt-0.5 size-4 shrink-0" />

                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="break-all transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>

                  <li className="flex items-start gap-3">
                    <Icon name="pin" className="mt-0.5 size-4 shrink-0" />

                    <span>{siteConfig.contact.address}</span>
                  </li>
                </ul>
              </address>
            </div>

            <div className="hidden lg:block">
              <h2 className="text-sm font-semibold text-white">Ikuti Kami</h2>
              <div className="mt-4">{renderSocials()}</div>
            </div>
          </div>

          <div className="mt-8 divide-y divide-white/10 rounded-2xl border border-white/10 lg:hidden">
            <div>
              <button
                type="button"
                aria-expanded={openSection === 'navigation'}
                onClick={() => toggleSection('navigation')}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white"
              >
                <span>Menu</span>
                <Icon
                  name="chevron"
                  className={`size-4 transition-transform duration-200 ${openSection === 'navigation' ? 'rotate-90' : ''
                    }`}
                />              </button>
              {openSection === 'navigation' && (
                <nav className="px-4 pb-4" aria-label="Navigasi footer mobile">
                  <ul className="space-y-3">
                    {siteConfig.navigation.map((item) => (
                      <li key={item.href}>
                        <a href={item.href} className="text-sm text-white/65">
                          {item.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </nav>
              )}
            </div>

            <div>
              <button
                type="button"
                aria-expanded={openSection === 'services'}
                onClick={() => toggleSection('services')}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white"
              >
                <span>Layanan</span>
                <Icon
                  name="chevron"
                  className={`size-4 transition-transform duration-200 ${openSection === 'services' ? 'rotate-90' : ''
                    }`}
                />
              </button>
              {openSection === 'services' && (
                <ul className="space-y-3 px-4 pb-4">
                  {siteConfig.footer.services.map((service) => (
                    <li key={service} className="text-sm leading-5 text-white/65">
                      {service}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div>
              <button
                type="button"
                aria-expanded={openSection === 'contact'}
                onClick={() => toggleSection('contact')}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white"
              >
                <span>Kontak</span>
                <Icon
                  name="chevron"
                  className={`size-4 transition-transform duration-200 ${openSection === 'contact' ? 'rotate-90' : ''
                    }`}
                />
              </button>
              {openSection === 'contact' && (
                <address className="px-4 pb-4 not-italic">
                  <ul className="space-y-4 text-sm leading-5 text-white/65">
                    <li className="flex items-start gap-3">
                      <Icon name="whatsapp" className="mt-0.5 size-4 shrink-0" />

                      <a
                        href={buildWhatsAppUrl(siteConfig.whatsapp.message)}
                        target="_blank"
                        rel="noreferrer"
                        className="transition-colors hover:text-white"
                      >
                        {`+${siteConfig.contact.whatsapp.slice(0, 2)} ${siteConfig.contact.whatsapp.slice(2, 5)}-${siteConfig.contact.whatsapp.slice(5, 9)}-${siteConfig.contact.whatsapp.slice(9)}`}
                      </a>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon name="phone" className="mt-0.5 size-4 shrink-0" />

                      <a
                        href={`tel:+62${siteConfig.contact.phone.replace(/\D/g, '')}`}
                        className="transition-colors hover:text-white"
                      >
                        {siteConfig.contact.phone}
                      </a>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon name="mail" className="mt-0.5 size-4 shrink-0" />

                      <a
                        href={`mailto:${siteConfig.contact.email}`}
                        className="break-all transition-colors hover:text-white"
                      >
                        {siteConfig.contact.email}
                      </a>
                    </li>

                    <li className="flex items-start gap-3">
                      <Icon name="pin" className="mt-0.5 size-4 shrink-0" />

                      <span>{siteConfig.contact.address}</span>
                    </li>
                  </ul>
                </address>
              )}
            </div>

            <div>
              <button
                type="button"
                aria-expanded={openSection === 'socials'}
                onClick={() => toggleSection('socials')}
                className="flex w-full items-center justify-between px-4 py-4 text-left text-sm font-semibold text-white"
              >
                <span>Ikuti Kami</span>
                <Icon
                  name="chevron"
                  className={`size-4 transition-transform duration-200 ${openSection === 'socials' ? 'rotate-90' : ''
                    }`}
                />
              </button>
              {openSection === 'socials' && <div className="px-4 pb-4">{renderSocials()}</div>}
            </div>
          </div>
        </div>
      </div>

      <div className="mx-auto flex max-w-7xl flex-col gap-3 px-5 py-5 text-xs text-white/45 sm:px-6 sm:flex-row sm:items-center sm:justify-between lg:px-8">
        <p>© {currentYear} Ritelindo Akselera Kolaborasi. All rights reserved.</p>
        <div className="flex gap-4">
          <a href="#home" className="transition-colors hover:text-white">
            Kebijakan Privasi
          </a>
          <a href="#home" className="transition-colors hover:text-white">
            Syarat &amp; Ketentuan
          </a>
        </div>
      </div>
    </footer>
  );
}
