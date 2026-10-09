import { useMemo, useState } from 'react';
import { Container } from '../ui/Container';
import { productCategories, products, getCategoryName } from '../../data/products';

type ProductsProps = {
  searchQuery?: string;
};

function matchesQuery(value: string, query: string) {
  return value.toLowerCase().includes(query);
}

function ProductVisual({ variant }: { variant: (typeof products)[number]['visual'] }) {
  if (variant === 'basket') {
    return (
      <div className="relative h-full w-full">
        <div className="absolute bottom-[18%] left-[18%] right-[18%] top-[34%] rounded-[1.5rem] border-4 border-brand-primary/75 bg-white/70" />
        <div className="absolute left-[28%] top-[24%] h-[20%] w-[44%] rounded-t-[1.2rem] border-x-4 border-t-4 border-brand-primary/75" />
        <div className="absolute inset-x-[30%] bottom-[14%] h-1.5 rounded-full bg-brand-primary/30" />
      </div>
    );
  }

  if (variant === 'counter') {
    return (
      <div className="relative h-full w-full">
        <div className="absolute bottom-[18%] left-[16%] right-[16%] h-[42%] rounded-t-2xl border-4 border-brand-primary/75 bg-white/65" />
        <div className="absolute bottom-[10%] left-[25%] h-3 w-12 rounded-full bg-brand-primary/70" />
        <div className="absolute bottom-[10%] right-[25%] h-3 w-12 rounded-full bg-brand-primary/70" />
        <div className="absolute left-[25%] right-[25%] top-[24%] h-2 rounded-full bg-brand-primary/20" />
      </div>
    );
  }

  if (variant === 'wall') {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-[18%] top-[18%] h-1.5 rounded-full bg-brand-primary/80" />
        <div className="absolute inset-x-[18%] top-[44%] h-1.5 rounded-full bg-brand-primary/70" />
        <div className="absolute inset-x-[18%] top-[70%] h-1.5 rounded-full bg-brand-primary/60" />
        <div className="absolute bottom-[14%] left-[22%] top-[18%] w-2 rounded-full bg-brand-primary/80" />
        <div className="absolute bottom-[14%] right-[22%] top-[18%] w-2 rounded-full bg-brand-primary/80" />
      </div>
    );
  }

  if (variant === 'backmesh') {
    return (
      <div className="relative h-full w-full">
        <div className="absolute inset-x-[18%] bottom-[18%] top-[20%] rounded-xl border-4 border-brand-primary/65 bg-white/45" />
        <div className="absolute inset-x-[24%] top-[32%] h-1.5 rounded-full bg-brand-primary/55" />
        <div className="absolute inset-x-[24%] top-[54%] h-1.5 rounded-full bg-brand-primary/55" />
        <div className="absolute inset-x-[24%] top-[76%] h-1.5 rounded-full bg-brand-primary/55" />
      </div>
    );
  }

  const isDouble = variant === 'double';

  return (
    <div className="relative h-full w-full">
      <div className="absolute inset-x-[18%] bottom-[18%] top-[18%] rounded-xl border-4 border-brand-primary/70 bg-white/50" />
      <div className="absolute inset-x-[18%] top-[36%] h-1.5 rounded-full bg-brand-primary/70" />
      <div className="absolute inset-x-[18%] top-[62%] h-1.5 rounded-full bg-brand-primary/60" />
      {!isDouble && (
        <div className="absolute bottom-[12%] left-[28%] h-2.5 w-12 rounded-full bg-brand-primary/55" />
      )}
      {isDouble && (
        <div className="absolute bottom-[12%] left-[28%] h-2.5 w-12 rounded-full bg-brand-primary/55" />
      )}
    </div>
  );
}

export function Products({ searchQuery = '' }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch = activeCategory === 'all' || product.categoryId === activeCategory;
      if (!categoryMatch) return false;
      if (!normalizedQuery) return true;

      const searchableText = [
        product.id,
        product.name,
        product.description,
        product.categoryId,
        getCategoryName(product.categoryId),
        ...product.keywords,
      ]
        .join(' ')
        .toLowerCase();

      return matchesQuery(searchableText, normalizedQuery);
    });
  }, [activeCategory, normalizedQuery]);

  return (
    <section id="products" aria-labelledby="products-title" className="border-b border-line bg-surface py-16 sm:py-20 lg:py-24">
      <Container>
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            {/* <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Product Discovery
            </p> */}
            <h2 id="products-title" className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">
              Produk &amp; Solusi Retail
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Solusi retail yang dapat disesuaikan dengan kebutuhan toko Anda.
            </p>
          </div>

          {normalizedQuery && (
            <p className="text-sm font-medium text-brand-secondary">
              Hasil untuk <span className="font-bold">“{searchQuery}”</span>
            </p>
          )}
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2" role="tablist" aria-label="Filter kategori produk">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
              activeCategory === 'all'
                ? 'border-brand-primary bg-brand-primary text-white'
                : 'border-line bg-page text-ink hover:border-brand-secondary hover:bg-surface-strong'
            }`}
          >
            Semua Produk
          </button>

          {productCategories.map((category) => (
            <button
              key={category.id}
              type="button"
              onClick={() => setActiveCategory(category.id)}
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${
                activeCategory === category.id
                  ? 'border-brand-primary bg-brand-primary text-white'
                  : 'border-line bg-page text-ink hover:border-brand-secondary hover:bg-surface-strong'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {filteredProducts.length > 0 ? (
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducts.map((product) => (
              <article
                key={product.id}
                className="group overflow-hidden rounded-3xl border border-line bg-page shadow-soft transition-transform duration-200 hover:-translate-y-1"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface-strong p-5">
                  <div className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[0.65rem] font-bold uppercase tracking-[0.16em] text-brand-secondary">
                    {getCategoryName(product.categoryId)}
                  </div>
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      className="size-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      loading="lazy"
                      decoding="async"
                    />
                  ) : (
                    <ProductVisual variant={product.visual} />
                  )}
                </div>

                <div className="p-6">
                  <h3 className="text-lg font-bold text-ink">{product.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-muted">{product.description}</p>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="mt-8 rounded-3xl border border-dashed border-line bg-page px-6 py-12 text-center">
            <h3 className="text-lg font-bold text-ink">Produk belum ditemukan</h3>
            <p className="mx-auto mt-2 max-w-xl text-sm leading-6 text-muted">
              Coba gunakan kata kunci yang lebih umum atau pilih kategori produk yang tersedia.
            </p>
          </div>
        )}
      </Container>
    </section>
  );
}
