"use client"; // A client conponent, so it will be dynamic

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import SidebarItems from "./SidebarItems";
import Box from "./Box";
import Library from "./Library";



interface SidebarProps {
  children: React.ReactNode;
}

const Sidebar: React.FC<SidebarProps> = ({ children }) => {
  const pathname = usePathname();

  //Arrays of possible routes
  const routes = useMemo(
    () => [
      {
        icons: HiHome,
        label: "Home",
        active: pathname !== "/search", // Make the route active whenever pathname is not search
        href: "/",
      },
      {
        icons: BiSearch,
        label: "Search",
        active: pathname === "/search",
        href: "/search",
      },
    ],
    [pathname]
  );
  return (
    <div className="flex h-full">
      <div
        className="
              hidden
              md:flex 
              flex-col
              gap-y-2
              bg-black
              h-full
              w-[300px]
              p-2
             "
      >
        <Box>
          <div className="
           flex 
           flex-col 
           gap-y-4
           px-5
           py-4
          "
          >
            {routes.map( (item) => (
                <SidebarItems 
                  key={item.label}
                  {...item}
                />
            ))}
          </div>
        </Box>
        <Box className="overflow-y-auto h-full">
            <Library />
        </Box>
      </div>

      <main className="h-full flex-1 overflow-y-auto py-2 ">
        {children}
      </main>
    </div>
  );
};

export default Sidebar;
