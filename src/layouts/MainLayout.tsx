import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Sidebar from "../components/SideBar/SideBar";
import Menu from "../components/SideBar/Menu";
import Logo from "../assets/MangaDex_logo.png";
import type { MenuItemProps } from "../components/SideBar/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faBookmark } from "@fortawesome/free-solid-svg-icons";

const layer2Class =
  "text-[15px] mx-[15px] pb-[3px] font-normal rounded-[0.4rem] hover:bg-[#342c42]";

const layer3Class =
  "text-[15px] mx-[15px] pb-[3px] mb-[7px] font-normal rounded-[0.4rem] hover:bg-[#342c42]";

const iconLayer = "w-[30px] pr-[10px] ";

const sideBarItems: MenuItemProps[] = [
  {
    id: "home",
    label: "Home",
    to: "/",
    className: "font-extrabold py-[10px]",
    icon: <FontAwesomeIcon icon={faHouse} className={iconLayer} />,
  },
  {
    id: "follows",
    label: "Follows",
    className: "font-extrabold pb-[3px] ",
    icon: <FontAwesomeIcon icon={faBookmark} className={iconLayer} />,
    children: [
      {
        id: "updates",
        label: "Updates",
        className: layer2Class,
      },
      {
        id: "library",
        label: "Library",
        className: layer2Class,
      },
      {
        id: "mdlists",
        label: "MDLists",
        className: layer2Class,
      },
      {
        id: "mygroup",
        label: "My Groups",
        className: layer2Class,
      },
      {
        id: "reading_history",
        label: "Reading History",
        className: layer3Class,
      },
    ],
  },
  {
    id: "titles",
    label: "Titles",
    className: "font-extrabold pb-[3px] ",
    icon: <FontAwesomeIcon icon={faBookmark} className={iconLayer} />,
    children: [
      {
        id: "advanced_search",
        label: "Advanced Search",
        className: layer2Class,
      },
      {
        id: "recently_added",
        label: "Recently Added",
        className: layer2Class,
      },
      {
        id: "lasted_updates",
        label: "Lasted Updates",
        className: layer2Class,
      },
      {
        id: "random",
        label: "Random",
        className: layer3Class,
      },
    ],
  },
  {
    id: "community",
    label: "Community",
    className: "font-extrabold pb-[3px] ",
    icon: <FontAwesomeIcon icon={faBookmark} className={iconLayer} />,
    children: [
      {
        id: "forums",
        label: "Forums",
        className: layer2Class,
      },
      {
        id: "groups",
        label: "Groups",
        className: layer2Class,
      },
      {
        id: "user",
        label: "Users",
        className: layer3Class,
      },
    ],
  },
  {
    id: "mangadex",
    label: "MangaDex",
    className: "font-extrabold pb-[3px] ",
    icon: <FontAwesomeIcon icon={faBookmark} className={iconLayer} />,
    children: [
      {
        id: "site_rules",
        label: "Site Rules",
        className: layer2Class,
      },
      {
        id: "announcements",
        label: "Announcements",
        className: layer2Class,
      },
      {
        id: "about_us",
        label: "About Us",
        className: layer2Class,
      },
      {
        id: "contact",
        label: "Contact",
        className: layer3Class,
      },
    ],
  },
  {
    id: "mangadex",
    label: "MangaDex",
    className: "font-extrabold pb-[3px] ",
    icon: <FontAwesomeIcon icon={faBookmark} className={iconLayer} />,
    children: [
      {
        id: "site_rules",
        label: "Site Rules",
        className: layer2Class,
      },
      {
        id: "announcements",
        label: "Announcements",
        className: layer2Class,
      },
      {
        id: "about_us",
        label: "About Us",
        className: layer2Class,
      },
      {
        id: "contact",
        label: "Contact",
        className: layer3Class,
      },
    ],
  },
  {
    id: "mangadex",
    label: "MangaDex",
    className: "font-extrabold pb-[3px] ",
    icon: <FontAwesomeIcon icon={faBookmark} className={iconLayer} />,
    children: [
      {
        id: "site_rules",
        label: "Site Rules",
        className: layer2Class,
      },
      {
        id: "announcements",
        label: "Announcements",
        className: layer2Class,
      },
      {
        id: "about_us",
        label: "About Us",
        className: layer2Class,
      },
      {
        id: "contact",
        label: "Contact",
        className: layer3Class,
      },
    ],
  },
];

function MainLayout() {
  return (
    <div className="flex w-full h-auto relative">
      <Sidebar
        logo={Logo}
        className="bg-[#221b2e] text-white font-[Josefin Sans]"
        sticky
        closable
      >
        <Menu items={sideBarItems} />
      </Sidebar>
      <div className="flex flex-col h-full w-full">
        <header className="min-h-[60px] w-full">
          <NavBar />
        </header>
        <main className="w-full h-full">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default MainLayout;
