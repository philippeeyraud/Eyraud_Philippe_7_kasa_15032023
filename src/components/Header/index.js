import "./index.scss";
import Logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";
import "../../assets/styles/base.scss/base.scss";

function Header() {
  
  return (
    <header>
      <div className="head">
        <h1>
          <img src={Logo} alt="location appartements" />
        </h1>
        <div>
          <nav className="navigation ">
            <ul className="item ">
              <li>
                <NavLink to="/">Accueil</NavLink>
              </li>

              <li>
                <NavLink to="/about"> A Propos</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
export default Header;
