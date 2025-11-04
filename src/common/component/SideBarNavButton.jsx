  import React from "react";
  import { NavLink } from "react-router-dom";

  const SideBarNavButton = ({ icon, label, onClick, route }) => {
    return (
      <NavLink
        to={route}
        onClick={onClick}
        className={({ isActive }) =>
          `overflow-hidden text-[#6B6255] text-ellipsis oracle-font text-base not-italic font-normal leading-[140%] tracking-[-0.16px] px-3 py-[9px] w-full text-left rounded-lg hover:bg-[#EBE1D3] focus:bg-[#E6D7C3] cursor-pointer flex items-center transition-colors duration-300 ease-in-out h-10 ${
            isActive ? "bg-[#E6D7C3] text-[#3A3227]" : ""
          }`
        }
      >
        {icon && (
          <img className="mr-3 size-[15px]" src={icon} alt={`${label} icon`} />
        )}
        <span>{label}</span>
      </NavLink>
    );
  };

  export default SideBarNavButton;
