import "./index.scss";



function Banner(props) {
 

  return(
    <div className="banner ">
      <img className="banner_img" src={props.bannerImage} alt="Banner" />
    </div>
 
  );
}
export default Banner