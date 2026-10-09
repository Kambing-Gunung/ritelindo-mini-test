import { clientBrands } from '../../data/trust';
import { Container } from '../ui/Container';
import { SectionHeading } from '../ui/SectionHeading';

export function Trust() {
  return (
    <section id="trust" aria-labelledby="trust-title" className="border-b border-line bg-page">
      <Container className="py-20 sm:py-24">

        <SectionHeading
          id="trust-title"
          title="Dipercaya oleh Berbagai Brand"
          description="Kami telah membantu berbagai bisnis retail di seluruh Indonesia."
          className="mb-10 lg:mb-12"
        />

        <p className="text-sm font-semibold text-ink">Dipercaya oleh berbagai brand</p>
        <div className="mt-4 flex gap-3 overflow-x-auto pb-3 snap-x snap-mandatory scrollbar-none">
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
      </Container>
    </section>
  );
}
