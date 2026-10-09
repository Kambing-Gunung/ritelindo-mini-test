import { buildWhatsAppUrl } from '../../config/site';
import { processSteps } from '../../data/process';

import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';

const whatsappUrl = buildWhatsAppUrl(
  'Halo Ritelindo, saya ingin konsultasi gratis mengenai kebutuhan setup toko saya.',
);

export function HowItWorks() {
  return (
    <section
      id="process"
      aria-labelledby="process-title"
      className="border-b border-brand-primary bg-brand-primary text-white"
    >
      <Container className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-2xl">
          {/* <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-white/70">
            How It Works
          </p> */}
          <h2
            id="process-title"
            className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl"
          >
            Bagaimana Prosesnya?
          </h2>
          <p className="mt-4 text-base leading-7 text-white/70 sm:text-lg md:text-nowrap">
            Mulai dari konsultasi hingga toko siap digunakan, semua akan kami bantu.
          </p>
        </div>

        <ol className="mt-12 grid gap-0 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <li key={step.id} className="relative lg:flex lg:flex-col">
              <div className="flex items-start gap-4 lg:block">
                <div className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-white/20 bg-white text-sm font-bold text-brand-primary shadow-soft lg:size-14 lg:text-base">
                  {step.number}
                </div>

                <div className="pt-0.5 lg:mt-6 lg:pr-8">
                  <h3 className="text-base font-bold sm:text-lg">{step.title}</h3>
                  <p className="mt-2 max-w-xs text-sm leading-6 text-white/70 sm:text-base sm:leading-7">
                    {step.description}
                  </p>
                </div>
              </div>

              {index < processSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="absolute bottom-0 left-6 top-14 w-px bg-white/20 lg:left-[calc(100%-2rem)] lg:right-0 lg:top-7 lg:h-px lg:w-auto"
                />
              )}
            </li>
          ))}
        </ol>

        <div className="mt-12 flex flex-col gap-4 rounded-2xl border border-white/15 bg-white/10 p-5 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between sm:p-6 lg:mt-14">
          <div>
            <p className="text-sm font-semibold text-white">Mulai dengan konsultasi sekarang.</p>
            <p className="mt-1 text-sm leading-6 text-white/65">
              Dapatkan konsultasi gratis sekarang dan wujudkan toko impian Anda.
            </p>
          </div>

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer"
            className="inline-flex min-h-12 shrink-0 items-center justify-center gap-2 rounded-full bg-brand-cta px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-cta/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
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
