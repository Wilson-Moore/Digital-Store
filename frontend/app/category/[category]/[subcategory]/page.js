"use client";

import Navbar from "@/components/Navbar";
import Product from "@/components/Product";
import { usePathname } from "next/navigation";
import { useSelector } from "react-redux";
import "./../../../../styles/SubCategory.css";

const SubCategory = () => {
  const path = usePathname();
  const categoryUrl = path.split("/")[2];
  const subCategoryUrl = path.split("/")[3];

  const category = categoryUrl.split("_").join(" ");
  const subCategory = subCategoryUrl.split("_").join(" ");

  const allCategories = useSelector((state) => state.products.categories);
  const paramsCategory = allCategories.find((cat) => cat.name === category);
  const paramsSubCategory = paramsCategory?.subcategories.find(
    (subcat) => subcat.name === subCategory
  );

  return (
    <div>
      <Navbar />
      <h1>{subCategory}</h1>
      <div className="product-grid">
        {paramsSubCategory ? (
          <div>
            <h2>Products :</h2>
            <div className="product-list">
              {paramsSubCategory.products.map((product) => (
                <Product
                  key={product.id}
                  name={product.name}
                  price={product.price}
                  image={product.image} 
                  category={paramsCategory.name}
                  developer={product.developer}
                  status={product.status}
                  id={product.id}
                />
              ))}
            </div>
          </div>
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SubCategory;
