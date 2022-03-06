import React from "react";
import InputBox from "./inputBox";
import Stories from "./stories";

function Feed() {
  return (
    <div className=" h-screen  flex-grow  justify-center  max-w-3xl mx-3 pb-44 pt-3 mr-4 xl:mr-40 overflow-y-auto">
      <div className="mx-auto mr-3 max-w-md md:maax-w-lg lg:max-w-2xl">
        {/* Story */}
        <Stories />
        {/* New post */}
        <InputBox />
        {/* Show post */}
      </div>
    </div>
  );
}

export default Feed;
