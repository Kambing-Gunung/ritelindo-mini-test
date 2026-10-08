export type ClientBrand = {
  id: string;
  name: string;
};

export type Testimonial = {
  rating: number;
  quote: string;
  name: string;
  role: string;
  location: string;
};

export const clientBrands: ClientBrand[] = [
  { id: 'aeon', name: 'AEON Supermarket' },
  { id: 'alfamart', name: 'Alfamart' },
  { id: 'bohopanna', name: 'Bohopanna' },
  { id: 'family-mart', name: 'Family Mart' },
  { id: 'indomaret', name: 'Indomaret' },
  { id: 'k3-mart', name: 'K3 Mart' },
  { id: 'mayora', name: 'Mayora' },
  { id: 'legend', name: 'Pusat Oleh-Oleh Legenda' },
  { id: 'rb-grosir', name: 'RB Grosir' },
  { id: 'wings', name: 'Wings Group' },
];

export const featuredTestimonial: Testimonial = {
  rating: 5,
  quote:
    'Pelanggan menilai kualitas rak dan pelayanan STORACK sangat memuaskan, termasuk bantuan survey serta layout 3D untuk mempersiapkan toko.',
  name: 'Kak Nadia',
  role: 'Owner Toko RB Grosir',
  location: 'Kab. Pasuruan',
};
