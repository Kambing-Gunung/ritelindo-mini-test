import type { Service } from '../../data/services';
import { services } from '../../data/services';
import { Container } from '../ui/Container';

function ServiceVisual({ service }: { service: Service }) {
  return (
    <div
      aria-hidden="true"
      className={`relative aspect-[16/10] overflow-hidden rounded-2xl border border-line ${
        service.tone === 'blue'
          ? 'bg-brand-primary'
          : service.tone === 'slate'
            ? 'bg-slate-200'
            : service.tone === 'warm'
              ? 'bg-amber-50'
              : 'bg-surface-strong'
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgb(255_255_255_/_0.7),transparent_32%)]" />

      {service.id === 'consultation-layout' && (
        <>
          <div className="absolute left-[12%] top-[23%] h-[46%] w-[56%] rounded-lg border-2 border-white/70 bg-white/10" />
          <div className="absolute bottom-[19%] left-[17%] h-1.5 w-[46%] rounded-full bg-white/65" />
          <div className="absolute left-[23%] top-[34%] h-1 w-[36%] rounded-full bg-white/45" />
          <div className="absolute right-[13%] top-[28%] h-[54%] w-[20%] rounded-xl border border-white/50 bg-white/10" />
          <div className="absolute bottom-[15%] right-[17%] h-2.5 w-20 rounded-full bg-white/50" />
        </>
      )}

      {service.id === 'retail-display' && (
        <>
          <div className="absolute inset-x-[15%] top-[20%] h-1.5 rounded-full bg-brand-primary/80" />
          <div className="absolute inset-x-[15%] top-[43%] h-1.5 rounded-full bg-brand-primary/80" />
          <div className="absolute inset-x-[15%] top-[66%] h-1.5 rounded-full bg-brand-primary/80" />
          <div className="absolute bottom-[15%] left-[20%] top-[15%] w-2 rounded-full bg-brand-primary" />
          <div className="absolute bottom-[15%] right-[20%] top-[15%] w-2 rounded-full bg-brand-primary" />
          <div className="absolute bottom-[22%] left-[27%] h-12 w-10 rounded-md border border-brand-primary/30 bg-white/80" />
          <div className="absolute bottom-[22%] left-[43%] h-16 w-12 rounded-md border border-brand-primary/30 bg-white/80" />
          <div className="absolute bottom-[22%] right-[27%] h-10 w-14 rounded-md border border-brand-primary/30 bg-white/80" />
        </>
      )}

      {service.id === 'custom' && (
        <>
          <div className="absolute left-[13%] top-[25%] h-24 w-24 rounded-full border-[12px] border-brand-secondary/80" />
          <div className="absolute bottom-[16%] right-[15%] h-28 w-32 rounded-2xl border-2 border-brand-primary/55 bg-white/60" />
          <div className="absolute bottom-[28%] left-[23%] h-2 w-[42%] rounded-full bg-brand-primary/70" />
          <div className="absolute bottom-[35%] left-[29%] h-2 w-[29%] rounded-full bg-brand-primary/45" />
        </>
      )}

      {service.id === 'store-interior' && (
        <>
          <div className="absolute inset-x-[10%] bottom-0 top-[16%] rounded-t-[2rem] bg-white/80" />
          <div className="absolute bottom-[16%] left-[17%] h-[48%] w-[22%] rounded-xl border border-brand-primary/15 bg-surface-strong" />
          <div className="absolute bottom-[16%] left-[43%] h-[56%] w-[22%] rounded-xl border border-brand-primary/15 bg-surface-strong" />
          <div className="absolute bottom-[16%] right-[16%] h-[42%] w-[17%] rounded-xl border border-brand-primary/15 bg-surface-strong" />
          <div className="absolute left-[14%] right-[14%] top-[24%] h-2 rounded-full bg-brand-primary/15" />
        </>
      )}

      <span className="absolute bottom-3 left-3 rounded-full bg-white/85 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-primary backdrop-blur">
        {service.eyebrow}
      </span>
    </div>
  );
}

function ServiceCard({ service }: { service: Service }) {
  return (
    <article className="group overflow-hidden rounded-3xl border border-line bg-white shadow-soft transition-transform duration-200 hover:-translate-y-1">
      <ServiceVisual service={service} />
      <div className="p-5 sm:p-6">
        <h3 className="text-lg font-bold tracking-tight text-ink sm:text-xl">{service.title}</h3>
        <p className="mt-3 text-sm leading-6 text-muted sm:text-base sm:leading-7">{service.description}</p>
      </div>
    </article>
  );
}

export function Services() {
  return (
    <section id="services" aria-labelledby="services-title" className="border-b border-line bg-page">
      <Container className="py-20 sm:py-24">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Services
            </p>
            <h2 id="services-title" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Layanan Utama
            </h2>
            <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
              Dari perencanaan hingga penataan toko, temukan layanan yang sesuai dengan kebutuhan retail Anda.
            </p>
          </div>

          <span className="text-sm font-semibold text-brand-secondary">Solusi retail dalam satu tempat</span>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Container>
    </section>
  );
}
