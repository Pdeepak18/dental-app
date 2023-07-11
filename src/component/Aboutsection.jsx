import React from "react";
import business from "../images/businessman.jpg";
import "../App.css";
import { Link } from "react-router-dom";

const Aboutsection = () => {
  return (
    <section className=" p-10 bg-white	flex flex-col md:flex-row ">
      {/* left image */}
      <div className="md:p-12  md:w-[45%]">
        {/* For lg screen */}
        <img
          src={business}
          alt=""
          className="rounded-xl hidden md:block object-cover"
          width="70%"
          height="250px"
        />
        {/* for small screen */}
        <img
          src={business}
          alt=""
          className=" rounded-xl h-full w-full object-cover block md:hidden"
        />
      </div>
      {/* right description */}
      <div className=" md:w-[50%]">
        <div className=" flex flex-col mt-10">
          <h3 className="text-center text-xl font-bold	bt">
            ABOUT FRAGLOT SURGICAL WORKS
          </h3>
          <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-10 md:mb-20"></div>
        </div>

        <div className="about ">
          <p className="text-xl text-justify 	 font-poppins smll-font ">
            Established in the year 2018 we, "FRAGLOT INDUSTRIES", are a well
            known name engaged in manufacturing and supplying an array of
            Surgical Instruments. Our products are accepted and appreciated for
            designed and efficient functioning. We believe in maintaining the
            quality not only in products but also in our lives.
          </p>
          <p className="text-justify text-xl mt-10 font-poppins  smll-font">
            Leader of our segments in the ophthalmic industry y. Ophthalmic
            instruments include: Forceps - Serrated and untoothed forceps for
            holding tissue, such as the iris, to restrict movement during
            ophthalmology. Our key product categories include surgical lenses,
            ophthalmic diagnostic strips, vitreo-retina devices, cataract blades
            & specialty devices, fluid management devices and ophthalmic
            cannulas
          </p>

          <button className="bg-green-400 w-full mt-6 md:w-fit flex items-center justify-center md:justify-start text-white py-[14px] px-[18px] rounded-md font-inherit font-bold hover:bg-red-400 transition-all duration-200">
            <a href="/aboutus" className="text-xl">
              <Link to="/aboutus">Know More</Link>
            </a>
            <svg
              viewBox="0 0 24 24"
              focusable="false"
              className="w-[14px] h-[14px] ml-2 my-1"
            >
              <path
                fill="currentColor"
                d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Aboutsection;
