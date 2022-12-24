import React from "react";
import Head from "next/head";
import Link from "next/link";
import firebaseConfig from "./firebase";

const login = () => {
  return (
    <div className='bg-gradient-to-r from-black to-stone-900 h-[100vh] md:pt-14 text-white '>
      <Head>
        <title>Login</title>
      </Head>
      <div className='form bg-gradient-to-r from-stone-900 to-stone-900 md:w-[35%] p-5 h-full md:h-[70%]  rounded-xl md:mx-auto'>
        <h1 className='text-3xl font-bold font-sans text-center'>Login Here</h1>
        <div className='inputs space-y-10'>
          <h1 className='hidden'>fds</h1>
          <input
            className='w-[80%] mx-5 focus:border-white pb-1 focus:outline-none bg-transparent border-stone-500  border-b-2'
            type='text'
            name=''
            placeholder='Email'
            id=''
          />
          <input
            className='w-[80%] focus:border-white mx-5 pb-1 focus:outline-none border-b-2 bg-transparent border-stone-500'
            type='text'
            name=''
            placeholder='Password'
            id=''
          />
          <div className='buttons text-center justify-center'>
            <button className='bg-red-700 rounded-lg py-2 w-[50%] mr-10 hover:bg-red-600 active:bg-red-800 '>
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

export default login;
