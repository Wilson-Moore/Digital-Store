"use client"

import Product from "@/components/Product";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";


const SubCategory = () => {
  const path = usePathname();
  const categoryUrl = path.split("/")[2];
  const subCategoryUrl = path.split("/")[3];

  const category = categoryUrl.split("_").join(" ");
  const subCategory = subCategoryUrl.split("_").join(" ");

  const allCategories = useSelector((state) => state.products.categories);
  const paramsCategory = allCategories.find((cat) => cat.name === category);
  const paramsSubCategory = paramsCategory?.subcategories.find((subcat) => subcat.name === subCategory);

  return (
    <div>
      <h1>{subCategory}</h1>
      <ul>
      {paramsSubCategory ? (
        <div>
          <h2>Produits :</h2>
          <ul>
            {paramsSubCategory.products.map((product) => (
              <li key={product.id}>
              <Product  
                key={product.id} 
                name={product.name}
                price = {product.price}
              />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>Aucun produit</p>
      )}
      </ul>
      
    </div>
  )
}

export default SubCategory