import { IconType } from "react-icons"
import Link from "next/link"
import { twMerge } from "tailwind-merge"

interface SidebarItemsProps {
    icons: IconType,
    label: string,
    active?: boolean, // ?: means that the item is an optional (boolean)
    href: string,
}


const SidebarItems:React.FC<SidebarItemsProps> = ({icons:Icons, label, active, href}) => { //icons:Icons - rebrand to use <Icons/>
    return (
        <Link 
         href={href} 
         className={twMerge(`
         flex
         flex-row
         h-auto
         items-center
         w-full
         gap-x-4
         text-md
         font-medium
         cursor-pointer
         hover:text-white
         transition
         text-neutral-400
         py-1 
         `, 
        active && "text-white"
         )
        }
           
         
        >
           <Icons size={26}/>
           <p className="w-full trancate">{label}</p>
        </Link>
    )
}

export default SidebarItems;