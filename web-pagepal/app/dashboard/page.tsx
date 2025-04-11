import { SidebarTrigger } from "@/components/ui/sidebar";


export default function Dashboard() {
  return (
    <div className="flex px-5 py-2 min-h-screen">
      <div className="flex item-center justify-center">
        <SidebarTrigger />
      </div>
      <h1>hello</h1>
    </div>
  );
}
