import { useEffect, useState } from 'react';

import { buildWhatsAppUrl, siteConfig } from '../../config/site';
import { Icon } from './Icon';

export function StickyWhatsApp() {
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const hero = document.getElementById('home');
    const footer = document.getElementById('contact');

    if (!hero || !footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const isHeroVisible = entries.some(
          (entry) => entry.target === hero && entry.isIntersecting,
        );

        const isFooterVisible = entries.some(
          (entry) => entry.target === footer && entry.isIntersecting,
        );

        setIsHidden(isHeroVisible || isFooterVisible);
      },
      {
        threshold: 0.1,
      },
    );

    observer.observe(hero);
    observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  if (isHidden) return null;

  return (
    <a
      href={buildWhatsAppUrl(siteConfig.whatsapp.message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Konsultasi WhatsApp Gratis"
      className="fixed bottom-4 right-4 z-50 flex size-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:size-18 sm:bottom-10 sm:right-12 animate-bounce"
    >
      <Icon name="whatsapp" className="size-8 sm:size-11" />
    </a>
  );
}