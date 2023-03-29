import "../../components/Footer/index.scss";
import logo from "../../assets/Footer.png";


function Footer() {
  return (
    <footer className="footer">
      <img className= "height-2" src={logo} alt="location immobilier" />
    </footer>
  );
}
export default Footer;