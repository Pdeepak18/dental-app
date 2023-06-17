import  Navbar  from "./Navbar"
import Footer from "./Footer"
import React from 'react'
import img from "../images/about-image.jpg"
import { Carousel, Typography, Button } from "@material-tailwind/react";
import quality from "../images/quality.21b31cce00d40e8606b8.png"
import dt from "../images/download.png"
import waran from "../images/waran.7a6416166ed3df4c00af.png"




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
      {/* <Typography 
      variant="h1"
      color="#002984">
        <p className="text-sky-600	">About Us</p>
      </Typography> */}

      <div className="benefits extra-margin flex flex-col  md:flex-row justify-center gap-[150px]">
          <div className="benefits-single">
            <img src={quality} alt="Quality" className="benefits-quality" />
            <h4 className="benefits-head">Best Quality</h4>
            <p className="benefits-detail">
              Our online products are renowned for their exceptional quality,
              ensuring customer satisfaction with every purchase.
            </p>
          </div>

          <div className="benefits-single">
            <img src={dt} alt="Delivery truck" className="benefits-truck" />
            <h4 className="benefits-head ">Free Shipping</h4>
            <p className="benefits-detail">
              Enjoy the convenience of free shipping on all our online products,
              making your shopping experience hassle-free.
            </p>
          </div>

          <div className="benefits-single">
            <img src={waran} alt="Waranty" className="benefits-wara" />
            <h4 className="benefits-head">Waranty</h4>
            <p className="benefits-detail">
              Rest assured with our comprehensive warranty, providing protection
              for your purchased online products.
            </p>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  )
}

export default Aboutus
