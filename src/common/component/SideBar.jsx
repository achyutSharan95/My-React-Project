import { useState } from "react";
import { Link } from "react-router-dom";
import Images from "../../assets/Media";
import SideBarNavButton from "./SideBarNavButton";
import { navigationLinks } from "./SideBar";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => setIsOpen(!isOpen);
  return (
    <div className={`p-3 bg-[#F7EFE3] h-dvh transition-all duration-300 ${isOpen ? "w-60" : "w-20 expend"} sideBar`}>
      <div className="sideBar_header flex justify-between items-center px-3 py-2 mb-4 relative">
        <Link to={"/"} className="block">
          <img src={Images.PiLogo} alt="Logo" />
        </Link>
        <button className={`${isOpen ? "" : "sidebar-collapsed"} cursor-pointer`} onClick={handleToggle}>
          <img src={Images.SideBarToggle} alt="Toggle Sidebar" />
        </button>
      </div>

      <div className="sideBar_nav flex flex-col justify-between h-[calc(100dvh-70px)]">
        <div>
          {navigationLinks.map((link) => (
            <SideBarNavButton
              key={link.name}
              label={isOpen ? link.name : ""}
              icon={link.icon}
              route={link.route}
              onClick={link.handleToggle}
            />
          ))}
        </div>
        <div className="border-t pt-2  border-[#E0D6C5]">
          <SideBarNavButton
            label={isOpen ? "Settings" : ""}
            icon={Images.SettingsIcon}
            route={"/profile"}
          />

        </div>

      </div>

    </div>
  );
};

export default SideBar;
