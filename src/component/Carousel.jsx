// import { Carousel } from "react-responsive-carousel";
// import "react-responsive-carousel/lib/styles/carousel.min.css";
// import per1 from "../images/per1.png";
// import per2 from "../images/per2.png";
// import per3 from "../images/per3.png";
// import per4 from "../images/per4.png";
// import per5 from "../images/per5.png";
// import per6 from "../images/per6.png";
// import "./carousel.css";

// const TestimonialCarousel = () => {
//   return (
//     <Carousel
//       autoPlay={true} 
//       interval={3000} 
//       infiniteLoop={true} 
//       showArrows={true} 
//       showStatus={false}
//       showThumbs={false}
//     >
//       <img src={per1} alt="person1" />
//       <img src={per2} alt="person2" />
//       <img src={per3} alt="person3" />
//       <img src={per4} alt="person4" />
//       <img src={per5} alt="person5" />
//       <img src={per6} alt="person6" />
//     </Carousel>
//   );
// };

// export default TestimonialCarousel;

import React from 'react'
import Carousel from 'better-react-carousel'
import "../App.css";



const MyDot = ({ isActive }) => (
  <span
    style={{

      breakpoint: 800,
    cols: 3,
    rows: 2,
    gap: 10,
    loop: true,
    autoplay: 1000
    }}
  ></span>
)

const TestimonialCarousel = () => {
  return (
    <Carousel cols={3} rows={1} gap={10}  dot={MyDot}>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=1" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=2" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=4" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=5" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=6" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=7" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=8" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>
      <Carousel.Item>
        <img width="100%" src="https://picsum.photos/800/600?random=3" />
      </Carousel.Item>

      <Carousel.Item>
        {/* anything you want to show in the grid */}
      </Carousel.Item>
      {/* ... */}
    </Carousel>
  )
}

export default TestimonialCarousel;