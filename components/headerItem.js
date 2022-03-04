import React from "react";

function HeaderItem({ Icon, isActive }) {
  return (
    <div
      className="flex items-center py-6 cursor-pointer md:px-10 sm:h-10 
     md:hover:bg-gray-100 rounded-xl group"
    >
      <Icon
        className={`h-5 text-gray-500 text-center sm:h-7 mx-auto group-hover:text-blue-500 ${
          isActive && "text-blue-600"
        }`}
      />
    </div>
  );
}

export default HeaderItem;
