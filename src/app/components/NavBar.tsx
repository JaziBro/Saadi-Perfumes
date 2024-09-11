import { ShoppingCart, Menu, Search } from "lucide-react"


export default function Navbar() {
    return (
        <nav className="flex justify-between items-center px-4">
            <Menu />

            <div className="flex gap-x-4">
                <Search />
                <ShoppingCart />
            </div>
        </nav>

    )
}