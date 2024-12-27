"use client"
import { useSelector } from "react-redux";
import Link from "next/link";
import Navbar from "@/components/Navbar";

const Favorites = () => {
    const favoriteProductIds = useSelector(state => state.favorites.favorites);
    const allProducts = useSelector(state => state.products.categories.flatMap(category => 
        category.subcategories.flatMap(subcategory => subcategory.products)
    ));

    const favoriteProducts = allProducts.filter(product => favoriteProductIds.includes(product.id));

    return (
        <div>
            <Navbar/>
            <h1>Your Favorite Products</h1>
            <ul>
                {favoriteProducts.map(product => (
                    <li key={product.id}>
                        <strong>{product.name}</strong> - ${product.price}
                    </li>
                ))}
            </ul>
            <Link href="/">Back to Home</Link>
        </div>
    );
};

export default Favorites;
