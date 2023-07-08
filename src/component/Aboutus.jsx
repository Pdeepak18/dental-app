import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import img from "../images/about-image.jpg";
import { Carousel, Typography, Button } from "@material-tailwind/react";
import quality from "../images/quality.21b31cce00d40e8606b8.png";
import dt from "../images/download.png";
import waran from "../images/waran.7a6416166ed3df4c00af.png";
import { Link } from "react-router-dom";
import { RxDot } from "react-icons/rx";
import "../App.css";
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
                <p className="italic">
                  <a href="/" className="hover:text-light-blue-900">
                    <Link to="/">Home</Link>
                  </a>{" "}
                  /
                  <a href="/" className="hover:text-light-blue-900">
                    {" "}
                    <Link to="/aboutus">About Us</Link>
                  </a>
                </p>
              </Typography>
            </div>
          </div>
        </div>
      </div>
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          About Us
        </h1>
      </div>

      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10  md:pl-[60px] text-xl  ">
        <p className="mb-5 	 leading-normal ">
          Fraglot is a one of the leading manufacturer and supplier of
          wide-range of highly demanded finest quality Surgical Instruments in
          India.
        </p>
        <p className="mb-5 leading-normal">
          Fraglot offers diverse range of hair transplant instruments and
          products to help and assist specialist surgeons in hair restoration
          surgery making us most popular surgical instruments brand in the
          market.
        </p>
        <p className="mb-5 leading-normal">
          At Fraglot Surgicals, we design and precision manufacture these
          instruments for surgical surgeons to greatly improve patient results
          and increase overall efficiency for maximum usability and the highest
          end results available today. As a result, we are one of the fastest-
          growing companies in the field of surgery instruments.
        </p>
        <p className="mb-5 leading-normal">
          {" "}
          The Fraglot Surgicals tools line helps guarantee numerous successful
          procedures that medical surgeons and their patients takes pride to
          showcase their end results and hence our products are endorsed and
          recommended by the leading medical surgeons of India.
        </p>
      </div>

      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Infrastructure
        </h1>
      </div>

      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10  md:pl-[60px] text-xl leading-2 md:leading-8">
        <p className="mb-1 	 leading-normal text-left">
          Instruments Wide-ranging Applications
        </p>
        <p className="mb-1 leading-normal">
          You can select from a vast assortment of instruments products, such as
          the Dermojet, Derma blade, and more, which we provide for various
          medical applications. Our instruments and equipment are used for
          procedures, such as Dermabrasion, Liposuction, Skin Grafting, and
          Micropigmentation. Physicians from various fields use our products.
        </p>
        <p className="mb-1 font-bold opacity-90 leading-normal">
          Some fields include:
        </p>
        <p className="mb-1 leading-normal"> - Dermatology</p>
        <p className="mb-1 leading-normal">- Plastic Surgery</p>
        <p className="mb-4 leading-normal"> - Cosmetic Surgery</p>
        <p className="mb-6 	leading-normal ">
          All the instruments and equipment that we make available to you are
          passed through a Certified Quality Management System, as per ISO 13485
          and ISO 9001.
        </p>
      </div>
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Client Satisfaction
        </h1>
      </div>
      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10 md:pl-[60px] text-xl leading-2 md:leading-8">
        <p className="mb-2 	leading-normal ">
          Our organization has adopted various measures that have enabled us to
          attain maximum level of client satisfaction.
        </p>
      </div>

      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Our Products
        </h1>
      </div>

      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10 md:pl-[60px] text-xl leading-2 md:leading-8">
        {/* pord-1 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2 	 leading-normal">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                Hair Transplant Instruments &nbsp;&nbsp;
              </span>
              (Hair Transplant Slits, Hair Transplant Adaptors / Handle,
              Retractor for hair transplant, Hair Transplant Forceps, Jeweller
              hair transplant forceps , Implanting Jeweller forceps, Extracting
              Jeweller Forceps, 3 hole design hair transplant forceps,
              Implanting 3 hole design Forceps, Extracting 3 hole design
              Forceps, Implanting Forester Forceps, Extracting Forester Forceps,
              Implanting Castroviezo forceps, Extracting Castroviezo forceps,
              Thick body implanting forceps, Thick body extracting forceps,
              Adson hair implanting forceps, Adson hair extracting forceps,
              Adson brown hair implanting forceps, Adson brown hair extracting
              forceps, Hair Transplant Graft collector, Hair Transplant graft
              Chilling device, Hair Transplant Micro motor and hand piece, Hair
              Transplant Lens loupes, Hair line markers, Hair Transplant Punch
              storage box, Hair Transplant Silicon pillow, Hair transplant
              chair, Hair Transplant LED OT lights)
            </p>
          </div>
        </div>
        {/* prod-2 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2 	 leading-normal">
              {" "}
              <span className="font-bold opacity-100">
                Micro Surgery Instruments &nbsp;&nbsp;
              </span>
              (Micro Scissor, Micro Scissors Round body, Micro Scissors Flat
              Body, Micro Needle holder, Needle holder round body, Needle holder
              Flat Body, Micro forceps, Round Body Micro forceps, Jeweller micro
              forceps, Micro Groove forceps, 3 hole design micro forceps,
              Castroviezo Micro forceps, Gerald micro forceps, Gomel micro
              forceps, Adson micro forceps, Adson brown micro forceps, Vessel
              dilator micro forceps, Vascular Atraumatic forceps, Atraumatic
              forceps Round body, Atraumatic forceps Flat body, Vascular Bulldog
              clamp, Microvascular Clamps for vein, Microvascular Clamps for
              artery, Tubal clamps)
            </p>
          </div>
        </div>
        {/* prod-3 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2">
              {" "}
              <span className="font-bold opacity-100">
                Dermatology Instruments &nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>
        {/* prod-4 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2">
              {" "}
              <span className="font-bold opacity-100">
                Liposuction Canula&nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>
        {/* prod-5 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2">
              {" "}
              <span className="font-bold opacity-100">
                Plastic Surgery Instruments &nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>
        {/* prod-6 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                Maxillofacial Instruments &nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>

        {/* prod-7 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2">
              {" "}
              <span className="font-bold opacity-100">
                Rhinoplasty Instruments &nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>

        {/* prod-8 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-2">
              {" "}
              <span className="font-bold opacity-100">
                Cleft and Palette &nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>

        {/* prod-9 */}
        <div className="flex flex-row">
          <div>
            <RxDot size="35px" color="rgb(21 101 192 )" />
          </div>
          <div>
            <p className="mb-0">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                Neurosurgery Instruments &nbsp;&nbsp;
              </span>
            </p>
          </div>
        </div>
      </div>

      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res ">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Packaging / Payment and Shipment Details
        </h1>
      </div>
{/* web */}
      <div className=" hidden md:block opacity-80   text-justify bt tbh	px-6  md:mx-14 mt-10  md:pl-[60px] md:text-xl  md:leading-8 tb">
        <table className="w-2/4  md:w-3/4 tbh">
          <tbody>
            <tr >
              <td className="tleft ">Packaging :</td>
              <td>
                <ul >
                  <li>
                    Plastic Box / Wooden box / Bubble wrapped / Customized
                  </li>
                  <li>Safe and compact packaging</li>
                  <li>Final Checking Before Dispatch</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="tleft">Payment mode :</td>
              <td className="tright"> T/T (Bank Transfer) / Cash / Cheque / DD</td>
            </tr>

            <tr>
              <td className="tleft">Estimated Delivery Time :</td>
              <td>
                <ul>
                  <li>Min: Next day Delivery by Bluedart / DTDC</li>
                  <li>Max: Upto 5 to 10 working days</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="tleft">Bank Details :</td>
              <td className="tright">
             Bank name- ICICI BANK, <br /> A/C NO. - 039301004185, <br />IFSC CODE -
                ICIC0000393, <br /> City - Mumbai
              </td>
            </tr>

            <tr>
              <td className="tleft">GST No :</td>
              <td className="tright">  27CREPM4118E1ZZ</td>
            </tr>
          </tbody>
        </table>
      </div>
{/* mobile */}
        <div className="opacity-80 p-3 block  md:hidden ">
        <table className="w-full tbw">
          <tbody>
            <tr >
              <td className="trightm">Packaging :</td>
              <td className="tleftm ">
                <ul >
                  <li>
                    Plastic Box / Wooden box / Bubble wrapped / Customized
                  </li>
                  <li>Safe and compact packaging</li>
                  <li>Final Checking Before Dispatch</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="trightm">Payment mode :</td>
              <td className="tleftm"> T/T (Bank Transfer) / Cash / Cheque / DD</td>
            </tr>

            <tr>
              <td className="trightm">Estimated Delivery Time :</td>
              <td className="tleftm">
                <ul>
                  <li>Min: Next day Delivery by Bluedart / DTDC</li>
                  <li>Max: Upto 5 to 10 working days</li>
                </ul>
              </td>
            </tr>

            <tr>
              <td className="trightm">Bank Details :</td>
              <td className="tleftm">
             Bank name- ICICI BANK, <br /> A/C NO. - 039301004185, <br />IFSC CODE -
                ICIC0000393, <br /> City - Mumbai
              </td>
            </tr>

            <tr>
              <td className="trightm">GST No :</td>
              <td className="tleftm">  27CREPM4118E1ZZ</td>
            </tr>
          </tbody>
        </table>
        </div>
      <div className="benefits-about extra-margin flex flex-col  md:flex-row justify-center md:gap-[150px]">
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

      <Footer />
    </div>
  );
};

export default Aboutus;
