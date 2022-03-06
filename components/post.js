import React from "react";
import Image from "next/image";
import {
    ChatAltIcon,
    ShareIcon,
    ThumbUpIcon
} from "@heroicons/react/outline"

function Post({ username, message, email, profileImg, image, timestamp }) {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-2xl shadow-md cursor-pointer">
        <div className="flex items-center space-x-2">
          <Image
            src={profileImg}
            width={40}
            height={40}
            alt="profile"
            className="rounded-full"
          />
          <div>
            <p className="font-medium">{username}</p>
            <p className="text-xs text-gray-400">
              {new Date(timestamp.toDate()).toLocaleString()}
            </p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      {image && (
          <div className="relative h-56 md:h-96 bg-white">
          <Image src={image} alt="post-Image" layout="fill" objectFit="cover" className="rounded-md"/>
        </div>
      )}
      

      {/* post - footer */}
      <div className="flex justify-between items-center rounded-2xl bg-white shadow-md text-gray-400 border-t mt-5 ">
          <div className="inputIcon">
                <ChatAltIcon className="h-4" />
                <p className="text-xs sm:text-base">Comment</p>
          </div>
          <div className="inputIcon ">
                <ShareIcon className="h-4" />
                <p className="text-xs sm:text-base">Share</p>
          </div>
          <div className="inputIcon ">
                <ThumbUpIcon className="h-4" />
                <p className="text-xs sm:text-base">Like</p>
          </div>
      </div>
      </div>
    </div>
  );
}

export default Post;
