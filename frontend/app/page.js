"use client"
import { useSelector } from 'react-redux';
import Navbar from "@/components/Navbar"
import Link from 'next/link';

const Home = () => {
  const categories = useSelector((state) => state.products.categories);
  return (
    <div>
      <Navbar/>
      <br/>
      {
        categories.map((category)=>{
          return(
            <Link href={`/category/${category.name.split(" ").join("_")}`}>
          <div>{category.name}</div></Link>
          )
        })
      }
    </div>
  )
}

export default Home