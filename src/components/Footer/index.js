import "../../components/Footer/index.scss";
import logo from "../../assets/logoF.png";
import Logo from "../../assets/logoFooter.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="log" src={logo} alt="location immobilier" />
     
      <img className="logi" src={Logo} alt="location immobilier" />
    
    </footer>
  );
}
export default Footer;
