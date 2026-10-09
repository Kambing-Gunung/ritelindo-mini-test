export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: 'custom',
    question: 'Apakah rak bisa custom ukuran dan warna?',
    answer:
      'Bisa. Ritelindo menyediakan banyak opsi custom yang dapat disesuaikan dengan kebutuhan dan ukuran ruangan toko Anda.',
  },
  {
    id: 'consultation',
    question: 'Apakah tersedia konsultasi dan layout 3D?',
    answer:
      'Ya. Ritelindo menyediakan konsultasi gratis sekaligus layout 3D untuk membantu merencanakan kebutuhan toko Anda.',
  },
  {
    id: 'shipping',
    question: 'Bagaimana proses pengirimannya?',
    answer:
      'Tim Ritelindo akan mengatur jadwal pengiriman dan mengirimkan produk langsung ke lokasi toko.',
  },
  {
    id: 'assembly',
    question: 'Apakah tersedia layanan perakitan?',
    answer:
      'Ya. Ritelindo menyediakan gratis perakitan untuk area Jawa Timur, Jawa Tengah, dan DIY.',
  },
  {
    id: 'purchase',
    question: 'Apakah bisa pembelian dalam bentuk satuan?',
    answer:
      'Bisa. Ritelindo melayani pembelian satuan, paket toko, maupun kebutuhan dalam skala proyek retail.',
  },
  {
    id: 'interior',
    question: 'Apakah Ritelindo juga menyediakan jasa interior toko?',
    answer:
      'Ya. Jasa interior toko termasuk layanan yang ditawarkan untuk membantu mewujudkan tampilan toko yang lebih stylish dan modern.',
  },
];
