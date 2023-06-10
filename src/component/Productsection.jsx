import React from 'react';
import "../App.css";
import serv1 from "../images/service-img-2.jpg";
import serv2 from "../images/service-img-1.jpg";


const Productsection = () => {
  return (
    <section className='bg-[#666666] 	 p-10 '>

        {/* flex flex-wrap justify-center gap-4 mb-4 */}
        <div>
            <h2 className='text-2xl text-slate-500 text-center	'>OUR PRODUCT RANGE</h2>
            <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-20"></div>
        </div>

        <div className='flex flex-wrap justify-center gap-4 mb-4 mt-12 '>

        <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv1} alt="" className='bg image' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'>Contact Us</a></div>
                    <div className="block md:hidden text"><a href="" className='underline'>Know More</a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Hair Transplant Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Adarsh Surgicals offers the best value Hair Transplant Instruments in surgical instruments.</p>
        </figcaption>
            </figure>
        
            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv1} alt="" className='bg image' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'>Contact Us</a></div>
                    <div className="block md:hidden text"><a href="" className='underline'>Know More</a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Hair Transplant Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Adarsh Surgicals offers the best value Hair Transplant Instruments in surgical instruments.</p>
        </figcaption>
            </figure>

            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv1} alt="" className='bg image' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'>Contact Us</a></div>
                    <div className="block md:hidden text"><a href="" className='underline'>Know More</a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Hair Transplant Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Adarsh Surgicals offers the best value Hair Transplant Instruments in surgical instruments.</p>
        </figcaption>
            </figure>

            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv1} alt="" className='bg image' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'>Contact Us</a></div>
                    <div className="block md:hidden text"><a href="" className='underline'>Know More</a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Hair Transplant Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Adarsh Surgicals offers the best value Hair Transplant Instruments in surgical instruments.</p>
        </figcaption>
            </figure>

            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv1} alt="" className='bg image' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'>Contact Us</a></div>
                    <div className="block md:hidden text"><a href="" className='underline'>Know More</a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Hair Transplant Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Adarsh Surgicals offers the best value Hair Transplant Instruments in surgical instruments.</p>
        </figcaption>
            </figure>

            <figure  className='bgcard1 tg relative  cursor-pointer border-solid md:w-[25%] md:h-[45%] hover:scale-[1.05] '>
                <img src={serv1} alt="" className='bg image' />
                <div className="middle">
                    <div className="hidden md:block text"><a href="" className='underline'>Contact Us</a></div>
                    <div className="block md:hidden text"><a href="" className='underline'>Know More</a></div>
                </div>
                <figcaption className="absolute bottom-0 z-90 w-4/4 md:w-4/4 bg-black/50 px-5 py-2 text-white capt">
            <h1 className="text-lg md:text-xl font-bold ">Hair Transplant Instruments</h1>
            <p className="mt-1 italic text-sm font-light hidden md:block">Adarsh Surgicals offers the best value Hair Transplant Instruments in surgical instruments.</p>
        </figcaption>
            </figure>


            
        </div>

    </section>
  )
}

export default Productsection
