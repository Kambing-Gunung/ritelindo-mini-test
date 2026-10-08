import { Navbar } from '../components/layout/Navbar';
import { Container } from '../components/ui/Container';

const sections = [
  ['products', 'Produk'],
  ['services', 'Layanan'],
  ['contact', 'Kontak'],
] as const;

export function HomePage() {
  return (
    <>
      <Navbar />

      <main>
        <section id="home" className="border-b border-line bg-page py-20 sm:py-28">
          <Container>
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.18em] text-brand-secondary">
              Ritelindo Akselera Kolaborasi
            </p>
            <h1 className="max-w-4xl text-4xl font-bold tracking-tight text-ink sm:text-5xl lg:text-6xl">
              Solusi Rak &amp; Display untuk Kebutuhan Retail Modern
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-7 text-muted sm:text-lg">
              Foundation landing page sudah siap. Section berikutnya akan diimplementasikan berdasarkan
              source of truth yang sudah kita lock.
            </p>
          </Container>
        </section>

        {sections.map(([id, title]) => (
          <section key={id} id={id} className="min-h-80 border-b border-line py-20">
            <Container>
              <h2 className="text-3xl font-bold tracking-tight text-ink">{title}</h2>
            </Container>
          </section>
        ))}
      </main>

      <footer className="border-t border-line bg-brand-primary py-12 text-white">
        <Container>
          <p className="text-sm text-white/70">Ritelindo Akselera Kolaborasi</p>
        </Container>
      </footer>
    </>
  );
}
