import "./index.scss";



function Banner(props) {
 

  return(
    <div className="banner ">
      <img className="banner_img" src={props.bannerImage} alt="Banner" />
      <p className="banner_text-banner">
        <img src={props} alt="text" />
     </p>
    </div>
 
  );
}
export default Banner