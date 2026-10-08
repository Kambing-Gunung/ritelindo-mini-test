export type WhyRitelindoItem = {
  title: string;
  description: string;
  icon: 'factory' | 'custom' | 'options' | 'interior';
};

export type ValueProposition = {
  title: string;
  description: string;
  tone: 'primary' | 'blue' | 'amber' | 'violet' | 'green';
};

export const whyRitelindoItems: WhyRitelindoItem[] = [
  {
    title: 'Langsung dari Pabrik',
    description: 'Produk langsung dari pabrik dengan harga kompetitif.',
    icon: 'factory',
  },
  {
    title: 'Bisa Custom',
    description: 'Menyesuaikan kebutuhan dan ukuran ruangan toko Anda.',
    icon: 'custom',
  },
  {
    title: 'Pilihan Pembelian Fleksibel',
    description: 'Melayani pembelian satuan, paket toko, hingga proyek retail.',
    icon: 'options',
  },
  {
    title: 'Jasa Interior Toko',
    description: 'Membantu mewujudkan tampilan toko yang lebih stylish dan modern.',
    icon: 'interior',
  },
];

export const valuePropositions: ValueProposition[] = [
  {
    title: 'Gratis Konsultasi & Layout 3D',
    description: 'Rencanakan kebutuhan toko dengan bantuan konsultasi dan layout 3D.',
    tone: 'primary',
  },
  {
    title: 'Gratis Ongkir Jawa–Bali',
    description: 'Pengiriman lebih hemat untuk area Jawa dan Bali.',
    tone: 'blue',
  },
  {
    title: 'Gratis Perakitan',
    description: 'Gratis perakitan untuk area Jatim, Jateng, dan DIY.',
    tone: 'amber',
  },
  {
    title: 'Custom Sesuai Kebutuhan',
    description: 'Sesuaikan produk dengan kebutuhan dan ukuran ruang toko.',
    tone: 'violet',
  },
  {
    title: 'Harga Kompetitif',
    description: 'Produk langsung dari pabrik dengan harga kompetitif.',
    tone: 'green',
  },
];
