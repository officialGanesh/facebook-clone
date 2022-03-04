import { signIn } from "next-auth/react";
import Image from "next/image";
import React from "react";

function Login() {
  return (
    <div>
      

      <div className="grid place-items-center mt-56">
        <Image
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="facebook"
          height={100}
          width={400}
          objectFit="contain"
        />
        <p className="py-3 px-28 border-transparent bg-blue-500 rounded-lg font-semibold text-white text-center hover:bg-blue-600 cursor-pointer" onClick={signIn}>
          Log In With Facebook
        </p>
      </div>
    </div>
  );
}

export default Login;
