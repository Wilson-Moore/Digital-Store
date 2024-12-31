"use client";
import { useDispatch } from "react-redux";
import Image from "next/image";
import "./../styles/product.css";
import { toast } from "react-toastify";

const Product = ({ name, price, id, image }) => {
  const dispatch = useDispatch();

  const addToCart = (productId) => {
    dispatch({ type: "cart/addToCart", payload: { productId } });

    toast.success("Product added successfully",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    })
  };

  const addToFavorites = (productId) => {
    dispatch({ type: "favorite/addToFavorites", payload: { productId } });
    
    toast.success("Product added successfully",{
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      progress: undefined,
    })
  };

  return (
    <div className="product-card">
      <div className="card-image">
        <Image src={image} alt={name} width={200} height={200} />
      </div>
      <div className="card-name">
        <h2>{name}</h2>
      </div>
      <div className="card-price">${price.toFixed(2)}</div>
      <button className="add-to-cart-button" onClick={() => addToCart(id)}>
        Add to Cart
      </button>
      <button
        className="add-to-favorites-button"
        onClick={() => addToFavorites(id)}
      >
        Add to Favorites
      </button>
    </div>
  );
};

export default Product;
