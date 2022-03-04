import React, { useState } from "react";
import Image from "next/image";
import HeaderItem from "./headerItem";

import {
  SearchIcon,
  PlayIcon,
  ArchiveIcon,
  UserGroupIcon,
  PuzzleIcon,
} from "@heroicons/react/outline";

import {
  HomeIcon,
  ChevronDownIcon,
  PlusIcon,
  LightningBoltIcon,
  BellIcon,
  ViewGridIcon,
} from "@heroicons/react/solid";

function Header() {
  const [isActive, setIsActive] = useState(true);

  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* left */}

      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          height={40}
          width={40}
          layout="fixed"
          alt="fb-logo"
          className="cursor-pointer"
        />
        <div className="flex  space-x-2 ml-2 items-center rounded-full bg-gray-100 p-2">
          <SearchIcon className="h-6 text-gray-500 " />
          <input
            type="text"
            placeholder="Search Facebook"
            className=" hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink-0"
          />
        </div>
      </div>

      {/* center */}
      <div className="flex justify-center flex-grow">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderItem Icon={HomeIcon} isActive={isActive} />
          <HeaderItem Icon={PlayIcon} />
          <HeaderItem Icon={ArchiveIcon} />
          <HeaderItem Icon={UserGroupIcon} />
          <HeaderItem Icon={PuzzleIcon} />
        </div>
      </div>
      {/* right */}
      <div className="flex items-center sm:space-x-2 justify-end">
        <Image
          src="https://upload.wikimedia.org/wikipedia/en/0/04/Facebook_f_logo_%282021%29.svg"
          height={40}
          width={40}
          layout="fixed"
          alt="profile-pic"
          className="cursor-pointer"
        />
        <p className="whitespace-nowrap font-semibold pr-3">Ganesh Kumar</p>
        <ViewGridIcon className="rightIcon" />
        <PlusIcon className="rightIcon" />
        <LightningBoltIcon className="rightIcon" />
        <BellIcon className="rightIcon" />
        <ChevronDownIcon className="rightIcon" />
      </div>
    </div>
  );
}

export default Header;
