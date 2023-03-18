import "../../Utils/base.scss";
import Logo from "../../assets/logo.png";
import Navigation from "../../Utils/Navigation";

 function Header() {
  return (
    <header className="d-flex flex-row align-items-center px-20 text">
      <div className="flex-fill d-flex flex-row align-items-center text mt-20">
        <h1>
          <img src={Logo} alt="home, immobilier" />
        </h1>
      </div>
      <Navigation />
    </header>
  );
}
export default Header



