import React, { useEffect } from "react";
import Head from "next/head";
import {
  BsFacebook,
  BsTwitter,
  BsLinkedin,
  BsDiscord,
  BsTelegram,
  BsInstagram,
} from "react-icons/bs";
import auth from "./api/auth";

const index = () => {


  return (
    <div className='bg-gradient-to-r  overflow-x-hidden md:h-full h-[100vh] from-black to-stone-900'>
      <Head>
        <title>Home</title>
      </Head>

      <div className='flex text-white text-center space-x-14 justify-evenly py-10 '>
        <div className='message my-10 flex flex-col '>
          <div className='letter space-y-8'>
            <h1 className='text-3xl font-medium tracking-widest font-serif '>
              Hi My Name Is,
            </h1>
            <br />
            <h1 className='name text-5xl  font-extrabold  text-orange-600'>
              Om Prasad Poudel,
            </h1>
            <br />
            <h1 className='text-2xl font-medium tracking-widest font-serif'>
              {" "}
              And I Am A Student
            </h1>
          </div>
          <div className='icons flex space-x-10 sm:space-x-14 border-2 border-orange-900 p-4 rounded-md my-20'>
            <a
              rel='noreferrer'
              target={"_blank"}
              href='https://www.facebook.com/om.p.poudel.9'
            >
              <BsFacebook className='hover:text-orange-300 active:text-stone-500 text-xl ' />
            </a>
            <a
              rel='noreferrer'
              target={"_blank"}
              href='https://twitter.com/don_oppo'
            >
              <BsTwitter className='hover:text-orange-300 active:text-stone-500 text-xl' />
            </a>
            <a
              rel='noreferrer'
              target={"_blank"}
              href='https://www.linkedin.com/in/omprasad-poudel-91050b208/'
            >
              <BsLinkedin className='hover:text-orange-300 active:text-stone-500 text-xl' />
            </a>
            <a rel='noreferrer' target={"_blank"} href=''>
              <BsDiscord className='hover:text-orange-300 active:text-stone-500 text-xl' />
            </a>
            <a rel='noreferrer' target={"_blank"} href='https://t.me/oppodon'>
              <BsTelegram className='hover:text-orange-300 active:text-stone-500 text-xl' />
            </a>
            <a
              rel='noreferrer'
              target={"_blank"}
              href='https://www.instagram.com/omprasadpoudel01/'
            >
              <BsInstagram className='hover:text-orange-300 active:text-stone-500 text-xl' />
            </a>
          </div>
        </div>

        <div className='image hidden sm:block '>
          <img className='h-[80vh] ' src='anon.png' alt='' />
        </div>
      </div>
    </div>
  );
};

export default index;
