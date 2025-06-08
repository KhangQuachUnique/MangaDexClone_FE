import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import type { SideBarProps } from "./types";
import clsx from "clsx";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { ListFilter } from "lucide-react";
const SideBar: React.FC<SideBarProps> = ({
  logo,
  children,
  className,
  sticky,
  closable,
}) => {
  const [isClose, setIsClose] = useState<boolean>(false);

  return (
    <>
      <aside
        className={twMerge(
          clsx(
            "min-w-[250px] w-[250px] text-black font-medium transition-all duration-200",
            className,
            sticky ? "h-screen sticky top-0 overflow-y-scroll" : "",
            isClose ? "min-w-0 w-0 overflow-hidden opacity-0" : ""
          )
        )}
      >
        <div className="flex justify-between items-center py-[5px] px-[10px]">
          <a href="/" className="flex items-center">
            {logo && (
              <>
                <img src={logo} alt="Logo" className="w-[50px]" />
                <span className="font-[Josefin Sans] text-[24px] font-bold text-white">
                  MangaDex
                </span>
              </>
            )}
          </a>
          {closable && (
            <div className="w-[40px] h-[40px] flex items-center justify-center">
              <FontAwesomeIcon
                icon={faXmark}
                className="text-[30px] transition-all duration-200 hover:text-[35px]"
                onClick={() => {
                  setIsClose(!isClose);
                }}
              />
            </div>
          )}
        </div>
        {children}
      </aside>
      {closable && isClose && (
        <button
          className="fixed top-[100px] left-0 p-[5px] rounded-[50%] transition-all duration-200 bg-purple-600/20 hover:scale-110 hover:bg-purple-400/20 transform origin-center"
          onClick={() => {
            setIsClose(!isClose);
          }}
        >
          <ListFilter
            className="text-white w-[30px] h-[30px]"
            strokeWidth={3}
          />
        </button>
      )}
    </>
  );
};

export default SideBar;
