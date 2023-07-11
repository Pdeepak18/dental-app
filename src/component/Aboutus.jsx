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
import cat_1 from "../images/cat-1.jpg";
import cat_2 from "../images/cat-2.jpg";
import cat_3 from "../images/cat-3-removebg-preview.png";
import cat_4 from "../images/cat-4.jpg";
import cat_5 from "../images/cat-5.jpg";
import { useEffect } from "react";

const Aboutus = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <div>
      <Navbar />
      <div className="md:rounded-xl h-[200px] md:h-[250px]" id="/">
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

      {/* About us */}
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          About Us
        </h1>
      </div>

      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10  md:pl-[60px] text-xl  ">
        <p className="mb-5 	 leading-normal ">
          Established in the year 2018 we, "FRAGLOT INDUSTRIES", are a well
          known name engaged in manufacturing and supplying an array of Surgical
          Instruments. Our products are accepted and appreciated for designed
          and efficient functioning. We believe in maintaining the quality not
          only in products but also in our lives.
        </p>
        <p className="mb-5 leading-normal">
          Leader of our segments in the ophthalmic industry y. Ophthalmic
          instruments include: Forceps - Serrated and untoothed forceps for
          holding tissue, such as the iris, to restrict movement during
          ophthalmology. Our key product categories include surgical lenses,
          ophthalmic diagnostic strips, vitreo-retina devices, cataract blades &
          specialty devices, fluid management devices and ophthalmic cannulas
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

      {/* Infrastructure */}
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Infrastructure
        </h1>
      </div>

      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10  md:pl-[60px] text-xl leading-2 md:leading-8">
        <p className="mb-1 	 leading-normal text-left">
          We possess a highly advanced manufacturing facility run by a team of
          immensely experienced and qualified personnel. We lays a special
          emphasis on the packaging of our products and deliver them safely to
          the client. Packaging our products in specially designed customized
          contains, we ensure that there is no damage to the products.
        </p>
      </div>

      {/* Mission */}
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Mission
        </h1>
      </div>
      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10 md:pl-[60px] text-xl leading-2 md:leading-8">
        <p className="mb-2 	leading-normal ">
          We manufacture high quality ophthalmic devices which are 100% reliable
          through constant progressive innovation. We are dedicated towards our
          vision to help the ophthalmic community improve the lives of their
          patients through our products.
        </p>
      </div>

      {/* Client Satisfaction */}
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Client Satisfaction
        </h1>
      </div>
      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10 md:pl-[60px] text-xl leading-2 md:leading-8">
        <p className="mb-2 	leading-normal ">
          With self appraisal, employees become active participants in their
          review and appraisal process, rather than simply being passive
          recipients. Consequently, they feel valued, motivated and the level of
          engagement increases. Furthermore, with greater engagement, levels of
          commitment, retention and productivity go up.
        </p>
      </div>

      {/* Category  */}
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Our Category
        </h1>
      </div>

      <div className=" opacity-80 benefits-detail text-justify bt	px-6  md:mx-14 mt-10 md:pl-[60px] grid  grid-cols-1 md:grid-cols-2 text-xl leading-2 md:leading-8">
        <div className="cat">
          <p className="text-red-800 text-2xl md:text-3xl">
            MICRO NEEDLE HOLDER
          </p>
          <ul class="dashed">
            <li>MICRO NEEDLE HOLDER</li>
            <li>CURVED CASTROVIEJO NEEDLE HOLDER</li>
            <li>STRAIGHT CASTROVIEJO NEEDLE HOLDER</li>
            <li>NEEDLE HOLDER</li>
            <li>BARRAQUER'S NEEDLE HOLDER</li>
          </ul>
        </div>
        <div className="cat">
          <p className="text-red-800 text-2xl md:text-3xl">
            SURGERY INSTRUMENTS
          </p>
          <ul class="dashed">
            <li>PUNCHES</li>
            <li>BONE PUNCH</li>
            <li>PLASTIC SURGERY INSTRUMENTS</li>
            <li>CANNULA</li>
            <li>MICROSURGERY INSTRUMENTS </li>
          </ul>
        </div>
        <div className="cat">
          <p className="text-red-800 text-2xl md:text-3xl">MICRO FORCEP</p>
          <ul class="dashed">
            <li>ROUND BODY FORCEP</li>
            <li>MICRO FORCEP</li>
            <li>ARTERY FORCEP</li>
            <li>IRIS FORCEP</li>
          </ul>
        </div>

        <div className="cat">
          <p className="text-red-800 text-2xl md:text-3xl">SCISSORS</p>
          <ul class="dashed">
            <li>STRAIGHT MICRO SCISSORS</li>
            <li>CURVED SCISSORS</li>
            <li>VANNAS' SCISSORS</li>
            <li>CORNEAL SPRING SCISSORS</li>
          </ul>
        </div>
      </div>

      {/* our Products */}
      <div className="  md:mx-14 mt-14 px-6 md:pl-14 res">
        <h1 className="text-sky-600	 text-4xl md:text-6xl text-blue-800 font-bold">
          Our Products
        </h1>
      </div>

      <div className=" opacity-80 benefits-detail text-justify bt flex flex-col gap-10	px-6  md:mx-14 mt-10 md:pl-[60px] text-xl leading-2 md:leading-8">
        {/* <div className="container">
        <img src={prod_1} alt="" />
        <p className="mb-2 	 leading-normal">
          
              <span className="font-bold opacity-100">
                
                
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
      </div> */}
        {/* cat-1 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-6 md:mb-20 md:hidden"></div>
            <RxDot
              size="35px"
              color="rgb(21 101 192 )"
              className="hidden md:block"
            />
          </div>
          <div className="ml-5 " id="vitreoretina">
            <img
              src={cat_1}
              alt=""
              width="1800"
              height="800"
              className="border hover:border-solid	hover:border-black	"
            />
          </div>
          <div className="pt-12 md:pt-24 md:pl-10">
            <p className="mb-2 	 leading-normal ">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                VITREO RETINA &nbsp;:&nbsp;
              </span>
              Vitreoretinal is a term that pertains to the vitreous fluid in the
              eye and the retina. This portion of your eye is in the back. The
              fluid is a clear, gel-like substance that helps your eye maintain
              its shape. Vitreoretinal diseases are conditions that affect
              structures in the eye called the retina and the vitreous. The
              retina is the light-sensitive layer in the back of the eye that
              focuses images and transmits that information to the brain via the
              optic nerve.
            </p>
          </div>
        </div>
        {/* cat-2 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-6 md:mb-20 md:hidden"></div>
            <RxDot
              size="35px"
              color="rgb(21 101 192 )"
              className="hidden md:block"
            />
          </div>
          <div className="ml-5" id="OPHTHALMICCANNULAS">
            <img
              src={cat_2}
              alt=""
              width="1800"
              height="800"
              className="border hover:border-solid	hover:border-black	"
            />
          </div>
          <div className="pt-12 md:pt-24 md:pl-10">
            <p className="mb-2 	 leading-normal ">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                OPHTHALMIC CANNULAS &nbsp;:&nbsp;
              </span>
              Disposable Ophthalmic Cannula used for maintaining or forming
              anterior chamber and irrigating cornea during surgery. It may be
              used for injection or removal of air, fluids, and viscoelastic
              substances during an ophthalmic surgery. Ophthalmic instruments
              are used by a variety of individuals who are concerned with the
              health and performance of the eyes as organs of the body
              cooperating binocularly as optical systems.
            </p>
          </div>
        </div>
        {/* cat-3 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-6 md:mb-20 md:hidden"></div>
            <RxDot
              size="35px"
              color="rgb(21 101 192 )"
              className="hidden md:block"
            />
          </div>
          <div className="ml-5" id="FLUIDMANAGEMENTDEVICES">
            <img
              src={cat_3}
              alt=""
              width="1400"
              height="800"
              className="border hover:border-solid	hover:border-black	"
            />
          </div>
          <div className="pt-12 md:pt-24 md:pl-10">
            <p className="mb-2 	 leading-normal ">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                FLUID MANAGEMENT DEVICES &nbsp;:&nbsp;
              </span>
              Fluid management is an essential aspect for any patient admitted
              to the hospital. If possible, patients should take fluids
              enterally since this is the natural route of fluid intake.
              However, many patients who are sick enough to need admission to
              the hospital might have a reason they cannot tolerate oral intake.
            </p>
          </div>
        </div>
        {/* cat-4 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-6 md:mb-20 md:hidden"></div>
            <RxDot
              size="35px"
              color="rgb(21 101 192 )"
              className="hidden md:block"
            />
          </div>
          <div className="ml-5" id="Needleholder">
            <img
              src={cat_4}
              alt=""
              width="1000"
              height="1000"
              className="border hover:border-solid	hover:border-black	"
            />
          </div>
          <div className="pt-12 md:pt-24 md:pl-10">
            <p className="mb-2 	 leading-normal ">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                Needle holder&nbsp;&nbsp;
              </span>
              Forceps, is a surgical instrument similar to a hemostat, used by
              doctors and surgeons to hold and push a suturing needle when
              performing wound closure, ligation and other surgical procedures
              that require re-anastomosis.
            </p>
          </div>
        </div>
        {/* cat-5 */}
        <div className="flex flex-col md:flex-row">
          <div>
            <div className="w-6 h-1 bg-green-400	 mx-auto mt-4 mb-6 md:mb-20 md:hidden"></div>
            <RxDot
              size="35px"
              color="rgb(21 101 192 )"
              className="hidden md:block"
            />
          </div>
          <div className="ml-5" id="AKAHOSHIPRECHOPPER">
            <img
              src={cat_5}
              alt=""
              width="1300"
              height="800"
              className="border hover:border-solid	hover:border-black	"
            />
          </div>
          <div className="pt-12 md:pt-24 md:pl-10">
            <p className="mb-2 	 leading-normal ">
              {" "}
              <span className="font-bold opacity-100">
                {" "}
                AKAHOSHI PRE-CHOPPER&nbsp;&nbsp;
              </span>
              The Akahoshi prechopper is a safe and efficient tool to segment
              the lens nucleus into 4 quadrants without using any
              phacoemulsification energy. It is inserted into the eye to
              fragment the nucleus and can also be used to rotate the lens
              nucleus with minimal zonular stress.
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
            <tr>
              <td className="tleft ">Packaging :</td>
              <td>
                <ul>
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
              <td className="tright">
                {" "}
                T/T (Bank Transfer) / Cash / Cheque / DD
              </td>
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
                Bank name- ICICI BANK, <br /> A/C NO. - 039301004185, <br />
                IFSC CODE - ICIC0000393, <br /> City - Mumbai
              </td>
            </tr>

            <tr>
              <td className="tleft">GST No :</td>
              <td className="tright"> 27CREPM4118E1ZZ</td>
            </tr>
          </tbody>
        </table>
      </div>
      {/* mobile */}
      <div className="opacity-80 p-3 block  md:hidden ">
        <table className="w-full tbw">
          <tbody>
            <tr>
              <td className="trightm">Packaging :</td>
              <td className="tleftm ">
                <ul>
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
              <td className="tleftm">
                {" "}
                T/T (Bank Transfer) / Cash / Cheque / DD
              </td>
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
                Bank name- ICICI BANK, <br /> A/C NO. - 039301004185, <br />
                IFSC CODE - ICIC0000393, <br /> City - Mumbai
              </td>
            </tr>

            <tr>
              <td className="trightm">GST No :</td>
              <td className="tleftm"> 27CREPM4118E1ZZ</td>
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
