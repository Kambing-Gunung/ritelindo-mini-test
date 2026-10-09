import { featuredTestimonial } from '../../data/proof';

import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

function Stars({ rating }: { rating: number }) {
  return (
    <div
      className="flex items-center lg:justify-center gap-2"
      aria-label={`${rating} dari 5 bintang`}
    >
      <span
        aria-hidden="true"
        className="shrink-0 text-sm font-semibold tracking-[0.18em] text-amber-500"
      >
        {'★'.repeat(rating)}
      </span>

      <span className="shrink-0 text-sm font-medium text-muted">
        ({rating}/5)
      </span>
    </div>
  );
}

export function Proof() {
  return (
    <section
      id="proof"
      aria-labelledby="proof-title"
      className="border-b border-line bg-page"
    >
      <Container className="py-20 sm:py-24">
        <SectionHeading
          id="proof-title"
          title="Apa Kata Klien Kami?"
          description="Testimoni dari para pelanggan yang telah merasakan layanan kami."
          className="mb-10 lg:mb-12"

        />

        <div className="flex gap-5 overflow-x-auto pb-4 scrollbar-none">
          {featuredTestimonial.map((testimonial) => (
            <article
              key={`${testimonial.name}-${testimonial.role}`}
              className="grid w-[calc(100vw-2.5rem)] shrink-0 grid-cols-[7rem_minmax(0,1fr)] items-stretch gap-4 overflow-hidden rounded-2xl border border-line bg-surface-strong p-4 shadow-soft sm:w-[32rem] sm:grid-cols-[9rem_minmax(0,1fr)] sm:gap-5 sm:p-5 lg:block lg:w-[30rem] lg:rounded-3xl lg:p-6"
            >
              <div className="min-h-0 self-stretch overflow-hidden lg:mx-auto lg:w-full">
                <img
                  src={testimonial.image}
                  alt={`Testimoni ${testimonial.name}`}
                  className="h-full w-full rounded-xl object-cover sm:rounded-2xl lg:mb-5 lg:aspect-square lg:h-auto"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="min-w-0 overflow-hidden">
                <Stars rating={testimonial.rating} />

                <Icon
                  name="quote"
                  className="mt-5 hidden size-10 text-brand-primary/10 lg:block"
                />

                <blockquote className="mt-2 break-words text-sm italic leading-5 text-ink sm:text-base sm:leading-6 lg:mt-2 lg:text-base lg:font-medium lg:not-italic lg:leading-6 lg:text-justify">
                  “{testimonial.quote}”
                </blockquote>

                <footer className="mt-3 border-t border-line pt-3 lg:mt-4 lg:pt-4">
                  <p className="break-words text-sm font-bold leading-5 text-ink sm:text-base">
                    {testimonial.name} · {testimonial.role}
                  </p>

                  <p className="mt-1 break-words text-sm leading-5 text-muted">
                    {testimonial.location}
                  </p>
                </footer>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}