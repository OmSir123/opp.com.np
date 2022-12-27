import React, { useRef, useState } from "react";
import Head from "next/head";
import "react-toastify/dist/ReactToastify.css";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";
import firebaseConfig from "./api/firebase";
import { initializeApp } from "firebase/app";
import { ToastContainer, toast } from "react-toastify";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const Register = () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const handleRegister = () => {
    if (Captcha == true) {
      createUserWithEmailAndPassword(auth, Email, Password)
        .then((userCredential) => {
          toast.success("Account Created Sucessfully", {
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
          captcha.current.reset();
          // ..
        });
    }
  };

  const [Captcha, setCaptcha] = useState(false);
  const captcha = useRef(null);
  const onChange = () => {
    setCaptcha(true);
  };
  return (
    <div className='bg-gradient-to-r from-black to-stone-900 h-full  md:py-14 text-white '>
      <Head>
        <title>Login</title>
      </Head>
      <ToastContainer className='font-semibold font-mono ' />
      <div className='form bg-gradient-to-r from-stone-900 to-stone-900 md:w-[35%] p-5 md:h-[80%] h-[100vh]  rounded-xl md:mx-auto'>
        <h1 className='text-3xl font-bold font-sans text-center'>
          Register Here
        </h1>
        <div className='inputs space-y-10'>
          <h1 className='hidden'>fds</h1>
          <input
            className='w-[80%] mx-5 focus:border-white pb-1 focus:outline-none bg-transparent border-stone-500  border-b-2'
            type='text'
            name=''
            placeholder='Full Name'
            id=''
          />
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
            <ReCAPTCHA
              className='md:ml-10'
              ref={captcha}
              theme='dark'
              sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY}
              onChange={onChange}
            />
            <button
              onClick={() => {
                handleRegister();
              }}
              disabled={!Captcha}
              className='bg-red-700 disabled:bg-red-400 disabled:cursor-not-allowed  rounded-lg py-2 w-[50%] mr-10 mt-5 hover:bg-red-600 active:bg-red-800 '
            >
              Register
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
