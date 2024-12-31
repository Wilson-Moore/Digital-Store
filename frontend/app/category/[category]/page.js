"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import Image from "next/image";
import "../../../styles/category.css";
import Navbar from "@/components/Navbar";

const Category = () => {
  const path = usePathname();
  const categoryUrl = path.split("/")[2];
  const category = categoryUrl.split("_").join(" ");
  const allCategories = useSelector((state) => state.products.categories);
  const paramsCategory = allCategories.find((cat) => cat.name === category);

  useEffect(() => {
    paramsCategory?.subcategories.forEach((subcategory) => {
      console.log(subcategory.name);
    });
  }, [paramsCategory]);

  return (
    <div className="category-container">
      <Navbar />
      <h1 className="name-category">{category}</h1>
      <div className="subcategory-list">
        {paramsCategory?.subcategories.map((subcategory) => (
          <div className="subcategory-row" key={subcategory.name}>
            <div className="subcategory-name">
              <Image
                src={subcategory.image || "/placeholder-image.jpg"}
                alt={subcategory.name}
                width={100}
                height={100}
                className="subcategory-image"
              />
              <Link
                href={`/category/${category.split(" ").join("_")}/${subcategory.name
                  .split(" ")
                  .join("_")}`}
              >
                {subcategory.name}
              </Link>
            </div>
            <div className="subcategory-products">
              <ul>
                {subcategory.products.map((product) => (
                  <li key={product.id}>{product.name}</li>
                ))}
              </ul>
            </div>
            <Link href={`/category/${category.split(" ").join("_")}/${subcategory.name
                  .split(" ")
                  .join("_")}`} >
            <div className="subcategory-description">View More</div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Category;
