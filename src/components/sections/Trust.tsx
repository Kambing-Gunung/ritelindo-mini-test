import { clientBrands } from '../../data/trust';
import { Container } from '../ui/Container';

export function Trust() {
  return (
    <section id="trust" aria-labelledby="trust-title" className="border-b border-line bg-page">
      <Container className="py-20 sm:py-24">

        <h2 id="trust-title" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Dipercaya oleh Berbagai Brand
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Kami telah membantu berbagai bisnis retail di seluruh Indonesia.
        </p>

        <div className="mt-10">
          <p className="text-sm font-semibold text-ink">Dipercaya oleh berbagai brand</p>
          <div className="mt-4 flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory">
            {clientBrands.map((brand) => (
              <div
                key={brand.id}
                className="flex min-h-20 min-w-40 shrink-0 snap-start items-center justify-center rounded-2xl border border-line bg-surface px-5 py-4"
              >
                <img
                  src={brand.logo}
                  alt={`${brand.name} logo`}
                  className="max-h-9 w-auto max-w-32 object-contain"
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
