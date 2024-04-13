// // ServiceSection.tsx
// import Image from 'next/image';
// import React from 'react';
// import img1 from '../../public/images/carousel-bg-1.jpg'
// import img2 from '../../public/images/carousel-1.png';
// import img3 from '../../public/images/carousel-bg-2.jpg'
// import img4 from '../../public/images/carousel-2.png';

// const ServiceSection: React.FC = () => {
//   return (
//     <div className="container-fluid p-0 mb-5">
//     <div id="header-carousel" className="carousel slide" data-bs-ride="carousel">
//         <div className="carousel-inner">
//             <div className="carousel-item active">
//                 <Image className="w-100" src={img1} alt="Image"/>
//                 <div className="carousel-caption d-flex align-items-center">
//                     <div className="container">
//                         <div className="row align-items-center justify-content-center justify-content-lg-start">
//                             <div className="col-10 col-lg-7 text-center text-lg-start">
//                                 <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
//                                 <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Repair Service Center</h1>
//                                 <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
//                             </div>
//                             <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
//                                 <Image className="img-fluid" src={img2} alt=""/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className="carousel-item">
//                 <Image className="w-100" src={img3} alt="Image"/>
//                 <div className="carousel-caption d-flex align-items-center">
//                     <div className="container">
//                         <div className="row align-items-center justify-content-center justify-content-lg-start">
//                             <div className="col-10 col-lg-7 text-center text-lg-start">
//                                 <h6 className="text-white text-uppercase mb-3 animated slideInDown">// Car Servicing //</h6>
//                                 <h1 className="display-3 text-white mb-4 pb-3 animated slideInDown">Qualified Car Wash Service Center</h1>
//                                 <a href="" className="btn btn-primary py-3 px-5 animated slideInDown">Learn More<i className="fa fa-arrow-right ms-3"></i></a>
//                             </div>
//                             <div className="col-lg-5 d-none d-lg-flex animated zoomIn">
//                                 <Image className="img-fluid" src={img4} alt=""/>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//         <button className="carousel-control-prev" type="button" data-bs-target="#header-carousel"
//             data-bs-slide="prev">
//             <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Previous</span>
//         </button>
//         <button className="carousel-control-next" type="button" data-bs-target="#header-carousel"
//             data-bs-slide="next">
//             <span className="carousel-control-next-icon" aria-hidden="true"></span>
//             <span className="visually-hidden">Next</span>
//         </button>
//     </div>
// </div>
//   );
// };

// export default ServiceSection;


"use client"
import React from "react";
import Image from "next/image"; // Import Image from Next.js
import styles from "@/css/Why.module.css"
import CheckCircleIcon from "@material-ui/icons/CheckCircle";

import banner_2 from "../../public/images/banner_2.jpg";
import banner_3 from "../../public/images/banner_3.png";
import banner_4 from "../../public/images/banner_4.png";
import banner_5 from "../../public/images/banner_5.png";

interface Props {}

const WhyUs: React.FC<Props> = () => {
  return (
    <>
        <div className={`${styles.component}`}>
      <div className={`${styles.banner}`}>
        <div>
          <Image src={banner_2} alt="WYPE LOGO" />
        </div>
        <div className={`${styles.banner__contentRight}`}>
          <br /> <br /> <br />
          <h1 className={`${styles.banner__heading}`}>THE BEST CAR SERVICE AWAITS YOU</h1>
          <br />
          <p className={`${styles.banner__para}`}>
            Your Car deserves nothing but the best car repair and services in
            town. Book a seamless car service experience with us.
          </p>
        </div>
      </div>

      <hr />
      <h1 className={`${styles.banner__heading}`}>The Wype Way</h1>
      <h4 className={`${styles.banner__feature}`}>
        CONVENIENT • TRANSPARENT • QUALITY • RELIABLE
      </h4>
      <hr />

      <div className={`${styles.banner}`}>
        <div className={`${styles.banner__contentLeft}`}>
          <h1 className={`${styles.feature__heading}`}>CONVENIENT</h1>
          <br />
          <h4 className={`${styles.feature__subHeading}`}>Let's stay home & stay safe</h4>
          <p className={`${styles.banner__para}`}>
            That's the best thing you can do right now to keep your loved ones
            safe because staying at home every day keeps Corona away.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" />
            Service right at your doorstep.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" /> Online payments. Hassle free
            and safe.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" />
            Fast delivery. We value your time.
          </p>
        </div>
        <div>
          <Image src={banner_3} alt="WYPE LOGO" />
        </div>
      </div>

      <div className={`${styles.banner}`}>
        <div>
          <Image src={banner_4} alt="WYPE LOGO" />
        </div>
        <div className={`${styles.banner__contentRight}`}>
          <h1 className={`${styles.feature__heading}`}>TRANSPARENT</h1>
          <br />
          <h4 className={`${styles.feature__subHeading}`}>
            To let you enjoy your peace of mind
          </h4>
          <p className={`${styles.banner__para}`}>
            We fix even your trust in car service and repair because we have
            built our business on trust.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" />
            Up front pricing.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" /> Service beyond the standards.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" />
            Real time updates.
          </p>
        </div>
      </div>

      <div className={`${styles.banner}`}>
        <div className={`${styles.banner__contentLeft}`}>
          <h1 className={`${styles.feature__heading}`}>QUALITY</h1>
          <br />
          <h4 className={`${styles.feature__subHeading}`}>It's Our responsibility</h4>
          <p className={`${styles.banner__para}`}>
            We are committed to quality and take car care seriously. Top-notch
            service is our main auto motive.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" />
            Skilled technicians.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" /> Genuine spares.
          </p>
          <p className={`${styles.points}`}>
            <CheckCircleIcon color="secondary" />
            Service warranty.
          </p>
        </div>
        <div>
          <Image src={banner_5} alt="WYPE LOGO" />
        </div>
      </div>
    </div>
    </>
  );
};

export default WhyUs;
