export type WhyRitelindoItem = {
  title: string;
  description: string;
  icon: 'factory' | 'support' | 'store' | 'group';
};

export type ValueProposition = {
  title: string;
  description: string;
  tone: 'primary' | 'blue' | 'amber' | 'violet' | 'green' | 'red';
  icon: 'consulting' | 'shipping' | 'assembly' | 'customize' | 'price' | 'star';
};

export const whyRitelindoItems: WhyRitelindoItem[] = [
  {
    title: 'Langsung dari Pabrik',
    description: 'Kualitas terjamin dengan harga lebih kompetitif.',
    icon: 'factory',
  },
  {
    title: 'Bisa Custom',
    description: 'Menyesuaikan kebutuhan dan ukuran ruangan toko Anda.',
    icon: 'support',
  },
  {
    title: 'Solusi Lengkap',
    description: 'Dari rak, perlengkapan retail, hingga interior toko.',
    icon: 'store',
  },
  {
    title: 'Tim Berpengalaman',
    description: 'Didukung tim profesional di bidang retail solution.',
    icon: 'group',
  },
];

export const valuePropositions: ValueProposition[] = [
  {
    title: 'Gratis Konsultasi & Layout 3D',
    description: 'Perencanaan toko lebih mudah dengan bantuan konsultasi dan layout 3D.',
    tone: 'green',
    icon: 'consulting',
  },
  {
    title: 'Gratis Ongkir Jawa–Bali',
    description: 'Pengiriman lebih hemat untuk area Jawa - Bali.',
    tone: 'blue',
    icon: 'shipping',
  },
  {
    title: 'Gratis Perakitan Jatim, Jateng, & DIY',
    description: 'Instalasi dilakukan oleh tim profesional di area tertentu.',
    tone: 'amber',
    icon: 'assembly',
  },
  {
    title: 'Custom Sesuai Kebutuhan',
    description: 'Ukuran, warna, dan desain dapat disesuaikan dengan kebutuhan toko Anda.',
    tone: 'violet',
    icon: 'customize',
  },
  {
    title: 'Harga Kompetitif',
    description: 'Produk langsung dari pabrik dengan harga kompetitif dan kualitas terbaik.',
    tone: 'red',
    icon: 'price',
  },
  {
    title: 'Pembelian Fleksibel',
    description: 'Tersedia untuk pembelian satuan, paket toko, maupun proyek retail.',
    tone: 'primary',
    icon: 'star',
  },
];
