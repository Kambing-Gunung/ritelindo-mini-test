export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  keywords: string[];
};

export type Product = {
  id: string;
  name: string;
  categoryId: string;
  description: string;
  keywords: string[];
  visual: 'single' | 'double' | 'wall' | 'backmesh' | 'basket' | 'counter';
};

export const productCategories: ProductCategory[] = [
  {
    id: 'rak-minimarket',
    name: 'Rak Minimarket',
    description: 'Solusi rak dan display untuk kebutuhan toko modern.',
    keywords: ['rak', 'minimarket', 'gondola', 'toko'],
  },
  {
    id: 'rak-gudang',
    name: 'Rak Gudang',
    description: 'Perlengkapan penyimpanan untuk kebutuhan retail dan gudang.',
    keywords: ['rak', 'gudang', 'warehouse', 'storage'],
  },
  {
    id: 'rak-display',
    name: 'Rak Display',
    description: 'Display untuk membantu produk tampil lebih terorganisir.',
    keywords: ['rak', 'display', 'etalase', 'produk'],
  },
  {
    id: 'perlengkapan-retail',
    name: 'Perlengkapan Retail',
    description: 'Beragam perlengkapan untuk mendukung operasional toko.',
    keywords: ['retail', 'perlengkapan', 'aksesori', 'aksesoris'],
  },
];

export const products: Product[] = [
  {
    id: 'rak-single',
    name: 'Rak Single',
    categoryId: 'rak-minimarket',
    description: 'Rak satu sisi untuk kebutuhan display dan penataan produk toko.',
    keywords: ['single', 'rak single', 'minimarket', 'gondola', 'toko'],
    visual: 'single',
  },
  {
    id: 'rak-double',
    name: 'Rak Double',
    categoryId: 'rak-minimarket',
    description: 'Rak dua sisi untuk memaksimalkan area display di ruang retail.',
    keywords: ['double', 'rak double', 'minimarket', 'gondola', 'toko'],
    visual: 'double',
  },
  {
    id: 'rak-dinding',
    name: 'Rak Dinding',
    categoryId: 'rak-display',
    description: 'Rak dinding untuk memanfaatkan area vertikal pada ruang toko.',
    keywords: ['dinding', 'wall', 'rak dinding', 'display', 'toko'],
    visual: 'wall',
  },
  {
    id: 'rak-mundo-backmesh',
    name: 'Rak Mundo / Backmesh Kaki',
    categoryId: 'rak-display',
    description: 'Display backmesh dengan kaki untuk kebutuhan penataan produk retail.',
    keywords: ['mundo', 'backmesh', 'rak mundo', 'display', 'retail'],
    visual: 'backmesh',
  },
  {
    id: 'keranjang-jinjing',
    name: 'Keranjang Jinjing',
    categoryId: 'perlengkapan-retail',
    description: 'Perlengkapan pendukung untuk kebutuhan operasional dan pengalaman belanja.',
    keywords: ['keranjang', 'jinjing', 'shopping basket', 'retail'],
    visual: 'basket',
  },
  {
    id: 'meja-kasir',
    name: 'Meja Kasir',
    categoryId: 'perlengkapan-retail',
    description: 'Meja kasir sebagai bagian dari kebutuhan perlengkapan area toko.',
    keywords: ['meja', 'kasir', 'checkout', 'counter', 'retail'],
    visual: 'counter',
  },
];

export const getCategoryName = (categoryId: string) =>
  productCategories.find((category) => category.id === categoryId)?.name ?? 'Produk Retail';
