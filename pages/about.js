import React from "react";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className='text-white main h-[100vh] justify-around flex bg-gradient-to-r from-black to-stone-900'>
        <div className='myinfo mt-14'>
          Hey! I Am Om Prasad Poudel. I Am From Pokhara
        </div>
        <div className='image mt-14 '>
          <img className="rounded-3xl h-[80%] border-2  border-orange-900 p-1" src='https://i.ibb.co/RDhzYhj/oppo.jpg' alt='' />
        </div>
      </div>
    </>
  );
};
export default about;
