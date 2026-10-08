export const siteConfig = {
  name: 'Ritelindo Akselera Kolaborasi',
  shortName: 'Ritelindo',
  description:
    'Solusi rak, display, dan perlengkapan retail untuk kebutuhan toko modern.',
  navigation: [
    { label: 'Beranda', href: '#home' },
    { label: 'Produk', href: '#products' },
    { label: 'Layanan', href: '#services' },
    { label: 'Kontak', href: '#contact' },
  ],
  contact: {
    whatsapp: '6281319800800',
    phone: '(031) 5828 8280',
    email: 'info@storack.id',
    address: 'Northwest Boulevard NV02/61, Citraland Utara, Pakal, Surabaya',
  },
} as const;

export const buildWhatsAppUrl = (message: string) =>
  `https://wa.me/${siteConfig.contact.whatsapp}?text=${encodeURIComponent(message)}`;
