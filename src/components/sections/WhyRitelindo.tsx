import { whyRitelindoItems, valuePropositions } from '../../data/whyRitelindo';

import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

const valueToneClasses = {
  primary: 'bg-brand-primary text-white',
  blue: 'bg-sky-100 text-sky-700',
  amber: 'bg-amber-100 text-amber-700',
  violet: 'bg-violet-100 text-violet-700',
  green: 'bg-emerald-100 text-emerald-700',
  red: 'bg-red-100 text-red-700',
} as const;

export function WhyRitelindo() {
  return (
    <section id="why-ritelindo" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          id="why-ritelindo-title"
          title="Kenapa Memilih Ritelindo?"
          description="Lebih dari sekadar penyedia rak, kami adalah partner Anda dalam membangun dan mengembangkan bisnis retail."
          className="mb-10 lg:mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] lg:gap-8">
          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-1">
            {whyRitelindoItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-4 shadow-[var(--shadow-soft)] sm:p-5 lg:flex lg:items-start lg:gap-4"
              >
                <div className="mb-4 flex size-12 shrink-0 items-center justify-center rounded-xl bg-white text-brand-primary ring-1 ring-line sm:size-14 lg:mb-0">
                  <Icon name={item.icon} className="size-8 sm:size-9" />
                </div>

                <div className="min-w-0">
                  <h3 className="text-sm font-bold text-ink sm:text-base">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-xs leading-5 text-muted sm:text-sm sm:leading-6">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-surface-strong p-5 sm:p-6 lg:p-7">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-brand-secondary">
                Keuntungan untuk Toko Anda
              </p>

              <p className="mt-2 text-sm leading-6 text-muted">
                Dapatkan berbagai benefit terbaik untuk memulai atau mengembangkan bisnis retail Anda.
              </p>
            </div>

            <div className="mt-6 divide-y divide-line">
              {valuePropositions.map((value) => (
                <div
                  key={value.title}
                  className="flex gap-4 py-4 first:pt-0 last:pb-0"
                >
                  <div
                    className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl ${valueToneClasses[value.tone]}`}
                  >
                    <Icon name={value.icon} className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-ink sm:text-base">
                      {value.title}
                    </h3>

                    <p className="mt-1 text-sm leading-6 text-muted">
                      {value.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
