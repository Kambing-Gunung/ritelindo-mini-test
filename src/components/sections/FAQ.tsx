import { faqItems } from '../../data/faq';
import { Container } from '../ui/Container';

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-b border-line bg-page">
      <Container className="py-20 sm:py-24">
        <div className="max-w-3xl">
          <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
            FAQ
          </p>
          <h2 id="faq-title" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl lg:text-5xl">
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mt-4 text-base leading-7 text-muted sm:text-lg">
            Temukan jawaban singkat untuk pertanyaan umum seputar layanan Ritelindo.
          </p>
        </div>

        <div className="mt-10 divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
          {faqItems.map((item) => (
            <details key={item.id} className="group px-5 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex size-8 shrink-0 items-center justify-center rounded-full border border-line bg-white text-lg font-normal text-brand-primary transition-transform duration-200 group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <div className="max-w-3xl pb-5 pr-12 text-sm leading-7 text-muted sm:text-base">
                {item.answer}
              </div>
            </details>
          ))}
        </div>
      </Container>
    </section>
  );
}
