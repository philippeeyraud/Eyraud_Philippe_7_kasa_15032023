import Header from './../../components/Header'
import Banner from './../../components/Banner'
import './index.scss'
import bannerAbout from "./../../assets/bannerAbout.png";
import Footer from './../../components/Footer'
import React from 'react'

function About() {
return (
  <div>
    <Header />
    <Banner bannerImage={bannerAbout} />;
    <Footer />
  </div>
);    
    }
  
    
  

 
 export default About