import Header from './../../components/Header'
import Banner from './../../components/Banner'
import './index.scss'
import bannerAbout from "./../../assets/bannerAbout.png";
import Footer from './../../components/Footer'
import listing from './../../DataAbout/index'
import React from 'react'
import Collapse from './../../components/Collapse/index'


function About() {
return (
  <div>
    <Header />
    <Banner bannerImage={bannerAbout} />;
    <main className ='listing'>
{listing.map(data => {

  return (
  <div key={data.id} className='listing_collapse'>
<Collapse  title = { data.title} text = {data.description}/>

  </div>


  )}
)}




    </main>
    <Footer />
  </div>
);    
    }
  
    
  

 
 export default About