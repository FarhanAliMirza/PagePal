import { AppSidebar } from "@/components/shared/Sidebar";
import { SidebarTrigger } from "@/components/ui/sidebar";
import React from "react";

interface DashboardlayoutProops {
    children?: React.ReactNode;
}

export default function Dashboardlayout(
    { children }: DashboardlayoutProops
) {
    return (
        <div className="w-full flex min-h-screen">
            <AppSidebar />
            <main>
                {children}
            </main>
        </div>
    );
}