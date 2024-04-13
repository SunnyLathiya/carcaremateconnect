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
    <div className={`${styles.component}`}>
      <div className={`${styles.banner}`}>
        <div>
          <Image src={banner_2} alt="LOGO" />
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
      <h1 className={`${styles.banner__heading}`}>The CarCareMateConnect Way</h1>
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
  );
};

export default WhyUs;


// "use client"
// import React from 'react';
// import CssBaseline from '@mui/material/CssBaseline';
// import Grid from '@mui/material/Grid';
// import Container from '@mui/material/Container';
// import GitHubIcon from '@mui/icons-material/GitHub';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import XIcon from '@mui/icons-material/X';
// import { createTheme, ThemeProvider } from '@mui/material/styles';
// import MainFeaturedPost from '@/components/why/MainFeaturedPost'; 
// import FeaturedPost from '@/components/why/FeaturedPost'; 
// import Main from '@/components/why/Main';
// import Sidebar from '@/components/why/Sidebar';
// import Footer from '@/components/why/Footer';
// import post1 from '../../public/images/banner_3.png';
// import post2 from '../../public/images/banner_3.png';
// import post3 from '../../public/images/banner_4.png';

// interface Post {
//   title: string;
//   date: string;
//   description: string;
//   image: string;
//   imageLabel: string;
// }

// interface SidebarProps {
//   title: string;
//   description: string;
//   archives: { title: string; url: string }[];
//   social: { name: string; icon: React.ElementType }[];
// }

// interface MainFeaturedPostProps {
//   post: Post;
// }

// interface BlogProps {}

// const sections = [
//   { title: 'Technology', url: '#' },
//   { title: 'Design', url: '#' },
//   { title: 'Culture', url: '#' },
//   { title: 'Business', url: '#' },
//   { title: 'Politics', url: '#' },
//   { title: 'Opinion', url: '#' },
//   { title: 'Science', url: '#' },
//   { title: 'Health', url: '#' },
//   { title: 'Style', url: '#' },
//   { title: 'Travel', url: '#' },
// ];

// const mainFeaturedPost: Post = {
//   title: 'Title of a longer featured blog post',
//   description:
//     "Multiple lines of text that form the lede, informing new readers quickly and efficiently about what's most interesting in this post's contents.",
//   image: 'https://source.unsplash.com/random?wallpapers',
//   imageLabel: 'main image description',
//   date: 'Nov 12', // added to match the Post interface
// };

// const featuredPosts: Post[] = [
//   {
//     title: 'Featured post',
//     date: 'Nov 12',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
//   {
//     title: 'Post title',
//     date: 'Nov 11',
//     description:
//       'This is a wider card with supporting text below as a natural lead-in to additional content.',
//     image: 'https://source.unsplash.com/random?wallpapers',
//     imageLabel: 'Image Text',
//   },
// ];

// const posts = [post1, post2, post3];

// const sidebar: SidebarProps = {
//   title: 'About',
//   description:
//     'Etiam porta sem malesuada magna mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.',
//   archives: [
//     { title: 'March 2020', url: '#' },
//     { title: 'February 2020', url: '#' },
//     { title: 'January 2020', url: '#' },
//     { title: 'November 1999', url: '#' },
//     { title: 'October 1999', url: '#' },
//     { title: 'September 1999', url: '#' },
//     { title: 'August 1999', url: '#' },
//     { title: 'July 1999', url: '#' },
//     { title: 'June 1999', url: '#' },
//     { title: 'May 1999', url: '#' },
//     { title: 'April 1999', url: '#' },
//   ],
//   social: [
//     { name: 'GitHub', icon: GitHubIcon },
//     { name: 'X', icon: XIcon },
//     { name: 'Facebook', icon: FacebookIcon },
//   ],
// };

// const defaultTheme = createTheme();

// const Blog: React.FC<BlogProps> = () => {
//   return (
//     <ThemeProvider theme={defaultTheme}>
//       <CssBaseline />
//       <Container maxWidth="lg">
//         <main>
//           <MainFeaturedPost post={mainFeaturedPost} />
//           <Grid container spacing={4}>
//             {featuredPosts.map((post) => (
//               <FeaturedPost key={post.title} post={post} />
//             ))}
//           </Grid>
//           <Grid container spacing={5} sx={{ mt: 3 }}>
//             <Main title="From the firehose" posts={posts} />
//             <Sidebar
//               title={sidebar.title}
//               description={sidebar.description}
//               archives={sidebar.archives}
//               social={sidebar.social}
//             />
//           </Grid>
//         </main>
//       </Container>
//       <Footer
//         title="Footer"
//         description="Something here to give the footer a purpose!"
//       />
//     </ThemeProvider>
//   );
// };

// export default Blog;

