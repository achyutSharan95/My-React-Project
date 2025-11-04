import { useState } from "react";
import Images from "../../assets/Media";
import SideBarNavButton from "./SideBarNavButton";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleToggle = () => setIsOpen(!isOpen);

  const navigationLinks = [
    { name: "New chat", icon: Images.NewChat, route: "/chat" },
    { name: "My stuff", icon: Images.MyStuff, route: "/mystuff" },
    { name: "Discover", icon: Images.Discover, route: "/discover" },
    { name: "Home chat", icon: Images.Home, route: "/"},
  ];

  return (
    <div className={`p-3 bg-[#F7EFE3] h-screen transition-all duration-300 ${isOpen ? "w-60" : "w-20 expend"} sideBar`}>
      <div className="sideBar_header flex justify-between items-center px-3 py-2 mb-4 relative">
        <img src={Images.PiLogo} alt="Logo" />
        <button className={`${isOpen ? "" : "sidebar-collapsed"} cursor-pointer`} onClick={handleToggle}>
          <img src={Images.SideBarToggle} alt="Toggle Sidebar" />
        </button>
      </div>

      <div className="sideBar_nav">
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
    </div>
  );
};

export default SideBar;
