"use client";
import Navbar from "@/components/Navbar";
import { useSelector, useDispatch } from "react-redux";
import { addToFavorites, removeFromFavorites } from "@/redux/slices/favoritesSlice.js";
import Image from "next/image";

const Favorites = () => {
  const favoritesItems = useSelector((state) => state.favorites.favoritesItems); 
  const products = useSelector((state) => state.products.categories);
  const dispatch = useDispatch();

  const getProductDetails = (productId) => {
    for (const category of products) {
      for (const subcategory of category.subcategories) {
        const product = subcategory.products.find(
          (product) => product.id === productId
        );
        if (product) return product;
      }
    }
    return null;
  };

  return (
    <div>
      <Navbar />
      <div className="favorites-container">
        <h1>Your Favorites</h1>
        {Object.keys(favoritesItems).length === 0 ? (
          <p>Your Favorites list is empty.</p>
        ) : (
          <div className="favorites-items">
            {Object.entries(favoritesItems).map(([productId]) => {
              const product = getProductDetails(parseInt(productId));
              return (
                product && (
                  <div key={product.id} className="favorite-item">
                    <Image
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                    <div className="favorites-item-details">
                      <h2>{product.name}</h2>
                      <p>Price: ${product.price.toFixed(2)}</p>
                      <div className="favorites-item-actions">
                        <button
                          onClick={() =>
                            dispatch(
                              addToFavorites({ productId: product.id })
                            )
                          }
                        >
                          +
                        </button>
                        <button
                          onClick={() =>
                            dispatch(
                              removeFromFavorites({ productId: product.id })
                            )
                          }
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                )
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default Favorites;
