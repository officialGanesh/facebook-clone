import React from "react";

function SidebarItem({ Icon, title, isDropDown }) {
  return (
    <div className="flex items-center space-x-2 hover:bg-gray-200 rounded-xl p-4 w-[350px] cursor-pointer">
      <Icon
        className={`h-6 w-6 text-blue-600
        ${isDropDown && "rounded-full bg-gray-200 h-7 w-7 text-black "}`}
      />
      <p className="font-medium text-md whitespace-nowrap">{title}</p>
    </div>
  );
}

export default SidebarItem;
