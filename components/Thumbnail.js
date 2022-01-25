/* eslint-disable react/display-name */
import Image from 'next/image';
import React, {forwardRef} from 'react';
import {ThumbUpIcon} from "@heroicons/react/outline"

const Thumbnail = forwardRef(({result}, ref) => {
   const BASE_URL = 'https://image.tmdb.org/t/p/original/'
  return (
  <div ref={ref} className='p-2 group cursor-pointer transition duration-100 ease-in transform
  sm:hover:scale-105 hover:z-50 xl:max-w-md'>
     <Image
        layout='responsive'
        height={1080}
        width={1920}
        src={
           `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
           `${BASE_URL}${result.poster_path}`
        }
        alt="poster"
     />
     <div className='p-2'>
        <h2 className='my-1 text-2xl text-white transition-all duration-100 ease-in-out group-hover:font-bold'>
           {result.title || result.original_name}
        </h2>
        <p className='truncate max-w-md'>{result.overview}</p>
        <p className='flex items-center opacity-0 group-hover:opacity-100'>
         {result.release_date || result.first_air_date} {" "}
         <ThumbUpIcon className='h-5 mx-2'/> {result.vote_average}
        </p>
     </div>
  </div>
  );
})

export default Thumbnail;
