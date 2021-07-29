export interface HeaderMenuItem {
  index: number;
  href: string;
  label: string;
}
export const HeaderMenu: Array<HeaderMenuItem> = [
  {
    index: 1,
    href: '#',
    label: 'Home',
  },
  {
    index: 2,
    href: '/about',
    label: 'About us',
  },
  {
    index: 5,
    href: '/contact-us',
    label: 'Contact us',
  },
  {
    index: 4,
    href: '/blog',
    label: 'Blog',
  },
  {
    index: 3,
    href: '/services',
    label: 'Services',
  },
];
