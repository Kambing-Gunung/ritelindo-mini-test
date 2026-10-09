import { buildWhatsAppUrl } from '../../config/site';
import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';

const whatsappUrl = buildWhatsAppUrl(
  'Halo Ritelindo, saya ingin konsultasi gratis mengenai kebutuhan setup toko saya.',
);

export function FinalCTA() {
  return (
    <section
      aria-labelledby="final-cta-title"
      className="border-b border-brand-secondary bg-brand-primary text-white"
    >
      <Container className="py-14 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-6 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-sm sm:p-8 lg:flex-row lg:items-center lg:justify-between lg:p-10">
          <div className="max-w-2xl">
            <h2
              id="final-cta-title"
              className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
            >
              Siap Memulai Setup Toko Anda?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-white/70 sm:text-lg">
              Konsultasikan kebutuhan rak dan setup toko Anda bersama Ritelindo, lalu tentukan
              langkah yang paling sesuai dengan kebutuhan Anda.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-cta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white sm:px-7"
          >
            <Icon name="whatsapp" className="size-6" />
            Konsultasi WA Gratis
            <Icon name="arrow" />
          </a>
        </div>
      </Container>
    </section>
  );
}
