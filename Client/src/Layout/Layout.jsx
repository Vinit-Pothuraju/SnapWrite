import AppSideBar from '@/components/AppSideBar'
import Footer from '@/components/Footer'
import Topbar from '@/components/Topbar'
import { SidebarProvider } from '@/components/ui/sidebar'
import React from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    // topbar
    // sidebar
    <SidebarProvider>
      <Topbar/>
      <AppSideBar/>
      <main className='w-full'>
        <div className='w-full min-h-[calc(100vh-40px)]'>
          <Outlet/>
        </div>
        <Footer/>
      </main>
  
    </SidebarProvider>
  )
    
}

export default Layout