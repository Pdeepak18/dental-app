import {React,useEffect,useState} from 'react'
import blogimg1 from '../images/blogimg1.jpg';
import Slider from './Slider';
import Navbar from './Navbar';
import "../App.css"
import Aboutsection from './Aboutsection';
import Productsection from './Productsection';
import Footer from './Footer';
import TestimonialCarousel from "./Carousel";

const Home = () => {
  return (
   <div>
    <Navbar />
    <Slider />
    <Aboutsection />
    <Productsection />
    <div className="carousel">
          <TestimonialCarousel />
        </div>
    <Footer />
   </div>
  )
}

export default Home
