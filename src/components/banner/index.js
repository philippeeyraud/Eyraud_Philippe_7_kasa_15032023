import "./index.scss";
import React from "react";
import { useState, useEffect } from "react";
import bannerAcc from "./../../assets/bannerAcc.png";
import bannerAbout from "./../../assets/bannerAbout.png";


function Banner(props) {
  const [bannerImage, setBannerImage] = useState(bannerAcc);
  
  useEffect(() => {
    if (props.currentPath === "/about") {
      setBannerImage(bannerAbout);
    } else {
      setBannerImage(bannerAcc);
    }
  },[props.currentPath]);

return (
<section className='banner_banner'>
  <img src={bannerImage} alt='Banner'/>
</section>

);
}


  
 

export default Banner;
