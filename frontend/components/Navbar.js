import Link from "next/link";
import Image from "next/image";
import "./../styles/navbar.css";
import { assets } from "@/assets/assets";

const Navbar = () => {
    return (
        <div className="navbar">
            <Link href="/"><h1>Digitus</h1></Link>
            <div className="search">
                <input placeholder="Search ..." />
            </div>

            <ul className="navbar-menu">
                <li>
                    <Link href="/">Home</Link>
                </li>
                <li>
                    <Link href="/favorites">Favorites</Link>
                </li>
                <li>
                    <Link href="/report">Report</Link>
                </li>
                <li>
                    <Link href="/upgrade">Become A Publisher</Link>
                </li>
            </ul>

            <div className="navbar-right">
                <Link href="/cart">
                    <Image src={assets.cart} alt="Cart" width={24} height={24} />
                </Link>
                <Link href="/signin">
                    <button>Connect</button>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
