import React from "react";
import Image from "next/image";
import { ThumbUpIcon } from "@heroicons/react/outline";
import {forwardRef} from "react"

const Thumbnail = forwardRef(({ result }, ref) => {
  const BASE_URL = "https:/image.tmdb.org/t/p/original/";
  return (
    <div ref={ref} className=" p-2 group cursor-pointer transition duration-100 ease-in transform sm:hover:scale-150 hover:z-100 ">
      <Image
        src={
          `${BASE_URL}${result.backdrop_path || result.poster_path}` ||
          `${BASE_URL}${result.poster_path}`
        }
        layout="responsive"
        width={1920}
        height={1080}
       alt='images'/>
      <div className="p-2 text-gray-300">
        <p className="truncate max-w-md">{result.overview}</p>
        <h2 className="mt-2 text-2xl transition-all duration-100 ease-in-out group-hover:font-bold">
          {result.title || result.original_name}
        </h2>

        <p className="flex item-center opacity-0 group-hover:opacity-100">
          {result.media_type && `${result.media_type} .`}
          {""}
          {result.release_date || result.first_air_date}.{" "}
          <ThumbUpIcon className="h-5 mx-2" />
          {result.vote_count}
        </p>
      </div>
    </div>
  );
})

export default Thumbnail;
