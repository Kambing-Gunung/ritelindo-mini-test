export const siteConfig = {
  name: 'Ritelindo Akselera Kolaborasi',
  shortName: 'Ritelindo',

  description:
    'Ritelindo Group adalah perusahaan yang bergerak di bidang penjualan rak gondola minimarket, rak gudang, dan perlengkapan retail. Kami melayani berbagai sektor bisnis—mulai dari minimarket, toko kelontong/sembako, toko ATK, pet shop, baby shop, apotek, toko bahan kue, toko fashion, hingga toko bahan bangunan. Target customer kami meliputi pemilik minimarket baru, pemilik toko yang ingin upgrade ke toko modern, serta pemilik yang sedang membuka cabang baru.',

  navigation: [
    { label: 'Beranda', href: '#home' },
    { label: 'Produk', href: '#products' },
    { label: 'Layanan', href: '#services' },
    { label: 'Kontak', href: '#contact' },
  ],

  contact: {
    whatsapp: '62XXXXXXXXXXX',
    phone: '(031) XXXX XXXX',
    email: 'info@ritelindo.id',
    address: 'Kota Surabaya, Jawa Timur, Indonesia',
  },

  footer: {
    services: [
      'Konsultasi & Layout 3D',
      'Rak & Display Toko',
      'Custom Sesuai Kebutuhan',
      'Jasa Interior Toko',
    ],

    socials: [
      { label: 'Instagram', icon: 'instagram', href: 'https://instagram.com' as const },
      { label: 'YouTube', icon: 'youtube', href: 'https://youtube.com' as const },
      { label: 'LinkedIn', icon: 'linkedin', href: 'https://linkedin.com' as const },
      { label: 'TikTok', icon: 'tiktok', href: 'https://tiktok.com' as const },
    ],
  },

  whatsapp: {
    message:
      'Halo Ritelindo, saya tertarik dengan solusi rak untuk kebutuhan toko saya dan ingin konsultasi gratis.',
  },
} as const;

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;