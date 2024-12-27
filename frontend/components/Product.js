import { addToFavorites } from "@/redux/slices/favoritesSlice";
import Link from "next/link"
import { useDispatch } from "react-redux";

const Product = ({name, price, category, developer, status, id}) => {

    const dispatch = useDispatch();

    const handlleAddToFavorites = () => {
        dispatch(addToFavorites(id));
    }

    return (
        <div>
            <strong>{name}</strong> - ${price}
            <button onClick={() => handlleAddToFavorites(id)}>Add To Favorites</button>
            <button onClick={() => addToCart(id)}>Add To Cart</button>
        </div>
    )
}

export default Product