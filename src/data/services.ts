import consultationImage from '../assets/images/services/service-1.jpg';
import retailDisplayImage from '../assets/images/services/service-2.jpg';
import customImage from '../assets/images/services/service-3.jpg';
import storeInteriorImage from '../assets/images/services/service-4.jpg';

export type Service = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  tone: 'blue' | 'slate' | 'light' | 'warm';
  image: string;
  imageFit?: 'cover' | 'contain';
};

export const services: Service[] = [
  {
    id: 'consultation-layout',
    eyebrow: 'Perencanaan',
    title: 'Konsultasi & Layout 3D',
    description:
      'Dapatkan konsultasi gratis dan visualisasi layout 3D sesuai kebutuhan toko anda.',
    tone: 'blue',
    image: consultationImage,
  },
  {
    id: 'retail-display',
    eyebrow: 'Produk',
    title: 'Rak & Display Toko',
    description:
      'Berbagai jenis rak minimarket, rak toko, rak gudang, dan display dengan kualitas terbaik.',
    tone: 'slate',
    image: retailDisplayImage,
    imageFit: 'contain',
  },
  {
    id: 'custom',
    eyebrow: 'Penyesuaian',
    title: 'Custom & Produksi',
    description:
      'Sesuaikan warna dan desain produk dengan ukuran ruangan dan kebutuhan toko Anda.',
    tone: 'light',
    image: customImage,
  },
  {
    id: 'store-interior',
    eyebrow: 'Penataan',
    title: 'Interior Toko',
    description:
      'Solusi interior toko Anda untuk tampilan yang lebih stylish, modern, dan kesan profesional.',
    tone: 'warm',
    image: storeInteriorImage,
  },
];
