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
    description: 'Diskusikan kebutuhan toko Anda bersama tim Ritelindo.',
  },
  {
    id: 'requirements',
    number: '02',
    title: 'Tentukan Kebutuhan',
    description: 'Pahami kebutuhan rak, ruang, dan perlengkapan retail yang diperlukan.',
  },
  {
    id: 'layout-custom',
    number: '03',
    title: 'Layout & Custom',
    description: 'Rencanakan penataan dengan layout 3D dan penyesuaian produk sesuai kebutuhan.',
  },
  {
    id: 'setup',
    number: '04',
    title: 'Pengadaan & Setup',
    description: 'Lanjutkan pengadaan hingga kebutuhan toko siap untuk digunakan.',
  },
];
