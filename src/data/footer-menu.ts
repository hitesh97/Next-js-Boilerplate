import { MenuItemGroup } from './menuItem';

export const FooterMenu: Array<MenuItemGroup> = [
  {
    index: 1,
    heading: 'LINKS',
    menuItems: [
      {
        index: 1,
        label: 'FAQ',
        href: '/faq',
      },
      {
        index: 2,
        label: 'Help',
        href: '/help',
      },
      {
        index: 3,
        label: 'Support',
        href: '/support',
      },
    ],
  },
  {
    index: 2,
    heading: 'LEGAL',
    menuItems: [
      {
        index: 1,
        label: 'Terms',
        href: '/terms',
      },
      {
        index: 2,
        label: 'Privacy',
        href: '/privacy',
      },
    ],
  },
  {
    index: 3,
    heading: 'SOCIAL',
    menuItems: [
      {
        index: 1,
        label: 'Facebook',
        href: '/facebook',
      },
      {
        index: 2,
        label: 'LinkedIn',
        href: '/linkedin',
      },
      {
        index: 3,
        label: 'Twitter',
        href: '/twitter',
      },
    ],
  },
  {
    index: 4,
    heading: 'COMPANY',
    menuItems: [
      {
        index: 1,
        label: 'Official Blog',
        href: '/blog',
      },
      {
        index: 2,
        label: 'About us',
        href: '/aboutus',
      },
      {
        index: 3,
        label: 'Contact Us',
        href: '/contat-us',
      },
    ],
  },
];
