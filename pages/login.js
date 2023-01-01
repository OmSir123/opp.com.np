import React, { useState } from "react";
import Head from "next/head";
import Link from "next/link";
import { signInWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useRouter } from "next/router";

import auth from "./api/auth";
const Login = () => {
  const router = useRouter();
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, Email, Password)
      .then((userCredential) => {
        toast.success("Login Sucess", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
        if (userCredential.user.uid == process.env.NEXT_PUBLIC_FB_ADMINUID) {
          setTimeout(() => {
            router.push("/admin");
          }, 1000);
        } else {
          setTimeout(() => {
            router.push("/user");
          }, 1000);
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        toast.error(errorMessage, {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          progress: undefined,
          theme: "light",
        });
      });
  };
  return (
    <div className='bg-gradient-to-r from-black to-stone-900  md:pb-24 md:pt-14 text-white '>
      <Head>
        <title>Login</title>
      </Head>
      <ToastContainer className='font-semibold font-mono ' />
      <div className='form bg-gradient-to-r from-stone-900 to-stone-900 md:w-[35%] py-10 px-5 h-[100vh] md:h-auto   rounded-xl md:mx-auto'>
        <h1 className='text-3xl font-bold font-sans text-center'>Login Here</h1>
        <div className='inputs space-y-10'>
          <h1 className='hidden'>fds</h1>
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={Email}
            className='w-[80%] mx-5 focus:border-white pb-1 focus:outline-none bg-transparent border-stone-500  border-b-2'
            type='text'
            name=''
            placeholder='Email'
            id=''
          />
          <input
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            value={Password}
            className='w-[80%] focus:border-white mx-5 pb-1 focus:outline-none border-b-2 bg-transparent border-stone-500'
            type='text'
            name=''
            placeholder='Password'
            id=''
          />
          <div className='buttons text-center justify-center'>
            <button
              onClick={() => {
                handleLogin();
              }}
              className='bg-red-700 rounded-lg py-2 w-[50%] mr-10 hover:bg-red-600 active:bg-red-800 '
            >
              Login
            </button>
          </div>
          <p className='text-center mr-10'>
            {" "}
            No Account?{" "}
            <Link className='text-red-500 cursor-pointer' href={"/register"}>
              {" "}
              Signup Here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
