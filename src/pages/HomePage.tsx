import { useState } from 'react';
import { Navbar } from '../components/layout/Navbar';
import { Footer } from '../components/layout/Footer';

import { Hero } from '../components/sections/Hero';
import { Products } from '../components/sections/Products';
import { WhyRitelindo } from '../components/sections/WhyRitelindo';
import { Services } from '../components/sections/Services';
import { HowItWorks } from '../components/sections/HowItWorks';
import { Trust } from '../components/sections/Trust';
import { Proof } from '../components/sections/Proof';
import { FAQ } from '../components/sections/FAQ';
import { FinalCTA } from '../components/sections/FinalCTA';
import { StickyWhatsApp } from '../components/ui/StickyWhatsApp';



export function HomePage() {
  const [productSearch, setProductSearch] = useState('');

  const handleProductSearch = (query: string) => {
    setProductSearch(query);
    document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Navbar />

      <main>
        <Hero onProductSearch={handleProductSearch} />
        <Products searchQuery={productSearch} />
        <WhyRitelindo />
        <Services />
        <HowItWorks />
        <Trust />
        <Proof />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />

      <StickyWhatsApp />
    </>
  );
}
