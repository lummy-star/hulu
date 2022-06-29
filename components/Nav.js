import React from 'react'
import requests from '../Utils/requests'
import {useRouter} from 'next/router'

const Nav = () => {
  const router = useRouter()
  return (
    <nav>
        <div className="flex px-10 sm:px-20  sm:space-x-20 text-2xl whitespace-nowrap space-x-10  overflow-x-scroll scrollbar-hide">
            {Object.entries(requests).map(([key,{title, url}])=>(
              <h2 key={key}
              onClick={()=>router.push(`/?genre=${key}`)}
               className=" text-gray-300  last:pr-24 cursor-pointer transition duration-100 transform hover:scale-125
              active:text-red-500 hover:text-white">{title}</h2>
            ))}
        </div>
    </nav>
  )
}

export default Nav