import { useMemo, useState } from 'react';
import { Container } from '../ui/Container';
import { productCategories, products, getCategoryName } from '../../data/products';
import { SectionHeading } from '../ui/SectionHeading';

type ProductsProps = {
  searchQuery?: string;
};

function matchesQuery(value: string, query: string) {
  return value.toLowerCase().includes(query);
}

export function Products({ searchQuery = '' }: ProductsProps) {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const normalizedQuery = searchQuery.trim().toLowerCase();

  const searchLabel =
    productCategories.find(
      (category) => category.id === normalizedQuery,
    )?.name ?? searchQuery;

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const categoryMatch =
        activeCategory === 'all' || product.categoryId === activeCategory;

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
          <SectionHeading
            id="products-title"
            title="Produk &amp; Solusi Retail"
            description="Solusi retail yang dapat disesuaikan dengan kebutuhan toko Anda."
          />

          {normalizedQuery && (
            <p className="text-sm font-medium text-brand-secondary">
              Hasil untuk <span className="font-bold">“{searchLabel}”</span>
            </p>
          )}
        </div>

        <div className="mt-8 flex gap-2 overflow-x-auto pb-2 scrollbar-none" role="tablist" aria-label="Filter kategori produk">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${activeCategory === 'all'
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
              className={`shrink-0 rounded-full border px-4 py-2.5 text-sm font-semibold transition-colors ${activeCategory === category.id
                ? 'border-brand-primary bg-brand-primary text-white'
                : 'border-line bg-page text-ink hover:border-brand-secondary hover:bg-surface-strong'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div
          className="mt-8 flex gap-5 overflow-x-auto pb-2 scrollbar-thin"
        >
          {filteredProducts.map((product) => (
            <article
              key={product.id}
              className="w-[280px] shrink-0 overflow-hidden rounded-2xl border border-line bg-white"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-strong p-5">
                <div className="absolute left-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-ink backdrop-blur">
                  {getCategoryName(product.categoryId)}
                </div>

                <img
                  src={product.image}
                  alt={product.name}
                  className="size-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
              </div>

              <div className="p-6">
                <h3 className="text-lg font-bold text-ink">
                  {product.name}
                </h3>

                <p className="mt-2 text-sm leading-6 text-muted">
                  {product.description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
