import { clientBrands, featuredTestimonial } from '../../data/trustProof';
import { Container } from '../ui/Container';

export function TrustProof() {
  return (
    <section
      id="trust"
      aria-labelledby="trust-title"
      className="border-b border-line bg-page"
    >
      <Container className="py-20 sm:py-24">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-14">
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Trust &amp; Proof
            </p>
            <h2 id="trust-title" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
              Apa Kata Klien Kami?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-7 text-muted sm:text-lg">
              Pengalaman pelanggan dan daftar brand yang ditampilkan pada sumber resmi brand terkait menjadi
              bukti sosial bahwa solusi retail telah digunakan oleh berbagai jenis bisnis.
            </p>

            <div className="mt-8">
              <p className="text-sm font-semibold text-ink">Dipercaya oleh berbagai brand</p>
              <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3">
                {clientBrands.map((brand) => (
                  <div
                    key={brand.id}
                    className="flex min-h-16 items-center justify-center rounded-2xl border border-line bg-surface px-4 text-center text-sm font-semibold text-brand-primary transition-colors hover:border-brand-secondary/30 hover:bg-surface-strong"
                  >
                    {brand.name}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <article className="rounded-3xl border border-line bg-surface-strong p-6 shadow-soft sm:p-8">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full bg-white px-3 py-1 text-xs font-bold uppercase tracking-[0.14em] text-brand-secondary">
                Customer Feedback
              </span>
              <span
                className="text-sm font-semibold tracking-[0.18em] text-amber-500"
                aria-label={`${featuredTestimonial.rating} dari 5 bintang`}
              >
                {'★'.repeat(featuredTestimonial.rating)}
              </span>
            </div>

            <blockquote className="mt-6 text-lg font-semibold leading-8 text-ink sm:text-xl">
              “{featuredTestimonial.quote}”
            </blockquote>

            <footer className="mt-8 border-t border-line pt-5">
              <p className="font-bold text-ink">{featuredTestimonial.name}</p>
              <p className="mt-1 text-sm leading-6 text-muted">
                {featuredTestimonial.role} · {featuredTestimonial.location}
              </p>
            </footer>
          </article>
        </div>
      </Container>
    </section>
  );
}
