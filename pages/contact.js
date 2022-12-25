import React, { useState, useRef, useEffect } from "react";
import Head from "next/head";
import { initializeApp } from "firebase/app";

import { getDatabase, ref, set } from "firebase/database";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReCAPTCHA from "react-google-recaptcha";
import firebaseConfig from "./api/firebase";

const contact = () => {
  const captcha = useRef(null);
  const [keyrandom, setkeyrandom] = useState(0);

  const [fullName, setfullName] = useState("");
  const [Email, setEmail] = useState("");
  const [Message, setMessage] = useState("");
  const [Captcha, setCaptcha] = useState(false);

  // Initialize Firebase
  const writeData = (fullname, email, message) => {
    const app = initializeApp(firebaseConfig);

    const database = getDatabase(app);
    if (fullName == "" || Email == "" || Message == "") {
      toast.error("Please fill all the field", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    } else {
      set(ref(database, "Contact/" + fullName), {
        name: fullname,
        email: email,
        message: message,
      });
      toast.success("Message sent Sucessfully", {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      captcha.current.reset();
    }
  };
  function onChange() {
    setCaptcha(true);
  }

  return (
    <div className='bg-gradient-to-r  overflow-hidden  from-black to-stone-900   text-white md:flex'>
      <Head>
        <title>Contact Us</title>
      </Head>
      <ToastContainer className='font-semibold font-mono ' />
      <div className='contact  md:w-[50%] m-5 space-y-10 md:border-r-2'>
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
          <li>
            {" "}
            <span className='text-red-500 font-semibold'>
              Phone:{"   "}
            </span>{" "}
            <span>123456789</span>{" "}
          </li>
          <li>
            {" "}
            <span className='text-red-500 font-semibold'>
              Email: {"   "}
            </span>{" "}
            admin@omprasadpoudel.com.np
          </li>
          <li>
            {" "}
            <span className='text-red-500 font-semibold'>
              {" "}
              Address:{"   "}
            </span>{" "}
            Pokhara
          </li>
        </ol>
      </div>
      <div className='contactform md:mt-5 m-10  md:mx-0 md:w-[50%]   space-y-10 '>
        <h1 className='text-2xl md:text-center font-serif font-bold'>
          Contact Form:
        </h1>
        <p className='md:text-lg'>
          Alternatively, you can use the form below to send us a message. Please
          be sure to include your email address so we can get back to you.
        </p>
        <div className='form  flex flex-col space-y-5 md:items-center md:text-center md:justify-center'>
          <input
            onChange={(e) => {
              setfullName(e.target.value);
            }}
            value={fullName}
            placeholder='Enter Your Full Name'
            className='bg-transparent h-9 md:w-[70%] border-2 rounded-md px-3'
            type='text'
            name=''
            id=''
          />
          <input
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            value={Email}
            placeholder='Enter Your Email'
            className='bg-transparent h-9 md:w-[70%] border-2 px-3 rounded-md'
            type='email'
            name=''
            id=''
            required
          />
          <textarea
            onChange={(e) => {
              setMessage(e.target.value);
            }}
            value={Message}
            placeholder='Enter Your Message'
            className='bg-transparent border-2 px-3 rounded-md'
            name=''
            id=''
            cols='55'
            rows='6'
          ></textarea>
          <ReCAPTCHA
            ref={captcha}
            theme='dark'
            sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
            onChange={onChange}
          />
          <button
            disabled={!Captcha}
            onClick={() => {
              writeData(fullName, Email, Message);
            }}
            className='bg-red-600 mx-auto text-white disabled:bg-red-400 disabled:cursor-not-allowed hover:bg-red-500 active:bg-red-700 rounded-lg h-10 w-[50%] md:w-[22%] md:px-10'
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default contact;
