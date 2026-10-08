export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tone: 'blue' | 'slate' | 'light' | 'warm';
};

export const services: Service[] = [
  {
    id: 'consultation-layout',
    eyebrow: 'Perencanaan',
    title: 'Konsultasi & Layout 3D',
    description:
      'Rencanakan kebutuhan toko dengan konsultasi dan layout 3D yang membantu memvisualisasikan penataan ruang.',
    tone: 'blue',
  },
  {
    id: 'retail-display',
    eyebrow: 'Produk',
    title: 'Rak & Display Toko',
    description:
      'Pilihan rak minimarket, rak toko, rak gudang, dan perlengkapan retail untuk berbagai kebutuhan usaha.',
    tone: 'slate',
  },
  {
    id: 'custom',
    eyebrow: 'Penyesuaian',
    title: 'Custom Sesuai Kebutuhan',
    description:
      'Sesuaikan kebutuhan produk dengan ukuran ruangan dan kebutuhan toko Anda.',
    tone: 'light',
  },
  {
    id: 'store-interior',
    eyebrow: 'Penataan',
    title: 'Jasa Interior Toko',
    description:
      'Bantu mewujudkan tampilan toko yang lebih stylish dan modern sesuai kebutuhan retail Anda.',
    tone: 'warm',
  },
];
