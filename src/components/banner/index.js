import "./index.scss";



function Banner(props) {

  return (
    <div className="banner ">
      <img className="banner_img" src={props.bannerImage} alt="Banner" />
      <div className= "banner_text">
        <p className="text-image">{props.bannerTitle}</p>
      </div>
    </div>
  );
}
export default Banner