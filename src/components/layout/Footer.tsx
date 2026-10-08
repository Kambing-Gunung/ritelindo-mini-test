import logo from '../../assets/logo/ritelindo-wordmark.png';
import { buildWhatsAppUrl, siteConfig } from '../../config/site';

const whatsappMessage =
  'Halo Ritelindo, saya tertarik dengan solusi rak untuk kebutuhan toko saya dan ingin konsultasi gratis.';

const footerNavigation = [
  { label: 'Beranda', href: '#home' },
  { label: 'Produk', href: '#products' },
  { label: 'Layanan', href: '#services' },
  { label: 'Kontak', href: '#contact' },
];

const footerServices = [
  'Konsultasi & Layout 3D',
  'Rak & Display Toko',
  'Custom Sesuai Kebutuhan',
  'Jasa Interior Toko',
];

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-primary text-white" aria-label="Footer Ritelindo">
      <div className="border-b border-white/10">
        <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.5fr_0.7fr_1fr_1.25fr] lg:gap-12 lg:px-8 lg:py-16">
          <div className="max-w-sm">
            <a href="#home" aria-label="Ritelindo - Beranda" className="inline-flex">
              <img
                src={logo}
                alt="Ritelindo Akselera Kolaborasi"
                className="h-auto w-36 brightness-0 invert"
              />
            </a>
            <p className="mt-5 text-sm leading-6 text-white/65">
              Solusi rak, display, dan perlengkapan retail untuk membantu kebutuhan toko modern.
            </p>
          </div>

          <div>
            <h2 className="text-sm font-semibold text-white">Navigasi</h2>
            <nav className="mt-4" aria-label="Navigasi footer">
              <ul className="space-y-3">
                {footerNavigation.map((item) => (
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

          <div>
            <h2 className="text-sm font-semibold text-white">Layanan</h2>
            <ul className="mt-4 space-y-3">
              {footerServices.map((service) => (
                <li key={service} className="text-sm leading-5 text-white/65">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div id="contact" className="scroll-mt-24">
            <h2 className="text-sm font-semibold text-white">Kontak</h2>
            <address className="mt-4 not-italic">
              <ul className="space-y-3 text-sm leading-5 text-white/65">
                <li>
                  <a
                    href={`https://wa.me/${siteConfig.contact.whatsapp}`}
                    target="_blank"
                    rel="noreferrer"
                    className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {`+${siteConfig.contact.whatsapp.slice(0, 2)} ${siteConfig.contact.whatsapp.slice(2, 5)}-${siteConfig.contact.whatsapp.slice(5, 9)}-${siteConfig.contact.whatsapp.slice(9)}`}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:+62${siteConfig.contact.phone.replace(/\D/g, '')}`}
                    className="transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {siteConfig.contact.phone}
                  </a>
                </li>
                <li>
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="break-all transition-colors hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
                  >
                    {siteConfig.contact.email}
                  </a>
                </li>
                <li>{siteConfig.contact.address}</li>
              </ul>
            </address>

            <a
              href={buildWhatsAppUrl(whatsappMessage)}
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-brand-cta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Konsultasi WA Gratis
              <span aria-hidden="true">→</span>
            </a>
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
