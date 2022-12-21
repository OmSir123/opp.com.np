import React from "react";
import Head from "next/head";

const contact = () => {
  return (
    <div className='bg-gradient-to-r  overflow-x-hidden h-[100vh] from-black to-stone-900   text-white md:flex'>
      <Head>
        <title>Contact Us:</title>
      </Head>
      <div className='contact  md:w-[50%] m-10 space-y-10 md:border-r-2'>
        <h1 className='text-2xl font-serif font-bold'>Contact Us:</h1>
        <p className='md:text-lg'>
          We value your feedback and are always here to help. If you have any
          questions, comments, or concerns, please don't hesitate to reach out
          to us.
        </p>
        <h1 className='text-xl font-semibold font-serif'>
          Contact Information:
        </h1>
        <ol className='list-disc m-2 md:m-5 text-sm md:text-base space-y-4'>
          <li>Phone:{"   "} 123456789</li>
          <li>Email: {"   "}admin@omprasadpoudel.com.np</li>
          <li>Address:{"   "} Pokhara</li>
        </ol>
      </div>
      <div className='contactform md:mt-10 m-10  md:mx-0 md:w-[50%]   space-y-10 '>
        <h1 className='text-2xl md:text-center font-serif font-bold'>
          Contact Form:
        </h1>
        <p className='md:text-lg'>
          Alternatively, you can use the form below to send us a message. Please
          be sure to include your email address so we can get back to you.
        </p>
        <div className='form  flex flex-col space-y-8 md:items-center md:text-center md:justify-center'>
          <input
            placeholder='Enter Your Full Name'
            className='bg-transparent h-9 md:w-[70%] border-2 rounded-md px-3'
            type='text'
            name=''
            id=''
          />
          <input
            placeholder='Enter Your Email'
            className='bg-transparent h-9 md:w-[70%] border-2 px-3 rounded-md'
            type='text'
            name=''
            id=''
            required
          />
          <textarea
            placeholder='Enter Your Message'
            className='bg-transparent border-2 px-3 rounded-md'
            name=''
            id=''
            cols='55'
            rows='6'
          ></textarea>
          <button className='bg-orange-600 mx-auto text-white hover:bg-orange-500 active:bg-orange-700 rounded-lg h-10 w-[50%] md:w-[22%] md:px-10'>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default contact;
