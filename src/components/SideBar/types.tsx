export interface SideBarProps {
  logo?: string;
  children?: React.ReactNode;
  className?: string;
  sticky?: boolean;
  closable?: boolean;
}

export interface MenuItemProps {
  id: string;
  label: string;
  icon?: string | React.ReactNode;
  to?: string;
  href?: string;
  disabled?: boolean;
  className?: string;
  activeClassName?: string;
  children?: MenuItemProps[];
  collapsible?: boolean;
}

export interface MenuProps {
  items: MenuItemProps[];
  className?: string;
}
