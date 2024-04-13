// "use client"
// import React from "react";
// import styles from "../../css/Contactus.module.css"
// import { Card, CardContent } from "@material-ui/core";

// const Contact: React.FC = () => {
//   return (
//     <div className={`${styles.container}`}>
//       <h1 className={`${styles.textCenter}`}>We're all ears!</h1>
//       <div className={`${styles.contact_details}`}>
//         <div className={`${styles.row_container}`}>
//           <div className={`${styles.row}`}>
//             <div className={`${styles.column}`}>
//               <Card>
//                 <CardContent>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="200"
//                     height="80"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
//                   </svg>
//                   <h2>Call Us</h2>
//                   <h5>+91 9484 497949</h5>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className={`${styles.column}`}>
//               <Card>
//                 <CardContent>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="200"
//                     height="80"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z" />
//                   </svg>
//                   <h2>Our Office</h2>
//                   <h5>Lanet, Surat</h5>
//                 </CardContent>
//               </Card>
//             </div>
//             <div className={`${styles.column}`}>
//               <Card>
//                 <CardContent>
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="200"
//                     height="80"
//                     viewBox="0 0 24 24"
//                   >
//                     <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
//                   </svg>
//                   <h2>Send Us Mail</h2>
//                   <h5>sunnylathiya7@gmail.com</h5>
//                 </CardContent>
//               </Card>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;


// components/ContactForm.tsx
import React from 'react';
import styles from "@/css/Contactus.module.css"
import '@fortawesome/fontawesome-free/css/all.css';



const ContactPage: React.FC = () => {
  return (
    <>
    <div className={`${styles.container_body}`}>
      <div className={`${styles.body_container}`}>
      <div className={`${styles.container}`}>
      <div className={styles.titleContainer}> {/* Add this container */}
              <h1 className={styles.pageTitle}>Contact Us</h1> {/* Title inside the container */}
            </div>
      <div className={`${styles.content}`}>
        <div className={`${styles.left_side}`}>
          <div className={`${styles.address} ${styles.details}`}>
            <i className="fas fa-map-marker-alt"></i>
            <div className={`${styles.topic}`}>Address</div>
            <div className={`${styles.text_one}`}>406, Luxuria Business Hub</div>
            <div className={`${styles.text_two}`}>Lanet, Surat</div>
          </div>
          <div className={`${styles.phone} ${styles.details}`}>
            <i className="fas fa-phone-alt"></i>
            <div className={`${styles.topic}`}>Phone</div>
            <div className={`${styles.text_one}`}>+91 9484 497949</div>
            <div className={`${styles.text_two}`}>+01 7777 777777</div>
          </div>
          <div className={`${styles.email} ${styles.details}`}>
            <i className="fas fa-envelope"></i>
            <div className={`${styles.topic}`}>Email</div>
            <div className={`${styles.text_one}`}>carcaremateconnect7@gmail.com</div>
            <div className={`${styles.text_two}`}>sunnylathiya701@gmail.com</div>
          </div>
        </div>
        <div className={`${styles.right_side}`}>
      <div className={`${styles.topic_text}`}>Send us a message</div>
      <p>If you have any work from me or any types of queries related to our website, you can send me a message from here. It's my pleasure to help you.</p>
      <form action="#">
        <div className={`${styles.input_box}`}>
          <input type="text" placeholder="Enter your name" />
        </div>
        <div className={`${styles.input_box}`}>
          <input type="text" placeholder="Enter your email" />
        </div>
        <div className={`${styles.input_box} ${styles.message_box}`}>
          <textarea placeholder="Enter your message" />
        </div>
        <div className={`${styles.button}`}>
          <input type="button" value="Send Now" />
        </div>
      </form>
    </div>
      </div>
    </div>

      </div>
    </div>
    </>
  );
};

export default ContactPage;
