import  Navbar  from "./Navbar"
import Footer from "./Footer"
import React from 'react'
import img from "../images/about-image.jpg"
import { Carousel, Typography, Button } from "@material-tailwind/react";


const Aboutus = () => {
  return (
    <div>
      <Navbar />
      <div className="md:rounded-xl h-[200px] md:h-[250px]">
        <div className="relative h-full w-full">
          <img
            src={img}
            alt="image 1"
            className="h-full w-full opacity-100  md:object-cover "
          />
          <div className="absolute inset-0 grid h-full w-full p-10 md:p-20">
            <div className="w-4/4  md:w-2/4 opacity-95">
              <Typography
                variant="h1"
                color="white"
                className="mb-4 text-2xl md:text-3xl lg:text-5xl"
              >
               About Us
              </Typography>
              <Typography
                variant="lead"
                color="white"
                className="mb-12 opacity-80 smll-font"
              >
                <p className="italic"><a href="/" className="hover:text-light-blue-900">Home</a>  /<a href="/" className="hover:text-light-blue-900"> About Us</a></p>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className=" w-full">
        <h1 className="text-sky-600	text-6xl">About Us</h1>
      <Typography 
      variant="h1"
      color="#002984">
        <p className="text-sky-600	">About Us</p>
      </Typography>

      </div>

      <Footer />
    </div>
  )
}

export default Aboutus
