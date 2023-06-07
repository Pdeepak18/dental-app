import {React,useEffect,useState} from 'react'
import blogimg1 from '../images/blogimg1.jpg';
import Slider from './Slider';
import Navbar from './Navbar';
import "../App.css"
import Aboutsection from './Aboutsection';
const Home = () => {
  return (
   <div>
    <Navbar />
    <Slider />
    <Aboutsection />

   </div>
  )
}

export default Home
