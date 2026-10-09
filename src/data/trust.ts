import aeonLogo from '../assets/images/trust/clients/aeon-logo.png';
import alfamartLogo from '../assets/images/trust/clients/alfamart-logo.png';
import bohopannaLogo from '../assets/images/trust/clients/bohopanna-logo.png';
import familymartLogo from '../assets/images/trust/clients/familymart-logo.png';
import indomaretLogo from '../assets/images/trust/clients/indomaret-logo.png';
import k3martLogo from '../assets/images/trust/clients/k3mart-logo.jpg';
import mayoraLogo from '../assets/images/trust/clients/mayora-logo.png';
import legendLogo from '../assets/images/trust/clients/pusatoleholehlegenda-logo.png';
import rbGrosirLogo from '../assets/images/trust/clients/rbgrosir-logo.png';
import wingsLogo from '../assets/images/trust/clients/wings-logo.png';

export type ClientBrand = {
  id: string;
  name: string;
  logo: string;
};

export const clientBrands: ClientBrand[] = [
  { id: 'aeon', name: 'AEON Supermarket', logo: aeonLogo },
  { id: 'alfamart', name: 'Alfamart', logo: alfamartLogo },
  { id: 'bohopanna', name: 'Bohopanna', logo: bohopannaLogo },
  { id: 'family-mart', name: 'Family Mart', logo: familymartLogo },
  { id: 'indomaret', name: 'Indomaret', logo: indomaretLogo },
  { id: 'k3-mart', name: 'K3 Mart', logo: k3martLogo },
  { id: 'mayora', name: 'Mayora', logo: mayoraLogo },
  { id: 'legend', name: 'Pusat Oleh-Oleh Legenda', logo: legendLogo },
  { id: 'rb-grosir', name: 'RB Grosir', logo: rbGrosirLogo },
  { id: 'wings', name: 'Wings Group', logo: wingsLogo },
];