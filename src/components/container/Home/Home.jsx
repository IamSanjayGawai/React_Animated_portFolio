import React from 'react'
import portfolio from "../../../assets/MyProfile.png"
import Engineer from "../../../assets/Engineer.jpg"
import UI from "../../../assets/UI.jpg"
import WebDeveloper from "../../../assets/WebDeveloper.jpg"
import "./Home.scss"
import { motion } from 'framer-motion'


const Home = () => {
  const moveVariants = {
    animation: {
      y: [0, -15],
      transition: {
        yoyo: Infinity,
        duration: 2,
        delay: 1
      }

    }
  }


  return (
    <motion.div className="container " id='home'
      initial={{ y: -15, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={
        {
          duration: 2,
          delay: 0.5
        }
      }
    >
      <div className="profile">
        <img src={portfolio} alt="portfolio" style={{height:'100%' }}/>
      </div>
      <div className="profile_text">
        <h3 className='name'>Hi, I'm <span>Sanjay Gawai</span> </h3>
        <span className='job'>MERN Stack Web Developer</span>
        <span className='text'>MERN <br /> Web Developer <br /> </span>
        <motion.a
          href="#contact"
          whileHover={{ scale: 1.1 }}
          variants={moveVariants}
          animate="animation"
        >
         <i class="fa-solid fa-handshake" style={{fontSize:'2rem'}}></i> connect with me</motion.a>
        <div
          className="web"

        >
           <img src={WebDeveloper} style={{height:'110px', width:'120px' , borderRadius:'20%'}} />
       
        </div>
        <div
          className="ui"
        >
           <img src={UI} style={{height:'110px', width:'120px', borderRadius:'20%'}} />
   
        </div>
        <div
          className="Engineer"
        >
          <img src={Engineer} style={{height:'110px', width:'120px', borderRadius:'20%'}} />
       
        </div>
      </div>
    </motion.div>
  )
}

export default Home