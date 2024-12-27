import Link from "next/link"

const Navbar = () => {
    return (
        <div>
        <Link href="/">Logo</Link>
        <div>Search</div>
        <Link href="/favorites"><p>Favorites</p></Link>
        <Link href="/cart"><p>Cart</p></Link>
        <Link href="/signin"><p>Connect</p></Link>
        <Link href="/report"><p>Report</p></Link>
        <Link href="/upgrade"><p>Upgrade</p></Link>
        </div>
    )
}

export default Navbar