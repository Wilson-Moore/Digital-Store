import Link from "next/link"
import "./../styles/navbar.css"

const Navbar = () => {
    return (
        <div className="navbar">
        <Link href="/"><h1>Digitus</h1></Link>
        <div className="search" >
            <input placeholder="Search ...">
            </input>
        </div>
        <Link href="/favorites"><p>Favorites</p></Link>
        <Link href="/cart"><p>Cart</p></Link>
        <Link href="/signin"><p>Connect</p></Link>
        <Link href="/report"><p>Report</p></Link>
        <Link href="/upgrade"><p>Upgrade</p></Link>
        </div>
    )
}

export default Navbar