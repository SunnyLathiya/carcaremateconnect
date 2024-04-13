"use client"
import React from "react";
import { Carousel } from "react-bootstrap";
// import "./CSS/CarouselComp.css";
import Image from "next/image";
import Image1 from "../../public/images/carousel/ac_disinfection_banner.png";
import Image2 from "../../public/images/carousel/ac-services_banner.jpg";
import Image3 from "../../public/images/carousel/battery-services_banner.jpg";
import Image4 from "../../public/images/carousel/clean-services_banner.png";
import Image5 from "../../public/images/carousel/paint-services_banner.jpg";
import Image6 from "../../public/images/carousel/zero_contact_banner.jpg";

import Image7 from "../../public/images/carousel/carousel-1.png";
import Image8 from "../../public/images/carousel/carousel-2.png";
import Image9 from "../../public/images/carousel/carousel-bg-1.jpg";
import Image10 from "../../public/images/carousel/carousel-bg-2.jpg";
import Image15 from "../../public/images/carousel/Untitled design.png"
import Image16 from "../../public/images/carousel/Untitled design (1).png"
import  Ima1 from "../../public/images/carslide/Untitled design (3).png";
import  Ima2 from "../../public/images/carslide/Untitled design (4).png";
import  Ima3 from "../../public/images/carslide/Untitled design (5).png";
import  Ima4 from "../../public/images/carslide/Untitled design (6).png";
import  Ima5 from "../../public/images/carslide/Untitled design (7).png";


const CarSlides: React.FC = () => {
  return (
    <div>
        <div style={{ marginTop:"90px", marginBottom:"20px"}}>
       <Carousel>
        <Carousel.Item>
          <Image style={{ height:"350px", width:"100%"}} src={Ima1} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ height:"350px", width:"100%"}} src={Ima2} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ height:"350px", width:"100%"}} src={Ima3} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ height:"350px", width:"100%"}} src={Ima4} alt="Slider 1" />
        </Carousel.Item>
        <Carousel.Item>
          <Image style={{ height:"350px", width:"100%"}} src={Ima5} alt="Slider 1" />
        </Carousel.Item>
      </Carousel> 
    </div>
    </div>
  )
}

export default CarSlides

