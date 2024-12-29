import { useDispatch } from "react-redux";
import Image from "next/image";

const Product = ({ name, price, category, developer, status, id, image }) => {
  const dispatch = useDispatch();

  // Handle adding to favorites
  const handleAddToFavorites = (productId) => {
    // Dispatch an action to add to favorites (you would need to implement this in your Redux slice)
    dispatch({ type: "ADD_TO_FAVORITES", payload: productId });
  };

  // Handle adding to cart
  const addToCart = (productId) => {
    // Dispatch an action to add to cart (you would need to implement this in your Redux slice)
    dispatch({ type: "ADD_TO_CART", payload: productId });
  };

  return (
    <div className="product-card">
      <div className="product-header">
        <strong>{name}</strong> - ${price}
      </div>
      <div className="product-image">
        <Image
          src={image || "/placeholder-image.jpg"} 
          alt={name}
          width={200}
          height={200}
          className="subcategory-image"
        />
      </div>
      <div className="product-actions">
        <button onClick={() => handleAddToFavorites(id)}>Add To Favorites</button>
        <button onClick={() => addToCart(id)}>Add To Cart</button>
      </div>
      <div className="product-details">
        <p><strong>Category:</strong> {category}</p>
        <p><strong>Developer:</strong> {developer}</p>
        <p><strong>Status:</strong> {status}</p>
      </div>
    </div>
  );
};

export default Product;
