import React from "react";
import StoryCard from "./storyCard";
import { useSession } from "next-auth/react";

function Stories() {
  const {data:session, status} = useSession()
  const storyList = [
    {
      name: session.user?.name,
      src: session.user?.image,
      profile: session.user?.image,
      id: 1,
    },
    {
      name: "Elon Musk",
      src: "https://links.papareact.com/4zn",
      profile: "https://links.papareact.com/kxk",
      id: 2,
    },
    {
      name: "Jeff Bezoz",
      src: "https://links.papareact.com/k2j",
      profile: "https://links.papareact.com/f0p",
      id: 3,
    },
    {
      name: "Mark Zuckerberg",
      src: "https://links.papareact.com/xql",
      profile: "https://links.papareact.com/snf",
      id: 4,
    },
    {
      name: "Bill Gates",
      src: "https://links.papareact.com/4u4",
      profile: "https://links.papareact.com/zvy",
      id: 5,
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
