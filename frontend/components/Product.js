import Link from "next/link"
import { useDispatch } from "react-redux";

const Product = ({name, price, category, developer, status, id}) => {

    const dispatch = useDispatch();


    return (
        <div>
            <strong>{name}</strong> - ${price}
            <button onClick={() => handlleAddToFavorites(id)}>Add To Favorites</button>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    )
}

export default Product