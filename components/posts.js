import { onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { colRef, db } from "../firebase-config";
import Post from "./post";

function Posts() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    onSnapshot(query(colRef, orderBy("timestamp", "desc")), (snapshot) => {
      setPosts(snapshot.docs);
    });
  }, []);

  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          username={post.data()?.username}
          message={post.data()?.message}
          email={post.data()?.email}
          timestamp={post.data()?.timestamp}
          image={post.data()?.image}
          profileImg={post.data()?.profileImg}
        />
      ))}
    </div>
  );
}

export default Posts;
