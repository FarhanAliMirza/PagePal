"use client"
import { Calendar, Home, Inbox, Search, Settings } from "lucide-react"

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/ui/sidebar"
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "Inbox",
    url: "#",
    icon: Inbox,
  },
  {
    title: "Calendar",
    url: "#",
    icon: Calendar,
  },
  {
    title: "Search",
    url: "#",
    icon: Search,
  },
  {
    title: "Settings",
    url: "#",
    icon: Settings,
  },
]

export function AppSidebar() {

  const [bookmarkPosition, setBookmarkPosition] = useState(0);
  const { state } = useSidebar();
  useEffect(() => {
    const interval = setInterval(() => {
      setBookmarkPosition(prev => prev === 0 ? 1 : 0);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const isCollapsed = state === "collapsed";
  

  return (
    <Sidebar 
    collapsible="icon"
    >
      <SidebarContent>
        <SidebarGroup>
          {isCollapsed ? (
            <div className="bg-indigo-600 rounded-lg p-1 flex justify-center shadow-lg text-center">
              <h1 className="font-bold text-lg text-white mb-1">p</h1>
            </div>
          ) : (
            <div className={cn("bg-indigo-600 rounded-lg p-6 shadow-lg relative",
              )}>
                <h1 className="text-3xl font-bold text-white">Page Pal</h1>
                <div className="mt-2 bg-indigo-400 h-1 w-20 rounded-full"></div>
                <div className="mt-2 bg-indigo-400 h-1 w-16 rounded-full"></div>
                <div
                  className={`absolute -right-2 bg-red-500 w-4 h-12 transition-all duration-1000 ease-in-out rounded-b-lg transform ${bookmarkPosition === 0 ? '-top-2' : '-top-6'}`}
                ></div>
                <div className="absolute top-0 right-0 w-0 h-0 border-t-8 border-r-8 border-t-indigo-400 border-r-transparent transform -translate-y-px"></div>
              </div>
          )}
          <SidebarGroupLabel>Page Pal</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  )
}
