import testimonialImage1 from '../assets/images/proof/testimonial-1.jpg';
import testimonialImage2 from '../assets/images/proof/testimonial-2.jpg';
import testimonialImage3 from '../assets/images/proof/testimonial-3.jpeg';
import testimonialImage4 from '../assets/images/proof/testimonial-4.jpg';

export type Testimonial = {
  rating: number;
  quote: string;
  name: string;
  role: string;
  location: string;
  image: string;
};

export const featuredTestimonial: Testimonial[] = [
  {
    rating: 5,
    quote:
      'Prosesnya sangat mudah dan hasilnya memuaskan. Tim Ritelindo sangat profesional dari awal konsultasi hingga perakitan.',
    name: 'Bu Putri',
    role: 'Owner Toko Putri Salju',
    location: 'Kab. Malang, Jawa Timur',
    image: testimonialImage1,
  },
  {
    rating: 5,
    quote:
      'Gak nyangka toko saya bisa jadi secakep ini. Pemasangannya cepat dan pelayanannya juga ramah. Sukses untuk Ritelindo.',
    name: 'Mas Ari',
    role: 'Owner Toko Duta Wijaya',
    location: 'Kab. Bojonegro, Jawa Timur',
    image: testimonialImage2,
  },
  {
    rating: 5,
    quote:
      'Semuanya free pengiriman sama pemasangan, sangat luar biasa layanan nya baik puolll , pokoknya gak akan nyesel beli disini.',
    name: 'Kak Grahito',
    role: 'Owner Supermarket Argensta Jaya',
    location: 'Kab. Pasuruan, Jawa Timur',
    image: testimonialImage3,
  },
  {
    rating: 5,
    quote:
      'Rekomen banget pokoknya di Ritelindo. Dikasih layout 3D sama bebas pilih desain. Seneng banget pokonyaa',
    name: 'Bu Airin',
    role: 'Owner Toko Bangunan Sumber Makmur',
    location: 'Kab. Probolinggo, Jawa Timur',
    image: testimonialImage4,
  },
];
