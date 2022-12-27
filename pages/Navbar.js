import React, { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [Home, setHome] = useState(false);
  const [About, setAbout] = useState(false);
  const [Blogs, setBlogs] = useState(false);
  const [Skills, setSkills] = useState(false);
  const [Contact, setContact] = useState(false);
  const [navClicked, setnavClicked] = useState(false);

  return (
    <>
      <div className='nav sm:flex z-40 text-center overflow-x-hidden py-4 sticky top-0 font-serif  sm:text-base  font-medium bg-black text-white justify-around'>
        <div className='logo flex sm:block justify-around '>
          <img className='sm:h-12 h-8' src='Logo.png' alt='' />
          <div className=' sm:hidden text-white text-end '>
            <button
              onClick={() => {
                if (navClicked == false) {
                  setnavClicked(true);
                } else {
                  setnavClicked(false);
                }
              }}
              className='   text-3xl'
            >
              {navClicked ? "X" : "☱"}
            </button>
          </div>
        </div>
        <ul
          className={`sm:flex space-x-8 ${
            navClicked ? "" : "hidden"
          }   space-y-10 sm:space-y-0  sm:space-x-14 p-2 sm:mr-10 `}
        >
          <li>
            <Link
              onClick={() => {
                setAbout(false);
                setBlogs(false);
                setSkills(false);
                setContact(false);
                setHome(true);
                setnavClicked(false);
              }}
              className={`hover:text-orange-600 ml-5 sm:ml-0 ${
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
                setnavClicked(false);
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
                setnavClicked(false);
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
                setnavClicked(false);
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
                setnavClicked(false);
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
        <div
          className={`buttons ${
            navClicked ? "" : "hidden"
          } mt-5 sm:mt-0  sm:flex space-y-10 sm:space-y-0 pl-5  sm:space-x-5  sm:flex-row`}
        >
          <h1 className='hidden'>test</h1>{" "}
          <Link
            onClick={() => {
              setAbout(false);
              setBlogs(false);
              setSkills(false);
              setContact(false);
              setHome(false);
              setnavClicked(false);
            }}
            href={"/login"}
          >
            {" "}
            <button className='hover:text-orange-600 h-10 '>Login</button>
          </Link>
          <br />
          <Link
            onClick={() => {
              setAbout(false);
              setBlogs(false);
              setSkills(false);
              setContact(false);
              setHome(false);
              setnavClicked(false);
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
