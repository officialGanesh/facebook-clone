import React, { useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function RightSidebarItem({ isActive, user, src }) {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center space-x-3 hover:bg-gray-200 rounded-xl w-[350px] cursor-pointer p-2">
      <div className="flex items-center p-[2px] border-2 border-blue-500 rounded-full relative ">
        <Image
          src={src}
          alt="user profile"
          height={35}
          width={35}
          layout="fixed"
          className="rounded-full object-contain border "
        />
        {isActive && (
          <span className="absolute h-[0.60rem] w-[0.60rem] rounded-full bg-green-500 right-0 top-7 left-7 hover:animate-bounce"></span>
        )}
      </div>
      <p className="font-medium text-md whitespace-nowrap">{user}</p>
    </div>
  );
}

export default RightSidebarItem;
