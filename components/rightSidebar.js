import {
  DotsHorizontalIcon,
  SearchIcon,
  VideoCameraIcon,
} from "@heroicons/react/solid";
import React from "react";
import RightSidebarItem from "./rightSidebarItem";

function RightSidebar() {
  return (
    <div className="max-w-[600px]  hidden md:flex lg:min-w-[300px] mt-3 mr-5  flex-col">
      <div className="flex p-2 items-center space-x-36 border-b-[1.5px] border-gray-300 mb-2">
        <p className="text-gray-500 font-semibold text-lg mr-3">Contacts</p>
        <div className="flex space-x-2 items-center">
          <VideoCameraIcon className="icon" />
          <SearchIcon className="icon" />
          <DotsHorizontalIcon className="icon" />
        </div>
      </div>
      <div className="flex items-center  w-350px] cursor-pointer flex-col ">
        <RightSidebarItem isActive={true} user="Elon Musk" src="https://links.papareact.com/kxk"/>
        <RightSidebarItem isActive={true} user="Bill Gates" src="https://links.papareact.com/zvy"/>
        <RightSidebarItem isActive={true} user="Mark Zuckerberg" src="https://links.papareact.com/snf"/>
        <RightSidebarItem user="Harry Potter" src="https://links.papareact.com/d0c"/>
        
        <RightSidebarItem user="James Bond" src="https://links.papareact.com/r57"/>
        
      </div>
    </div>
  );
}

export default RightSidebar;
