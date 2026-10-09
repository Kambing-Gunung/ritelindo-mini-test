import { faqItems } from '../../data/faq';

import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';
import { SectionHeading } from '../ui/SectionHeading';

export function FAQ() {
  return (
    <section id="faq" aria-labelledby="faq-title" className="border-b border-line bg-page">
      <Container className="py-20 sm:py-24">
          <SectionHeading
            id="faq-title"
            title="Pertanyaan yang Sering Ditanyakan"
            description="Temukan jawaban untuk pertanyaan umum seputar layanan kami."
            className="mb-10 lg:mb-12"
          />

        <div className="divide-y divide-line overflow-hidden rounded-3xl border border-line bg-surface">
          {faqItems.map((item) => (
            <details key={item.id} className="group px-5 sm:px-7">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 font-semibold text-ink marker:hidden [&::-webkit-details-marker]:hidden">
                <span>{item.question}</span>
                <span
                  aria-hidden="true"
                  className="flex size-6 shrink-0 items-center justify-center rounded-full border border-line bg-white text-lg font-normal text-brand-primary transition-transform duration-200 group-open:rotate-45"
                >
                  <Icon name="plus" className="size-3" />
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
