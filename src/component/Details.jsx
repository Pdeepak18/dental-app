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
            99 S.t Jomblo Park Pekanbaru 28292. Indonesia
            </p>
          </div>

          <div className="benefits-single">
          <FiPhone  size="80px" className=' add-icon '/>  
          <h4 className="info-head mt-3">Phone</h4>
            <p className="benefits-detail">
            (+62)81 414 257 9980
            </p>
          </div>

          <div className="benefits-single">
            {/* <img src={waran} alt="Waranty" className="benefits-wara" /> */}
            <MdOutlineEmail size="90px" className=' add-icon '/>
            <h4 className="info-head mt-1">Mail</h4>

            <p className="benefits-detail">
            info@yourdomain.com <br />
            info@yourdomain.com



            </p>
          </div>
        </div>
    </div>
  )
}

export default Details
