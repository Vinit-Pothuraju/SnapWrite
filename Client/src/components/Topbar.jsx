import React from 'react'
import logo from '@/assets/images/logo.png'
import { Button } from './ui/button'

import { LuLogIn } from "react-icons/lu";
import { Link } from 'react-router-dom';
import SearchBox from './SearchBox';
import { RouteSignIn } from '@/helpers/RouteName';
const Topbar = () => {
  return (
    <div className='flex justify-between items-center h-16 fixed w-full z-20 bg-white px-5 border-b'>
      <div className='flex justify-center items-center gap-2'>
        <img src={logo} width={50} />
        <h2 className='text-3xl text-green-500 font-bold '>SnapWrite</h2>

      </div>
      
      <div className='w-[500px]'>
        <SearchBox/>
      </div>
      <div>
        <Button asChild  className='rounded-full'>
          <Link  to={RouteSignIn}>
              SignIn
              <LuLogIn/>
          </Link>
        
        </Button>
      </div>
    </div>
  )
}

export default Topbar