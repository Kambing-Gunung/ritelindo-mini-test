export type FAQItem = {
  id: string;
  question: string;
  answer: string;
};

export const faqItems: FAQItem[] = [
  {
    id: 'custom',
    question: 'Apakah rak bisa dibuat custom?',
    answer:
      'Bisa. Ritelindo menyediakan opsi custom yang dapat disesuaikan dengan kebutuhan dan ukuran ruangan toko Anda.',
  },
  {
    id: 'consultation',
    question: 'Apakah tersedia konsultasi dan layout 3D?',
    answer:
      'Ya. Ritelindo menyediakan konsultasi gratis sekaligus layout 3D untuk membantu merencanakan kebutuhan toko Anda.',
  },
  {
    id: 'shipping',
    question: 'Apakah tersedia gratis ongkir?',
    answer:
      'Ritelindo memberikan gratis ongkir untuk area Jawa dan Bali sesuai penawaran yang tercantum pada brief layanan.',
  },
  {
    id: 'assembly',
    question: 'Apakah tersedia layanan perakitan?',
    answer:
      'Ya. Ritelindo menyediakan gratis perakitan untuk area Jawa Timur, Jawa Tengah, dan DIY sesuai penawaran layanan.',
  },
  {
    id: 'purchase',
    question: 'Apakah pembelian hanya dalam bentuk paket toko?',
    answer:
      'Tidak. Ritelindo melayani pembelian satuan, paket toko, maupun proyek retail.',
  },
  {
    id: 'interior',
    question: 'Apakah Ritelindo juga menyediakan jasa interior toko?',
    answer:
      'Ya. Jasa interior toko termasuk layanan yang ditawarkan untuk membantu mewujudkan tampilan toko yang lebih stylish dan modern.',
  },
];
