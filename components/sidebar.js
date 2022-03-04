import React, { useState } from "react";
import SidebarItem from "./sidebarItem";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import {
  BookmarkIcon,
  CalendarIcon,
  ClockIcon,
  EmojiHappyIcon,
  FlagIcon,
  ShoppingCartIcon,
  UserGroupIcon,
  UsersIcon,
} from "@heroicons/react/outline";

function Sidebar() {
  const [isDropDown, setIsDropDown] = useState(true);
  const { data: session, status } = useSession();
  return (
    <div className="max-w-[600px]  hidden md:flex lg:min-w-[300px] mt-3  flex-col justify-start">
      <div className="flex items-center space-x-2 hover:bg-gray-200 rounded-xl p-3 w-[350px] cursor-pointer">
        <Image
          src={session.user?.image}
          alt="user profile"
          height={30}
          width={30}
          layout="fixed"
          className="rounded-full"
        />
        <p className="font-medium text-md whitespace-nowrap">
          {session.user?.name}
        </p>
      </div>
      <SidebarItem Icon={UsersIcon} title="Friends" />
      <SidebarItem Icon={EmojiHappyIcon} title="Memories" />
      <SidebarItem Icon={UserGroupIcon} title="Groups" />
      <SidebarItem Icon={ShoppingCartIcon} title="Marketplace" />
      <SidebarItem Icon={BookmarkIcon} title="Saved" />
      <SidebarItem Icon={FlagIcon} title="Pages" />
      <SidebarItem Icon={CalendarIcon} title="Events" />
      <SidebarItem Icon={ClockIcon} title="Most recent" />
      <SidebarItem
        Icon={ChevronDownIcon}
        title="See more"
        isDropDown={isDropDown}
      />
    </div>
  );
}

export default Sidebar;
