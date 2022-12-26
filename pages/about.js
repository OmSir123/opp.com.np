import React from "react";
import Head from "next/head";
const about = () => {
  return (
    <>
      <Head>
        <title>About Us</title>
      </Head>
      <div className='text-white text-xl main justify-around h-[100vh] md:flex bg-gradient-to-r from-black to-stone-900'>
        <div className='myinfo md:mt-14  md:w-[60%]  space-y-6 px-5'>
          <p className='font-mono text-lg font-semibold text-red-600'>
            Introduction:
          </p>
          <p className='text-lg font-serif'>
            Hello! My name is{" "}
            <span className='text-orange-600 font-bold'>Om Prasad Poudel</span>{" "}
            and welcome to my About Me page.
          </p>
          <p className='font-mono text-lg font-semibold text-red-600'>
            Background:
          </p>
          <p className='text-lg font-serif'>
            I was born and raised in Pokhara{" "}
          </p>
          <p className='font-mono text-lg font-semibold text-red-600'>
            Education:
          </p>
          <p className='text-lg font-serif'>
            I Completed my +2 from Balmandir Secondary School located in Nadipur
            in 2079 BS. Curently I Am Studing BCA (First Year).
          </p>
          <div className='button pt-8'>
            <button className='bg-red-700 p-2 rounded-lg hover:border-2 border-red-700 hover:bg-transparent '>
              Download CV
            </button>
          </div>
        </div>
        <div className='image mt-14 w-[40%] items-end justify-end hidden md:block '>
          <img
            className='rounded-3xl h-[80%] border-2  border-orange-900 p-1'
            src='https://i.ibb.co/RDhzYhj/oppo.jpg'
            alt='Image'
          />
        </div>
      </div>
    </>
  );
};
export default about;
