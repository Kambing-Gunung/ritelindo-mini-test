import { useMemo, useState, type FormEvent } from 'react';
import { productCategories } from '../../data/products';
import { Container } from '../ui/Container';

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
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(22rem,0.92fr)] lg:items-center lg:gap-16">
          <div className="order-1">
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
              Solusi perlengkapan retail untuk membantu kebutuhan toko modern, dari kebutuhan rak
              hingga setup ruang yang lebih terencana.
            </p>

            <div className="mt-8 space-y-3">
              <p className="text-sm font-semibold text-ink">Cari kebutuhan retail Anda</p>

              <form onSubmit={handleSubmit} role="search">
                <label htmlFor="hero-product-search" className="sr-only">
                  Cari produk retail
                </label>

                <div className="flex min-h-14 items-center gap-3 rounded-2xl border border-line bg-white px-4 shadow-soft transition focus-within:border-brand-secondary focus-within:ring-4 focus-within:ring-brand-secondary/10">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    className="size-5 shrink-0 text-muted"
                  >
                    <circle cx="11" cy="11" r="6.5" />
                    <path d="m16 16 4.25 4.25" />
                  </svg>

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
                    className="hidden min-h-10 shrink-0 items-center justify-center rounded-xl bg-brand-primary px-4 text-sm font-semibold text-white transition-colors hover:bg-brand-secondary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary sm:inline-flex"
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

          <div className="order-2">
            <div className="relative mx-auto aspect-[4/3] w-full max-w-xl overflow-hidden rounded-3xl border border-line bg-surface-strong p-5 shadow-soft sm:p-7 lg:max-w-none">
              <div className="absolute inset-x-5 top-5 flex items-center justify-between sm:inset-x-7 sm:top-7">
                <span className="rounded-full bg-white/85 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-secondary backdrop-blur">
                  Product Overview
                </span>
                <span className="text-xs font-semibold text-muted">Retail Solution</span>
              </div>

              <div
                aria-label="Placeholder visual rak retail"
                className="absolute inset-x-[10%] bottom-[12%] top-[28%] rounded-[1.5rem] border border-slate-300/70 bg-white/80 shadow-inner backdrop-blur-sm"
              >
                <div className="absolute inset-x-0 top-[18%] h-1.5 bg-brand-primary/85" />
                <div className="absolute inset-x-0 top-[43%] h-1.5 bg-brand-primary/85" />
                <div className="absolute inset-x-0 top-[68%] h-1.5 bg-brand-primary/85" />
                <div className="absolute bottom-0 left-[12%] top-0 w-2 rounded-full bg-brand-primary/90" />
                <div className="absolute bottom-0 right-[12%] top-0 w-2 rounded-full bg-brand-primary/90" />
                <div className="absolute inset-x-[18%] top-[8%] text-center text-xs font-semibold text-brand-secondary/80 sm:text-sm">
                  Visual produk sementara
                </div>
              </div>

              <div className="absolute bottom-5 left-5 right-5 grid grid-cols-2 gap-2 sm:bottom-7 sm:left-7 sm:right-7 sm:grid-cols-4">
                {productCategories.map((category) => (
                  <button
                    key={category.id}
                    type="button"
                    onClick={() => handleCategorySelect(category.id)}
                    className="rounded-xl border border-white/70 bg-white/85 px-3 py-2.5 text-left text-xs font-semibold text-ink shadow-sm backdrop-blur transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-primary"
                  >
                    {category.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}