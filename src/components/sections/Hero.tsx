import { useMemo, useState, type FormEvent } from 'react';

import heroImage from '../../assets/images/hero/retail-store-hero.jpg';

import { productCategories } from '../../data/products';

import { Container } from '../ui/Container';
import { Icon } from '../ui/Icon';

interface HeroProps {
  onProductSearch?: (query: string) => void;
}

export function Hero({ onProductSearch }: HeroProps) {
  const [query, setQuery] = useState('');

  const matchingCategories = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    if (!normalizedQuery) {
      return productCategories;
    }

    return productCategories.filter((category) =>
      [category.name, category.description, ...category.keywords]
        .join(' ')
        .toLowerCase()
        .includes(normalizedQuery),
    );
  }, [query]);

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    onProductSearch?.(query.trim());
  }

  function handleCategorySelect(categoryId: string) {
    onProductSearch?.(categoryId);
  }

  return (
    <section
      id="home"
      aria-labelledby="hero-title"
      className="overflow-hidden border-b border-line bg-page"
    >
      <Container className="py-12 sm:py-16 lg:py-20">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.92fr)] lg:grid-rows-[auto_auto] lg:items-center lg:gap-x-16 lg:gap-y-8">
          <div className="order-1 lg:col-start-1 lg:row-start-1">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Ritelindo Akselera Kolaborasi
            </p>

            <h1
              id="hero-title"
              className="max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight text-ink sm:text-5xl lg:text-6xl"
            >
              Solusi Rak &amp; Display untuk Kebutuhan Retail Modern
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Ritelindo Akselera Kolaborasi menyediakan berbagai solusi rak minimarket, rak toko, rak gudang, dan perlengkapan retail dengan kualitas terbaik langsung dari pabrik.
            </p>
          </div>

          <div className="order-2 lg:col-start-2 lg:row-span-2 lg:row-start-1">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-line bg-surface-strong shadow-soft lg:max-w-none">
              <img
                src={heroImage}
                alt="Area toko retail dengan rak display"
                className="absolute inset-0 size-full object-cover"
                width="1199"
                height="800"
                fetchPriority="high"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-brand-primary/45 via-transparent to-transparent" />

              <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-7 sm:top-7">
                <span className="rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-secondary backdrop-blur">
                  Product Overview
                </span>
                <span className="text-xs font-semibold text-white drop-shadow-sm">Retail Solution</span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 sm:bottom-7 sm:left-7 sm:right-7 sm:grid-cols-4">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategorySelect(category.id)}
                    className="rounded-xl border border-white/70 bg-white/90 px-3 py-2.5 text-left text-xs font-semibold text-ink shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="order-3 space-y-3 lg:col-start-1 lg:row-start-2">
            {/* <p className="text-sm font-semibold text-ink">Cari kebutuhan retail Anda</p> */}

            <form onSubmit={handleSubmit} role="search">
              <label htmlFor="hero-product-search" className="sr-only">
                Cari produk retail
              </label>

              <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white px-4 sm:pr-0 shadow-soft transition focus-within:border-brand-secondary focus-within:ring-4 focus-within:ring-brand-secondary/10">
                <Icon name="search" className="size-5 shrink-0" />

                <input
                  id="hero-product-search"
                  name="product-search"
                  type="search"
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Cari rak minimarket, rak gudang, display..."
                  autoComplete="off"
                  className="min-w-0 flex-1 bg-transparent text-sm text-ink outline-none placeholder:text-muted sm:text-base"
                />

                <button
                  type="submit"
                  className="hidden min-h-14 shrink-0 items-center justify-center rounded-xl bg-brand-primary px-8 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:inline-flex"
                >
                  Cari
                </button>
              </div>
            </form>

            <div className="flex flex-wrap gap-2" aria-label="Kategori populer">
              {matchingCategories.map((category) => (
                <button
                  key={category.id}
                  type="button"
                  onClick={() => handleCategorySelect(category.id)}
                  className="rounded-full border border-line bg-surface px-3.5 py-2 text-xs font-semibold text-ink transition-colors hover:border-brand-secondary hover:bg-surface-strong focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:text-sm"
                >
                  {category.name}
                </button>
              ))}
            </div>

            {query && matchingCategories.length === 0 && (
              <p className="text-sm text-muted" role="status">
                Belum menemukan kategori yang sesuai. Coba kata kunci lain.
              </p>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
