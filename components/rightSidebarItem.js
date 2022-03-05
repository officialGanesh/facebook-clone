import React, { useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";

function RightSidebarItem({ isActive, user }) {
  const { data: session, status } = useSession();

  return (
    <div className="flex items-center space-x-3 hover:bg-gray-200 rounded-xl w-[350px] cursor-pointer p-2">
      <div className="flex items-center p-[2px] border-2 border-blue-500 rounded-full relative">
        <Image
          src="https://cdn-icons.flaticon.com/png/512/2202/premium/2202112.png?token=exp=1646414552~hmac=eacfdbcc624ec01930896974b2b2c412"
          alt="user profile"
          height={35}
          width={35}
          layout="fixed"
          className="rounded-full object-contain border "
        />
        {isActive && (
          <span className="absolute h-[0.60rem] w-[0.60rem] rounded-full bg-blue-600 right-0 top-7 left-7"></span>
        )}
      </div>
      <p className="font-medium text-md whitespace-nowrap">{user}</p>
    </div>
  );
}

export default RightSidebarItem;
