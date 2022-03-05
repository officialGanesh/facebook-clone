import React from "react";
import StoryCard from "./storyCard";

function Stories() {
  const storyList = [
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
      id: 1,
    },
    {
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
      id: 2,
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
      id: 3,
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
      id: 4,
    },
  ];

  return (
    <div className="flex space-x-3 justify-center mx-auto">
      {
          storyList.map((story) => (
              <StoryCard 
              key={story.id} 
              name={story.name} 
              src={story.src}
              profile={story.profile}
              />
          ))
      }
    </div>
  );
}

export default Stories;
