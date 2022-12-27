import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [Home, setHome] = useState(false);
  const [About, setAbout] = useState(false);
  const [Blogs, setBlogs] = useState(false);
  const [Skills, setSkills] = useState(false);
  const [Contact, setContact] = useState(false);

  return (
    <>
      <div className='nav flex z-40 overflow-x-hidden py-4 sticky top-0 font-serif text-sm md:text-base  md:font-medium bg-black text-white justify-around'>
        <div className='logo hidden md:block'>
          <img className='md:h-12' src='Logo.png' alt='' />
        </div>
        <ul className='flex space-x-8  sm:space-x-14 p-2 md:mr-10 '>
          <li>
            <Link
              onClick={() => {
                setAbout(false);
                setBlogs(false);
                setSkills(false);
                setContact(false);
                setHome(true);
              }}
              className={`hover:text-orange-600 py-2 ${
                Home
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-white"
              } hover:border-b-2 border-orange-600`}
              href={"/"}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setAbout(true);
                setBlogs(false);
                setSkills(false);
                setContact(false);
                setHome(false);
              }}
              className={`hover:text-orange-600 py-2 ${
                About
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-white"
              } hover:border-b-2 border-orange-600`}
              href={"/about"}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setAbout(false);
                setBlogs(true);
                setSkills(false);
                setContact(false);
                setHome(false);
              }}
              className={`hover:text-orange-600 py-2 ${
                Blogs
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-white"
              } hover:border-b-2 border-orange-600`}
              href={"/blogs"}
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setAbout(false);
                setBlogs(false);
                setSkills(true);
                setContact(false);
                setHome(false);
              }}
              className={`hover:text-orange-600 py-2 ${
                Skills
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-white"
              } hover:border-b-2 border-orange-600`}
              href={"/skills"}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              onClick={() => {
                setAbout(false);
                setBlogs(false);
                setSkills(false);
                setContact(true);
                setHome(false);
              }}
              className={`hover:text-orange-600 py-2 ${
                Contact
                  ? "text-orange-600 border-b-2 border-orange-600"
                  : "text-white"
              } hover:border-b-2 border-orange-600`}
              href={"/contact"}
            >
              Contact
            </Link>
          </li>
        </ul>
        <div className='buttons  space-x-5 hidden md:flex'>
          <Link
            onClick={() => {
              setAbout(false);
              setBlogs(false);
              setSkills(false);
              setContact(false);
              setHome(false);
            }}
            href={"/login"}
          >
            {" "}
            <button className='hover:text-orange-600 h-10 '>Login</button>
          </Link>
          <Link
            onClick={() => {
              setAbout(false);
              setBlogs(false);
              setSkills(false);
              setContact(false);
              setHome(false);
            }}
            href={"/register"}
          >
            <button className='bg-orange-600 text-black hover:bg-orange-500 active:bg-orange-700 rounded-lg h-10 px-3 '>
              Register
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
