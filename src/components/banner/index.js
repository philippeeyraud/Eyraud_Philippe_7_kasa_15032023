import './index.scss'
import Logo from "../../assets/bannerAccueil.png";
import text from "../../assets/textAccueil.png";

function Banner() {
   
  return (
    <section className="alignflf text ">
      <banner className=" align p-50 ">
        <img
          className="banner-logoacc "
          src={Logo}
          alt="location immobilier"
        />
        <p>
         
          <img className=" text-banner" src={text} alt="location immobilier" />
        </p>
      </banner>
    </section>
  );
}

export default Banner;
