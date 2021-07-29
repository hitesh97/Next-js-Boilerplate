export interface MenuItem {
  index: number;
  href: string;
  label: string;
}

export interface MenuItemGroup {
  index: number;
  heading: string;
  menuItems: Array<MenuItem>;
}
