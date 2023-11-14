import { FaGitAlt,  FaNodeJs, FaReact, FaSass, FaFigma, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane, FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTailwindcss ,SiJavascript,SiCsswizardry,SiBootstrap,SiMongodb    } from "react-icons/si";
import { TiHtml5 } from "react-icons/ti";
import { DiJavascript } from "react-icons/di";
import { SiTypescript } from "react-icons/si";
import { BsMedium } from "react-icons/bs";
import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/image_gallary.png";
import work2 from "./assets/youtube-clone.png";
import work3 from "./assets/Portfolio1..png";
import work4 from "./assets/Portfolio2.png";
import work5 from "./assets/buybusy.png";
import work6 from "./assets/resumebuilder.png";
import work7 from "./assets/letsShop.png";
import work8 from "./assets/adminDashboard.png";
import work9 from "./assets/Portfolio3.png";
import { Link } from "react-router-dom";


export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [

 <Link to='https://www.linkedin.com/in/sanjay-gawai-74a6b815b/' ><FaLinkedin /></Link> ,
  <Link to="https://github.com/IamSanjayGawai"><FaGithub /></Link>,
  <FaInstagram />
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Sanjay Gawai"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+91 7720990081"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "sanjaygawai2022@gmail.com"
  }
]

export const icons = [<TiHtml5 />,<SiCsswizardry/>, <SiJavascript />, <SiTypescript />, <FaReact />, <FaNodeJs />,<SiMongodb />, <FaSass />,<SiBootstrap />, <SiTailwindcss />, <FaFigma />, <FaGitAlt />]

export const experiences = [
  {
    id: 1,
    year: "Jun-2023 - Oct-2023",
    position:"SDE-1 Intern",
    company: "Code Inbound LLP"
  },
  {
    di: 2,
    year: "May-2023 - Jun-2023",
    position: "Web Developer Intern",
    company: "PHN Technology Pvt.Ltd"
  },

]


export const educations = [
  {
    id: 1,
    year: "2024",
    degree:"B.Tech in Electronics and Communication Engineering",
    college: "Csmss Chh Shah College of Engineering "
  },
  {
    id: 2,
    year: "2020",
    degree:"Diploma in Computer Engineering",
    college: "Csmss College of Polytechnic "
  },

]

export const certificates = [
  {
    id: 1,
    year: "2023",
    name:"Reactjs Developer",
    platform: "Coding Ninjas "
  },
  {
    id: 1,
    year: "2023",
    name:"Nodejs Developer",
    platform: "Coding Ninjas "
  },
  {
    id: 3,
    year: "2023",
    name:"Frontend Developer",
    platform: "Coding Ninjas "
  },
 

]
export const finishes = [
  {
    id: 1,
    number: '1',
    itemName: "Years Of Experience"
  },
  {
    id: 2,
    number: "6+",
    itemName: "Projects in React"
  },
  {
    id: 3,
    number: "30+",
    itemName: "Repository in GitHub"
  },
  {
    id: 4,
    number: "1k+",
    itemName: "Linkedin Connection"
  }
]
export const workImages = [
  {
    id: 1,
    img: work1,
    name: "Image Gallary",
    category: "web",
    githublink:'https://github.com/IamSanjayGawai/unsplash-imageGallary',
    livelink:'https://unsplash-image-gallary.netlify.app/'

  },
  {
    id: 2,
    img: work3,
    name: "Portfolio1",
    category: "web",
    githublink:'https://github.com/IamSanjayGawai/React_Animated_portFolio',
    livelink:'https://sanjaygawai-portfolio-react.netlify.app/'
  },
  {
    id: 3,
    img: work7,
    name: "Lets SHop",
    category: "web",
    githublink:'https://github.com/IamSanjayGawai/Lets-Shop',
    livelink:'https://lets-shop-webapp.netlify.app/'
    
  },

  {
    id: 4,
    img: work4,
    name: "Portfolio2",
    category: "web",
    githublink:'',
    livelink:'https://sanjaygawai-portfolio.netlify.app/'
  },
  {
    id: 5,
    img: work2,
    name: "Youtube Clone MERN",
    category: "web",
    githublink:'',
    livelink:''
  },
  {
    id: 6,
    img: work5,
    name: "buyBusy",
    category: 'web',
    githublink:'https://github.com/IamSanjayGawai/buybusy-Ecoomerce',
    livelink:'https://buybusy-ecommerce.netlify.app/'
  },
  {
    id: 7,
    img: work6,
    name: "Resume Builder",
    category: "web",
    githublink:'https://github.com/IamSanjayGawai/Resume_Builder_App',
    livelink:'https://iamsanjaygawai.github.io/Resume_Builder_App/'
  },
  {
    id: 8,
    img: work8,
    name: "Admin Dashboard",
    category: "web",
    githublink:'',
    livelink:''
  },
  {
    id: 9,
    img: work9,
    name: "Portfolio3",
    category: "web",
    githublink:'https://github.com/IamSanjayGawai/Portfolio',
    livelink:'https://iamsanjaygawai.github.io/Portfolio/'
  },
]


export const workNavs = [
  "All", "Web", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Maharashtra, India"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "sanjaygawai2022@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 7720990081"
  }
]
