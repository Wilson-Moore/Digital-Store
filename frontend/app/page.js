"use client"
import { useSelector } from 'react-redux';
import Navbar from "@/components/Navbar"
import Header from '@/components/Header';
import DiscoverCategories from '@/components/DiscoverCategories';
import Footer from '@/components/Footer';

const Home = () => {
  const categories = useSelector((state) => state.products.categories);
  return (
    <div>
      <Navbar/>
      <Header/>
      <DiscoverCategories/>
      <Footer/>
    </div>
  )
}

export default Home