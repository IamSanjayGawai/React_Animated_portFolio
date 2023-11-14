import React from 'react'
import "./About.scss";

import { motion } from 'framer-motion';
import { bios } from '../../../Data';
import MyProfile from "../../../assets/MyProfile.png"
const About = () => {


  return (
    <div className="container " id='about'>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ y: [-50, 0], opacity: 1 }}
        className="title">
        <span>Who Am I?</span>
        <h1>About Me</h1>
      </motion.div>

      <div className="about_container">
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [-250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
          className="about_left">
          <motion.img src={MyProfile}
            whileHover={{ y: -48, x: -55 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
        <motion.div className="about_right"
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ x: [250, 0], opacity: 1 }}
          transition={{ duration: 1 }}
        >

          <p>Hello I'm <span style={{color:'#8c12f0', fontSize:'1.5rem'}}>Sanjay Gawai</span>
A front-end developer with strong skills in UI, testing, debugging, and system maintenance. 
Currently pursuing a B.Tech in Electronics and Telecommunication, I've also completed a Computer Engineering diploma. <br/>
I specialize in <span style={{color:'#8c12f0', fontSize:'1.5rem'}}>MERN Web Development. </span>
I excel in independent project management and thrive in collaborative teams. 
Let's connect and create exceptional web experiences together.</p>
          {bios.map(bio => {
            return (
              <div className="bio" key={bio.id}>
                <span className='bioKey'>{bio.icon}{bio.key}</span>
                <span className='bioValue'>{bio.value}</span>
              </div>
            )
          })}
          <motion.a href='#' download=""
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Download Resume
          </motion.a>
        </motion.div>

      </div>

    </div>
  )
}

export default About