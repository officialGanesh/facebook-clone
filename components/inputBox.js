import React, { useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { addDoc, doc, serverTimestamp, updateDoc } from "firebase/firestore";
import { colRef, db, storage } from "../firebase-config";
import { CameraIcon, VideoCameraIcon } from "@heroicons/react/solid";
import { EmojiHappyIcon } from "@heroicons/react/outline";
import { ref, getDownloadURL, uploadString } from "firebase/storage";

function InputBox() {
  const { data: session, status } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [postImg, setPostImg] = useState(null);

  const sendPost = async (e) => {
    e.preventDefault();
    if (!inputRef.current.value) return;

    const docRef = await addDoc(colRef, {
      message: inputRef.current.value,
      username: session.user?.name,
      email: session.user?.email,
      profileImg: session.user?.image,
      timestamp: serverTimestamp(),
    });

    if(postImg){  
    const imageRef = ref(storage, `posts/${docRef.id}/image`)
    await uploadString(imageRef, postImg, "data_url").then(async snapshot => {
      const downloadURL = await getDownloadURL(imageRef);
      await updateDoc(doc(db,"posts",docRef.id), {
        image: downloadURL
      })
      
    })
    removeImg()
  }
    inputRef.current.value = "";
  };

  const addImageToPost = (e) => {
    e.preventDefault();
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setPostImg(readerEvent.target.result);
    };
  };

  const removeImg = () => {
    setPostImg(null);
  };

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-5 sm:opacity-0 xl:opacity-100 ">
      <div className="flex space-x-4 items-center mb-2">
        <Image
          src={session.user?.image}
          alt="profile"
          height={40}
          width={40}
          className="rounded-full hover:cursor-pointer"
          layout="fixed"
        />
        <form className="flex flex-1">
          <input
            type="text"
            placeholder={`What's on your mind, ${session.user?.name}?`}
            ref={inputRef}
            className="rounded-full h-9 bg-gray-100 flex-grow px-5 focus:outline-none hover:cursor-pointer hover:bg-gray-200"
          />
          <button type="submit" hidden onClick={sendPost}>
            Submit
          </button>
        </form>
        {postImg && (
          <div
            className="flex flex-col filter hover:brightness-110 transition duration-200 transform hover:scale-105 cursor-pointer items-center justify-center "
            onClick={removeImg}
          >
            <img
              src={postImg}
              alt="post"
              className="h-16 object-contain rounded-sm  pt-3"
            />
            <p className="text-sm text-red-500">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base whitespace-nowrap">
            Live video
          </p>
        </div>
        <div
          className="inputIcon"
          onClick={() => {
            filePickerRef.current.click();
          }}
        >
          <CameraIcon className="h-7 text-green-500" />
          <p className="text-xs sm:text-sm xl:text-base whitespace-nowrap">
            Photo/video
          </p>
          <input
            type="file"
            hidden
            onChange={addImageToPost}
            ref={filePickerRef}
          />
        </div>
        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-500" />
          <p className="text-xs sm:text-sm xl:text-base whitespace-nowrap">
            Feeling/Activity
          </p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;
