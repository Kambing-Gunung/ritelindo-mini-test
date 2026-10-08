import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Hero } from '../components/sections/Hero';
import { WhyRitelindo } from '../components/sections/WhyRitelindo';

import { Container } from '../components/ui/Container';

export function HomePage() {
  const [productSearch, setProductSearch] = useState('');

  function handleProductSearch(query: string) {
    setProductSearch(query);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <>
      <Navbar />

      <main>
        <Hero onProductSearch={handleProductSearch} />
        <WhyRitelindo/>

        <section id="products" className="min-h-80 border-b border-line bg-surface py-20">
          <Container>
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Product Discovery
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-ink sm:text-4xl">Produk</h2>
            <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
              {productSearch
                ? `Hasil pencarian untuk “${productSearch}” akan ditampilkan pada tahap implementasi produk.`
                : 'Product catalogue akan diimplementasikan pada section berikutnya.'}
            </p>
          </Container>
        </section>

        <section id="services" className="min-h-80 border-b border-line py-20">
          <Container>
            <h2 className="text-3xl font-bold tracking-tight text-ink">Layanan</h2>
          </Container>
        </section>

        <section id="contact" className="min-h-80 border-b border-line py-20">
          <Container>
            <h2 className="text-3xl font-bold tracking-tight text-ink">Kontak</h2>
          </Container>
        </section>
      </main>

      <footer className="border-t border-line bg-brand-primary py-12 text-white">
        <Container>
          <p className="text-sm text-white/70">Ritelindo Akselera Kolaborasi</p>
        </Container>
      </footer>
    </>
  );
}