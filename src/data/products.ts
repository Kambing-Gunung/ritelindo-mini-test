export type ProductCategory = {
  id: string;
  name: string;
  description: string;
  keywords: string[];
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
    description: 'Beragam perlengkapan untuk mendukung kebutuhan toko.',
    keywords: ['retail', 'perlengkapan', 'aksesori', 'aksesoris'],
  },
];