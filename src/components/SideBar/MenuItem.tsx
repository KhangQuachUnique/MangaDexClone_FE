import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleUp } from "@fortawesome/free-solid-svg-icons";
import type { MenuItemProps } from "./types";
import Menu from "./Menu";
import clsx from "clsx";
import { twMerge } from "tailwind-merge";
import { useState } from "react";
const MenuItem: React.FC<MenuItemProps> = (props) => {
  const {
    label,
    icon,
    to,
    href,
    disabled,
    className,
    activeClassName,
    children,
    collapsible,
  } = props;

  const classes = twMerge(
    clsx(
      "flex items-center px-[10px] justify-left font-bold text-[20px]",
      {
        "cursor-not-allowed opacity-60": disabled,
      },
      className
    )
  );

  const [isOpen, setIsOpen] = useState<boolean>(true);
  const renderCollapseState = () => {
    return (
      <div className="flex items-center justify-center w-[30px]">
        <FontAwesomeIcon
          icon={faAngleUp}
          className={clsx(
            "text-[20px] transform transition-transform duration-300",
            collapsible && isOpen ? "rotate-0" : "rotate-180"
          )}
          onClick={() => {
            setIsOpen(!isOpen);
          }}
        />
      </div>
    );
  };

  const renderIcon = () => {
    if (typeof icon === "string")
      return <img src={icon} className="w-[40px] pr-[10px]" />;
    return icon;
  };

  const renderLabel = () => {
    return <span className="w-full">{label}</span>;
  };

  const renderChidren = () => {
    return children ? (
      <div
        className={clsx(
          "overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-[1000px] opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <Menu items={children} />
      </div>
    ) : null;
  };

  if (disabled) {
    return (
      <>
        <span className={classes}>
          {icon && renderIcon()}
          {renderLabel()}
          {collapsible === true && children && renderCollapseState()}
        </span>
        {renderChidren()}
      </>
    );
  }

  if (to && activeClassName) {
    return (
      <>
        <NavLink to={to}>
          {icon && renderIcon()}
          {renderLabel()}
          {collapsible === true && children && renderCollapseState()}
        </NavLink>
        {renderChidren()}
      </>
    );
  }

  if (to) {
    return (
      <>
        <Link to={to} className={clsx(classes)}>
          {icon && renderIcon()}
          {renderLabel()}
          {collapsible === true && children && renderCollapseState()}
        </Link>
        {renderChidren()}
      </>
    );
  }

  if (href)
    return (
      <>
        <a href={href} className={classes}>
          {icon && renderIcon()}
          {renderLabel()}
          {collapsible === true && children && renderCollapseState()}
        </a>
        {renderChidren()}
      </>
    );

  return (
    <>
      <div className={classes}>
        {icon && renderIcon()}
        {renderLabel()}
        {collapsible === true && children && renderCollapseState()}
      </div>
      {renderChidren()}
    </>
  );
};

export default MenuItem;
