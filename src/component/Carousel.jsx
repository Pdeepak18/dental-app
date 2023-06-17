import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import per1 from "../images/per1.png";
import per2 from "../images/per2.png";
import per3 from "../images/per3.png";
import per4 from "../images/per4.png";
import per5 from "../images/per5.png";
import per6 from "../images/per6.png";
import "./carousel.css";

const TestimonialCarousel = () => {
  return (
    <Carousel
      autoPlay={true} 
      interval={3000} 
      infiniteLoop={true} 
      showArrows={true} 
      showStatus={false}
      showThumbs={false}
    >
      <img src={per1} alt="person1" />
      <img src={per2} alt="person2" />
      <img src={per3} alt="person3" />
      <img src={per4} alt="person4" />
      <img src={per5} alt="person5" />
      <img src={per6} alt="person6" />
    </Carousel>
  );
};

export default TestimonialCarousel;