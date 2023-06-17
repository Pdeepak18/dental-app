import React from 'react'
import quality from "../images/quality.21b31cce00d40e8606b8.png"
import dt from "../images/download.png"
import waran from "../images/waran.7a6416166ed3df4c00af.png"
import { FaRegAddressCard } from 'react-icons/fa';
import {FiPhone} from 'react-icons/fi';
import {MdOutlineEmail} from 'react-icons/md';
import "../App.css";


const Details = () => {
  return (
    <div className='relative '>
      <div className="details  extra-margin flex flex-col  md:flex-row justify-center  md:gap-[150px]">
          <div className="benefits-single">
           <FaRegAddressCard  size="100px" className=' add-icon'/>
            <h4 className="info-head ">Address</h4>
            <p className="benefits-detail">
              Our online products are renowned for their exceptional quality,
              ensuring customer satisfaction with every purchase.
            </p>
          </div>

          <div className="benefits-single">
          <FiPhone  size="80px" className=' add-icon '/>  
          <h4 className="info-head mt-3">Phone</h4>
            <p className="benefits-detail">
              Enjoy the convenience of free shipping on all our online products,
              making your shopping experience hassle-free.
            </p>
          </div>

          <div className="benefits-single">
            {/* <img src={waran} alt="Waranty" className="benefits-wara" /> */}
            <MdOutlineEmail size="90px" className=' add-icon '/>
            <h4 className="info-head mt-1">Mail</h4>

            <p className="benefits-detail">
              Rest assured with our comprehensive warranty, providing protection
              for your purchased online products.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Details
