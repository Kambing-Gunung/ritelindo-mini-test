import defaultIcon from '../../assets/icons/icon.png';
import searchIcon from '../../assets/icons/search.png';
import factoryIcon from '../../assets/icons/factory.png';
import supportIcon from '../../assets/icons/support.png';
import storeIcon from '../../assets/icons/store.png';
import groupIcon from '../../assets/icons/group.png';
import consultingIcon from '../../assets/icons/consulting.png';
import shippingIcon from '../../assets/icons/shipping.png';
import assemblyIcon from '../../assets/icons/assembly.png';
import customizeIcon from '../../assets/icons/customize.png';
import priceIcon from '../../assets/icons/price.png';
import starIcon from '../../assets/icons/star.png';
import plusIcon from '../../assets/icons/plus.png';
import menuIcon from '../../assets/icons/menu.png';
import chevronIcon from '../../assets/icons/chevron.png';
import closeIcon from '../../assets/icons/close.png';
import arrowIcon from '../../assets/icons/arrow.png';
import whatsappIcon from '../../assets/icons/whatsapp.png';
import instagramIcon from '../../assets/icons/instagram.png';
import youtubeIcon from '../../assets/icons/youtube.png';
import linkedinIcon from '../../assets/icons/linkedin.png';
import tiktokIcon from '../../assets/icons/tiktok.png';
import mailIcon from '../../assets/icons/mail.png';
import phoneIcon from '../../assets/icons/phone.png';
import pinIcon from '../../assets/icons/pin.png';

export type IconName =
  | 'search'
  | 'factory'
  | 'support'
  | 'store'
  | 'group'
  | 'consulting'
  | 'shipping'
  | 'assembly'
  | 'customize'
  | 'price'
  | 'star'
  | 'plus'
  | 'menu'
  | 'chevron'
  | 'close'
  | 'arrow'
  | 'whatsapp'
  | 'instagram'
  | 'youtube'
  | 'linkedin'
  | 'tiktok'
  | 'mail'
  | 'phone'
  | 'pin';

type IconProps = {
  name: IconName;
  className?: string;
  alt?: string;
};

const iconMap: Record<IconName, string> = {
  search: searchIcon,
  factory: factoryIcon,
  support: supportIcon,
  store: storeIcon,
  group: groupIcon,
  consulting: consultingIcon,
  shipping: shippingIcon,
  assembly: assemblyIcon,
  customize: customizeIcon,
  price: priceIcon,
  star: starIcon,
  plus: plusIcon,
  menu: menuIcon,
  chevron: chevronIcon,
  close: closeIcon,
  arrow: arrowIcon,
  whatsapp: whatsappIcon,
  instagram: instagramIcon,
  youtube: youtubeIcon,
  linkedin: linkedinIcon,
  tiktok: tiktokIcon,
  mail: mailIcon,
  phone: phoneIcon,
  pin: pinIcon,
};

export function Icon({
  name,
  className = 'size-5',
  alt = '',
}: IconProps) {
  return (
    <span
      role={alt ? 'img' : undefined}
      aria-label={alt || undefined}
      aria-hidden={alt ? undefined : true}
      className={className}
      style={{
        maskImage: `url(${iconMap[name]})`,
        WebkitMaskImage: `url(${iconMap[name]})`,
        maskSize: 'contain',
        WebkitMaskSize: 'contain',
        maskRepeat: 'no-repeat',
        WebkitMaskRepeat: 'no-repeat',
        maskPosition: 'center',
        WebkitMaskPosition: 'center',
        backgroundColor: 'currentColor',
      }}
      data-icon={name}
    />
  );
}