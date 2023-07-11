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
            <h4 className="info-head ">Bank Details</h4>
            <p className="benefits-detail">
             Bank name- ICICI BANK,<br />
            A/C NO. - 039301004185,<br />
            IFSC CODE - ICIC0000393,<br />
            City - Mumbai

            </p>
          </div>

          <div className="benefits-single">
          <FiPhone  size="80px" className=' add-icon '/>  
          <h4 className="info-head mt-3">Phone</h4>
            <p className="benefits-detail">
            (+91)8976420730
            </p>
          </div>

          <div className="benefits-single">
            {/* <img src={waran} alt="Waranty" className="benefits-wara" /> */}
            <MdOutlineEmail size="90px" className=' add-icon '/>
            <h4 className="info-head mt-1">GST NO.</h4>

            <p className="benefits-detail">
            GST NO.- 27CREPM4118E1ZZ <br />
            



            </p>
          </div>
        </div>
    </div>
  )
}

export default Details
