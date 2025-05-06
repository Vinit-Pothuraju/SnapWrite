import React from 'react'
import logo from '@/assets/images/logo.png'
import { Button } from './ui/button'

import { LuLogIn } from "react-icons/lu";
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
const Topbar = () => {
  return (
    <div className='flex justify-between items-center h-16 fixed w-full z-20 bg-white px-5 border-b'>
      <div>
        <img src={logo} width={180} />
      </div>
      <div className='w-[500px]'>
        <SearchBox/>
      </div>
      <div>
        <Button asChild  className='rounded-full'>
          <Link  to="">
              SignIn
              <LuLogIn/>
          </Link>
        
        </Button>
      </div>
    </div>
  )
}

export default Topbar