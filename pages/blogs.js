import React from "react";
import Head from "next/head";
const blogs = () => {
  return (
    <div className='bg-gradient-to-r from-black to-stone-900'>
      <Head>
        <title>Blogs</title>
      </Head>
      <section className='text-white body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            <div className='lg:w-1/3 md:w-1/2 p-4 w-full'>
              <a className='block relative h-48 rounded overflow-hidden'>
                <img
                  alt='ecommerce'
                  className='object-cover object-center w-full h-full block'
                  src='https://dummyimage.com/420x260'
                />
              </a>
              <div className='mt-4'>
                <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                  CATEGORY
                </h3>
                <h2 className='text-gray-200 title-font text-lg font-medium'>
                  The Catalyzer
                </h2>
                <p className='mt-1'>$16.00</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default blogs;
