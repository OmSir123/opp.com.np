import React from "react";
import Link from "next/link";

const Navbar = () => {
  return (
    <>
      <div className='nav flex overflow-x-hidden py-4 sticky top-0 font-serif text-sm md:text-base  md:font-medium bg-black text-white justify-around'>
        <div className='logo hidden md:block'>
          <img className='md:h-12' src='Logo.png' alt='' />
        </div>
        <ul className='flex space-x-8  sm:space-x-14 p-2 md:mr-10 '>
          <li className='hover:text-orange-600'>
            <Link href={"/"}>Home</Link>
          </li>
          <li className='hover:text-orange-600'>
            <Link href={"/about"}>About</Link>
          </li>
          <li className='hover:text-orange-600'>
            <Link href={"/blogs"}>Blogs</Link>
          </li>
          <li className='hover:text-orange-600'>
            <Link href={"/skills"}>Skills</Link>
          </li>
          <li className='hover:text-orange-600'>
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
        <div className='buttons flex space-x-5'>
          <button className='hover:text-orange-600 h-10 '>Login</button>
          <button className='bg-orange-600 text-black hover:bg-orange-500 active:bg-orange-700 rounded-lg h-10 px-3 '>
            Register
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
