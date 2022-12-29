import React, { useState } from "react";
import Head from "next/head";

const Blogs = ({ posts }) => {
  return (
    <div className='bg-gradient-to-r from-black to-stone-900'>
      <Head>
        <title>Blogs</title>
      </Head>
      <section className='text-white body-font'>
        <div className='container px-5 py-24 mx-auto'>
          <div className='flex flex-wrap -m-4'>
            {posts.map((data, key) => {
              return (
                <div key={key} className='lg:w-1/3 md:w-1/2 p-4 w-full'>
                  <a className='block relative h-60 rounded overflow-hidden '>
                    <img
                      alt='ecommerce'
                      className='object-cover object-center w-full  h-full block'
                      src={data.img}
                    />
                  </a>
                  <div className='mt-4'>
                    <h2 className='text-gray-200 title-font text-lg font-medium'>
                      {data.title}
                    </h2>
                    <h3 className='text-white text-xs tracking-widest title-font mb-1'>
                      {data.Description}
                    </h3>

                    <p className='mt-1'>{data.Data}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};
export async function getStaticProps(context) {
  let data = await fetch(process.env.NEXT_PUBLIC_FB_URL + "/Blogs.json");
  let posts = await data.json();

  return {
    props: {
      posts,
    },
  };
}

export default Blogs;
