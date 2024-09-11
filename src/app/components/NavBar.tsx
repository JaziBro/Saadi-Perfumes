import { Search } from "lucide-react"
import { BsCart3 } from "react-icons/bs";
import { HiMenuAlt1 } from "react-icons/hi";
import logo from "../../../public/images/layer-1.png"
import Image from "next/image"

export default function Navbar() {
    return (
        <nav className="relative flex items-center justify-between px-4">
            {/* Menu icon on the left */}
            <HiMenuAlt1 size={24} />
        
            {/* Logo perfectly centered */}
            <div className="absolute left-1/2 transform -translate-x-1/2">
            <Image src={logo} width={34} height={52} alt="logo" />
            </div>
        
            {/* Search and Cart icons on the right */}
            <div className="flex gap-x-4">
            <Search />
            <BsCart3 size={24} />
            </div>
        </nav>
      

    )
}