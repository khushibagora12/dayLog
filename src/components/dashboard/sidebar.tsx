'use client'
import { ScrollText, Home, MessageSquareHeart, NotebookPen, UserPen, LogOut, Menu } from "lucide-react"
import { fascinate } from "../ui/fonts"
import {
    Sidebar as UISidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarFooter,
} from "@/components/ui/sidebar"
import { signOut } from "next-auth/react"


const items = [
    {
        title: "Home",
        url: "/dashboard",
        icon: Home,
    },
    {
        title: "Write log",
        url: "/dashboard/writeLog",
        icon: NotebookPen,
    },
    {
        title: "My logs",
        url: "/dashboard/myLog",
        icon: ScrollText,
    },
    {
        title: "Profile",
        url: "/dashboard/profile",
        icon: UserPen,
    },
    {
        title: "feedback",
        url: "/dashboard/feedback",
        icon: MessageSquareHeart,
    },
]
export default function AppSidebar() {

    return (
        <UISidebar className="border-none">
            <SidebarContent className="bg-purple-500/20 backdrop-blur border-none" >

                <SidebarGroup>
                    <SidebarGroupLabel>
                        <div className="flex-shrink-0 mt-5">
                            <div className={`flex ${fascinate.className} text-2xl text-[#421C86]`}>
                                DayLog
                            </div>
                        </div>
                    </SidebarGroupLabel>
                    <SidebarGroupContent className="mt-10">
                        <SidebarMenu >
                            {items.map((item) => (
                                <SidebarMenuItem key={item.title} className="hover:bg-purple-300 rounded-md">
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
            <SidebarFooter className="bg-purple-500/20" >
                {/* logout button */}
                <SidebarMenuItem  >
                    <SidebarMenuButton asChild className="bg-purple-300 active:bg-purple-400" onClick={() => { signOut({ callbackUrl: '/login' }) }} >
                        <a >
                            <LogOut />
                            <span>Logout</span>
                        </a>
                    </SidebarMenuButton>
                </SidebarMenuItem>
            </SidebarFooter>
        </UISidebar>
    )
}
