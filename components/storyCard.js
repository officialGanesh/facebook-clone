import Image from "next/image";
import React from "react";

function StoryCard({ name, src, profile }) {
  return (
    <div className="h-10 w-10 relative md:h-14 md:w-14 lg:h-48 lg:w-28 cursor-pointer overflow-x p-3 shadow-sm hover:opacity-90 transition duration-200 transform ease-in hover:scale-105">
      <Image
        src={profile}
        alt="profile"
        height={40}
        width={40}
        layout="fixed"
        objectFit="cover"
        className="absolute opacity-0 md:opacity-100 rounded-full z-50 top-3  left-0"
      />

      <Image
        className="object-cover filter brightness-75 rounded-full md:rounded-xl border-4"
        src={src}
        layout="fill"
        alt="story"
      />
    </div>
  );
}

export default StoryCard;
