import React from 'react'
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { Link } from 'react-router-dom'
import logo from '@/assets/images/logo.png'
import { IoHomeOutline } from "react-icons/io5";
import { TbCategory2 } from "react-icons/tb";
import { FaRegUser } from "react-icons/fa";
import { LiaCommentsSolid } from "react-icons/lia";
import { RiBloggerLine } from "react-icons/ri";
import { GoDot } from "react-icons/go";

const AppSideBar = () => {
  return (
    <Sidebar>
    <SidebarHeader className="bg-white ">
      <img src={logo} width={50}/>
    </SidebarHeader>
    <SidebarContent className="bg-white ">
      <SidebarGroup />
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <IoHomeOutline/>
              <Link to="/">Home</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <TbCategory2/>
              <Link to="/">Categories</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              <RiBloggerLine/>
              <Link to="/">Blogs</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
         
          <SidebarMenuItem>
            <SidebarMenuButton>
              <LiaCommentsSolid/>
              <Link to="/">Comments</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
          <SidebarMenuItem>
            <SidebarMenuButton>
              < FaRegUser/>
              <Link to="/">Profile</Link>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      <SidebarGroup />
      <SidebarGroup>
        <SidebarGroupLabel>Categories</SidebarGroupLabel>
        <SidebarMenu>
            <SidebarMenuItem>
            <SidebarMenuButton>
              <GoDot/>
              <Link to="/">Technology</Link>
            </SidebarMenuButton>
            </SidebarMenuItem>
        </SidebarMenu>
      </SidebarGroup>
    </SidebarContent>
    <SidebarFooter />
  </Sidebar>
  )
}

export default AppSideBar