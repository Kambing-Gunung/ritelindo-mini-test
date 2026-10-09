import type { Service } from '../../data/services';
import { services } from '../../data/services';
import { Container } from '../ui/Container';

function ServiceVisual({ service }: { service: Service }) {
  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-line bg-surface-strong">
      <img
        src={service.image}
        alt=""
        aria-hidden="true"
        className={`size-full ${service.imageFit === 'contain' ? 'object-contain p-5' : 'object-cover'}`}
        loading="lazy"
        decoding="async"
      />

      <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-brand-primary/25 to-transparent" />

      <span className="absolute bottom-3 left-3 rounded-full bg-white/90 px-2.5 py-1 text-[0.65rem] font-bold uppercase tracking-[0.14em] text-brand-primary backdrop-blur">
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
            {/* <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Services
            </p> */}
            <h2 id="services-title" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Layanan Utama Kami
            </h2>
            <p className="mt-4 text-base lg:text-nowrap leading-7 text-muted sm:text-lg">
              Solusi lengkap untuk kebutuhan retail Anda, dari perencanaan hingga toko siap digunakan.
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
