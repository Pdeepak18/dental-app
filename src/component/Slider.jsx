import { Carousel, Typography, Button } from "@material-tailwind/react";
import {React,useEffect,useState} from 'react'
import home01 from '../images/home01.jpg';
import prod_5 from "../images/service-img-1.jpg";
import '../App.css'
import { Link } from 'react-router-dom';


export default function Slider() {
  return (
    <Carousel className="rounded-xl h-[726px] md:h-[850px]">
      {/* <div className="relative h-full w-full">
        <img
          src={home01}
          alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              The Beauty of Nature
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 smll-font"
            >
              It is not so much for its beauty that the forest makes a claim
              upon men&apos;s hearts, as for that subtle something, that
              quality of air that emanation from old trees, that so
              wonderfully changes and renews a weary spirit.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
                Explore
              </Button>
              <Button size="lg" color="white" variant="text">
                Gallery
              </Button>
            </div>
          </div>
        </div>
      </div> */}
      <div className="relative h-full w-full">
        <img
        src={home01}  
        alt="image 1"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Established in the year 2018
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 smll-font"
            >
              "Fraglot ", are a well known name engaged in manufacturing and supplying an array of Surgical Instruments.
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
              <a href="/ourproducts"><Link to="/ourproducts"> Explore</Link></a>
              </Button>
              <Button size="lg" color="white" variant="text">
              <a href="/contactus"> <Link to="/contactus">Contact Us</Link></a>
              </Button>
            </div>
          </div>
        </div>
      </div>    
        <div className="relative h-full w-full">
        <img
          src={prod_5}
          alt="image 1"
          className="h-full w-full object-contain"
        />
        <div className="absolute inset-0 grid h-full w-full place-items-center bg-black/75">
          <div className="w-3/4 text-center md:w-2/4">
            <Typography
              variant="h1"
              color="white"
              className="mb-4 text-3xl md:text-4xl lg:text-5xl"
            >
              Able & Efficient Guidance
            </Typography>
            <Typography
              variant="lead"
              color="white"
              className="mb-12 opacity-80 smll-font"
            >
              We have carved a special niche for ourselves in this domain. His ethical business practices, client centric approaches
            </Typography>
            <div className="flex justify-center gap-2">
              <Button size="lg" color="white">
              <a href="/ourproducts"><Link to="/ourproducts"> Explore</Link></a>
              </Button>
              <Button size="lg" color="white" variant="text">
                <a href="/contactus"> <Link to="/contactus">Contact Us</Link></a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Carousel>
  );
}