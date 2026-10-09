import { featuredTestimonial } from '../../data/proof';
import { Container } from '../ui/Container';

function Stars({ rating }: { rating: number }) {
  return (
    <span
      className="text-sm font-semibold tracking-[0.18em] text-amber-500"
      aria-label={`${rating} dari 5 bintang`}
    >
      {'★'.repeat(rating)}
    </span>
  );
}

export function Proof() {
  return (
    <section id="proof" aria-labelledby="proof-title" className="border-b border-line bg-page">
      <Container className="py-20 sm:py-24">
        <h2 id="proof-title" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
          Apa Kata Klien Kami?
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
          Testimoni dari para pelanggan yang telah merasakan layanan kami.
        </p>

        <div className="mt-10">
          <div className="mt-5 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory">
            {featuredTestimonial.map((testimonial) => (
              <article
                key={`${testimonial.name}-${testimonial.role}`}
                className="min-w-[min(88vw,34rem)] shrink-0 snap-start rounded-3xl border border-line bg-surface-strong p-6 shadow-soft sm:min-w-[30rem] sm:p-8 lg:min-w-[32rem]"
              >
                <img src="gambar testimoni" alt="gambar testimoni" /> {/* Belum Diatur*/}

                <div>
                  <Stars rating={testimonial.rating} />

                  <blockquote className="mt-6 text-lg  max-w-[max(24vw,21rem)] font-semibold leading-8 text-ink sm:text-xl">
                    “{testimonial.quote}”
                  </blockquote>

                  <footer className="mt-8 border-t border-line pt-5">
                    <p className="font-bold text-ink">{testimonial.name} · {testimonial.role}</p>
                    <p className="mt-1 text-sm leading-6 text-muted">
                      {testimonial.location}
                    </p>
                  </footer>
                </div>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
