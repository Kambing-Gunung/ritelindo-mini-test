export type ProcessStep = {
  id: string;
  number: string;
  title: string;
  description: string;
};

export const processSteps: ProcessStep[] = [
  {
    id: 'consultation',
    number: '01',
    title: 'Konsultasi',
    description: 'Diskusikan kebutuhan toko Anda.',
  },
  {
    id: 'planning',
    number: '02',
    title: 'Survey & Perencanaan',
    description: 'Analisa kebutuhan dan layout 3D.',
  },
  {
    id: 'production',
    number: '03',
    title: 'Produksi & Persiapan',
    description: 'Pembuatan rak sesuai spesifikasi.',
  },
  {
    id: 'delivery',
    number: '04',
    title: 'Pengiriman & Perakitan',
    description: 'Pengiriman dan instalasi oleh tim profesional.',
  },
];
