import { whyRitelindoItems, valuePropositions, type WhyRitelindoItem } from '../../data/whyRitelindo';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

function WhyIcon({ icon }: Pick<WhyRitelindoItem, 'icon'>) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.8,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    'aria-hidden': true,
  };

  if (icon === 'factory') {
    return (
      <svg {...common}>
        <path d="M3 21h18" />
        <path d="M5 21V9l6 3V9l6 3V6h2v15" />
        <path d="M8 17h2M14 17h2" />
      </svg>
    );
  }

  if (icon === 'custom') {
    return (
      <svg {...common}>
        <path d="m14.7 6.3 3-3 3 3-3 3" />
        <path d="m2.8 21.2 6.4-6.4" />
        <path d="m11.7 8.3 4 4" />
        <path d="m7.5 13.5 3 3" />
      </svg>
    );
  }

  if (icon === 'options') {
    return (
      <svg {...common}>
        <path d="M4 6h16M4 12h16M4 18h16" />
        <circle cx="8" cy="6" r="1.5" />
        <circle cx="15" cy="12" r="1.5" />
        <circle cx="10" cy="18" r="1.5" />
      </svg>
    );
  }

  return (
    <svg {...common}>
      <path d="M4 20V8h16v12" />
      <path d="M8 12h2M14 12h2M8 16h2M14 16h2" />
      <path d="M2 20h20" />
      <path d="m9 8 3-4 3 4" />
    </svg>
  );
}

const valueToneClasses = {
  primary: 'bg-brand-primary text-white',
  blue: 'bg-sky-100 text-sky-700',
  amber: 'bg-amber-100 text-amber-700',
  violet: 'bg-violet-100 text-violet-700',
  green: 'bg-emerald-100 text-emerald-700',
} as const;

export function WhyRitelindo() {
  return (
    <section id="why-ritelindo" className="border-b border-line bg-white py-16 sm:py-20 lg:py-24">
      <Container>
        <SectionHeading
          eyebrow="Why Ritelindo"
          title="Kenapa Memilih Ritelindo?"
          description="Solusi retail yang dapat disesuaikan dengan kebutuhan toko Anda, dari pengadaan rak hingga penataan ruang."
          className="mb-10 lg:mb-12"
        />

        <div className="grid gap-6 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-8">
          <div className="grid gap-4 sm:grid-cols-2">
            {whyRitelindoItems.map((item) => (
              <article
                key={item.title}
                className="rounded-2xl border border-line bg-surface p-5 shadow-[var(--shadow-soft)]"
              >
                <div className="mb-5 flex size-10 items-center justify-center rounded-xl bg-white text-brand-primary ring-1 ring-line">
                  <WhyIcon icon={item.icon} />
                </div>
                <h3 className="text-base font-bold text-ink">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="rounded-2xl border border-line bg-surface-strong p-5 sm:p-6 lg:p-7">
            <div className="max-w-xl">
              <p className="text-sm font-semibold text-brand-secondary">Value untuk Setup Toko Anda</p>
              <p className="mt-2 text-sm leading-6 text-muted">
                Dapatkan benefit utama untuk membantu Anda merencanakan dan menyiapkan kebutuhan retail.
              </p>
            </div>

            <div className="mt-6 divide-y divide-line">
              {valuePropositions.map((value) => (
                <div key={value.title} className="flex gap-4 py-4 first:pt-0 last:pb-0">
                  <div
                    className={`mt-0.5 flex size-10 shrink-0 items-center justify-center rounded-xl ${valueToneClasses[value.tone]}`}
                  >
                    <span className="text-sm font-extrabold">✓</span>
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-sm font-bold text-ink sm:text-base">{value.title}</h3>
                    <p className="mt-1 text-sm leading-6 text-muted">{value.description}</p>
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
