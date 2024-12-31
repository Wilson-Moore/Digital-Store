"use client";
import Navbar from "@/components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "@/redux/slices/cartSlice.js";
import Image from "next/image";
import Link from "next/link";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const products = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();

  const getProductDetails = (productId) => {
    for (const category of products) {
      for (const subcategory of category.subcategories) {
        const product = subcategory.products.find((product) => product.id === productId);
        if (product) return product;
      }
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <div className="cart-container">
        <h1>Your Cart</h1>
        {Object.keys(cartItems).length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <div className="cart-items">
            {Object.entries(cartItems).map(([productId, quantity]) => {
              const product = getProductDetails(parseInt(productId));
              return (
                product && (
                  <div key={product.id} className="cart-item">
                    <Image src={product.image} alt={product.name} width={100} height={100} />
                    <div className="cart-item-details">
                      <h2>{product.name}</h2>
                      <p>Price: ${product.price.toFixed(2)}</p>
                      <p>Quantity: {quantity}</p>
                      <div className="cart-item-actions">
                        <button onClick={() => dispatch(addToCart({ productId: product.id }))}>
                          +
                        </button>
                        <button onClick={() => dispatch(removeFromCart({ productId: product.id }))}>
                          -
                        </button>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          <button >Procceed To Payement</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
