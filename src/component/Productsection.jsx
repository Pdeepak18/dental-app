import React from 'react';
import "../App.css";
import serv1 from "../images/service-img-2.jpg";
import serv2 from "../images/service-img-1.jpg";
import prod_1 from "../images/prod-1.jpg";
import prod_2 from "../images/prod-2.jpg";
import prod_3 from "../images/prod-3.jpg";
import prod_4 from "../images/prod-4.jpg";
import prod_5 from "../images/prod-5.jpg";
import prod_6 from "../images/prod-6.jpg";
import prod_7 from "../images/prod-7.jpg";
import prod_8 from "../images/prod-8.jpg";
import prod_9 from "../images/prod-9.jpg";
import { Link } from 'react-router-dom';


const Productsection = () => {
  return (
    <section className='bg-[#666666] 	 p-10 '>

        {/* flex flex-wrap justify-center gap-4 mb-4 */}
        <div>
            <h2 className='text-2xl text-slate-500 text-center	'>OUR PRODUCT RANGE</h2>
            <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-20"></div>
        </div>

        <div className='flex flex-wrap justify-center gap-4 mb-4 mt-12 '>

            {/* img-1 */}
        <figure  className='bgcard1 tg relative bg-image  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv1} alt="" className='bg image  ' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'><a href="/contactus"><Link to="/contactus">Contact Us</Link></a></a></div>
                    <div className="block md:hidden text"><a href="" className='underline'><a href="/ourproducts"><Link to="/ourproducts">Our Products</Link></a></a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Micro Surgery Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Fraglot Surgicals offers the best value Micro Surgery Instruments in surgical instruments.</p>
        </figcaption>
            </figure>
        
        {/* img-2 */}
            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv2} alt="" className='bg image' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'><a href="/contactus"><Link to="/contactus">Contact Us</Link></a></a></div>
                    <div className="block md:hidden text"><a href="" className='underline'><a href="/ourproducts"><Link to="/ourproducts">Our Products</Link></a></a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Hair Transplant Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Fraglot Surgicals offers the best value Hair Transplant Instruments in surgical instruments.</p>
        </figcaption>
            </figure>

        {/* img-3 */}
            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={prod_1} alt="" className='bg image h-[210px] md:h-[310px]' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'><a href="/contactus"><Link to="/contactus">Contact Us</Link></a></a></div>
                    <div className="block md:hidden text"><a href="" className='underline'><a href="/ourproducts"><Link to="/ourproducts">Our Products</Link></a></a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Nasal Rongeur Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Fraglot Surgicals offers the best value Nasal Rongeur for Rhinoscopy back biting 360 degree ENT instruments.</p>
        </figcaption>
            </figure>

            {/* img-4 */}
            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] object-fit'>
                <img src={prod_2} alt="" className='bg image   object-cover' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'><a href="/contactus"><Link to="/contactus">Contact Us</Link></a></a></div>
                    <div className="block md:hidden text"><a href="" className='underline'><a href="/ourproducts"><Link to="/ourproducts">Our Products</Link></a></a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Weil Blakesley Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Fraglot Surgicals offers the best value Weil Blakesley nasal forceps Instruments in surgical instruments.</p>
        </figcaption>
            </figure>

            {/* img-5 */}
            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] object-cover '>
                <img src={prod_3} alt="" className='bg image h-[210px] md:h-[350px]' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'><a href="/contactus"><Link to="/contactus">Contact Us</Link></a></a></div>
                    <div className="block md:hidden text"><a href="" className='underline'><a href="/ourproducts"><Link to="/ourproducts">Our Products</Link></a></a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Osher Snyder IOL Cutting  Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Fraglot Surgicals offers the best value Osher Snyder IOL Cutting  Instruments in surgical instruments.</p>
        </figcaption>
            </figure>


            {/* img-6 */}
            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] object-cover'>
                <img src={prod_9} alt="" className='bg image h-[210px] md:h-[350px] object-fit ' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'><a href="/contactus"><Link to="/contactus">Contact Us</Link></a></a></div>
                    <div className="block md:hidden text"><a href="" className='underline'><a href="/ourproducts"><Link to="/ourproducts">Our Products</Link></a></a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Laparoscopic  Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Fraglot Surgicals offers the best value Laparoscopic New Multi Function Trocar  in surgical instruments.</p>
        </figcaption>
            </figure>


            
        </div>

    </section>
  )
}

export default Productsection
