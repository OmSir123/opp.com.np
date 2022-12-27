import React from "react";

const admin = () => {
  return (
    <div className='bg-black h-[100vh]'>
      <form className='space-y-10'>
        <input placeholder='imageurl' type='text' name='' id='' />
        <br />
        <input placeholder='Title' type='text' name='' id='' />
        <br />
        <input placeholder='Description' type='text' name='' id='' />
        <br />
        <input placeholder='daye' type='text' name='' id='' />
        <br />
        <button className='bg-red-600'>Submit</button>
      </form>
    </div>
  );
};

export default admin;
