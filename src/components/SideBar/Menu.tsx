import type { MenuProps } from "./types";
import MenuItem from "./MenuItem";
import clsx from "clsx";

const Menu: React.FC<MenuProps> = ({ items, className }) => {
  return (
    <ul className={clsx(className)}>
      {items.map((item) => (
        <li key={item.id}>
          <MenuItem {...item} />
        </li>
      ))}
    </ul>
  );
};

export default Menu;
