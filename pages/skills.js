import React from "react";
import Head from "next/head";
import {
  DiHtml5,
  DiCss3,
  DiJavascript,
  DiReact,
  DiNodejsSmall,
  DiPython,
  DiFirebase,
} from "react-icons/di";
import { AiFillGithub } from "react-icons/ai";
import { SiCplusplus, SiCsharp } from "react-icons/si";

const skills = () => {
  return (
    <div className='bg-gradient-to-r from-black to-stone-900 text-white w-full h-full  '>
      <Head>
        <title>Skills</title>
      </Head>
      <div className='container text-center '>
        <div className='top py-5'></div>
        <span className='text-center   border-orange-500 font-serif md:text-4xl  text-2xl font-bold  border-b-2 py-2 '>
          What I Know
        </span>
        <div className='icons mt-10  md:flex md:space-x-20 space-y-10 text-center items-center justify-center  text-6xl  md:text-7xl'>
          
          <h1 className='flex flex-col space-y-5 px-6 py-1 mt-10  border-2 border-orange-900  rounded-lg'>
            <DiHtml5 /> <p className='text-xl'>HTML</p>
          </h1>
          <h1 className='flex flex-col  space-y-5 px-6 py-1 border-2 border-orange-900  rounded-lg'>
            <DiCss3 /> <p className='text-xl'>CSS</p>
          </h1>
          <h1 className='flex flex-col space-y-5 px-6 py-1 border-2 border-orange-900  rounded-lg'>
            <DiJavascript /> <p className='text-xl'>JavaScript</p>
          </h1>
          <h1 className='flex flex-col space-y-5 px-6 py-1 border-2 border-orange-900  rounded-lg'>
            <DiReact /> <p className='text-xl'>React</p>
          </h1>
          <h1 className='flex flex-col space-y-5 px-6 py-1 border-2 border-orange-900  rounded-lg'>
            <DiNodejsSmall /> <p className='text-xl'>Node Js</p>
          </h1>
       
        </div>
        <div className='icons py-20 h-full md:flex md:space-x-20 space-y-10 text-center items-center justify-center text-6xl md:text-7xl'>
          
          <h1 className='flex flex-col space-y-5  px-6 py-1 mt-10  rounded-lg border-2 border-orange-900 '>
            <DiPython /> <p className='text-xl'>Python</p>
          </h1>
          <h1 className='flex flex-col space-y-5 px-6 py-1 border-2 border-orange-900  rounded-lg'>
            <DiFirebase /> <p className='text-xl'>Firebase</p>
          </h1>
          <h1 className='flex flex-col space-y-5 px-6 py-1 border-2 border-orange-900 rounded-lg'>
            <AiFillGithub /> <p className='text-xl'>Github</p>
          </h1>
          <h1 className='flex flex-col space-y-5 px-6 py-1 border-2 border-orange-900 rounded-lg'>
            <SiCplusplus /> <p className='text-xl'>C++</p>
          </h1>
          <h1 className='flex flex-col space-y-5 px-6 py-1 border-2 border-orange-900  rounded-lg'>
            <SiCsharp /> <p className='text-xl'>c#</p>
          </h1>
         
        </div>
      </div>
    </div>
  );
};

export default skills;
