"use client"

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import { useSelector } from "react-redux";

const Category = () => {

  const path = usePathname();
  const categoryUrl = path.split("/")[2];
  const category = categoryUrl.split("_").join(" ");
  const allCategories = useSelector((state) => state.products.categories);
  const paramsCategory = allCategories.find((cat) => cat.name===category); 

  useEffect(()=>{
    paramsCategory.subcategories.map((subcategory)=>{
console.log(subcategory.name);

    });
    
  },[])

  return (
    <div>
      <h1>
        {category.split("_").join(" ")}
        <ul>
          {paramsCategory.subcategories.map((subcategory)=>(
            <li>
              <Link href={`/category/${category.split(" ").join("_")}/${subcategory.name.split(" ").join("_")}`}>
                {subcategory.name}
              </Link>
            </li>
          ))}
        </ul>
      </h1>
    </div>
  )
}

export default Category