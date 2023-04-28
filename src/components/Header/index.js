import "./index.scss";
import Logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
import "../../assets/styles/base.scss/base.scss";


function Header() {
     
  const pathName = window.location.path;
  return (
    <header className="align px-20 ">
      <div className="alignflf mt-20">
        <h1>
          <img src={Logo} alt="location appartements" />
        </h1>
      </div>
      <nav>
        <ul className="item ">
          <li
            className={
              pathName === "/" ? "item_article_active" : "item_article"
            }
          >
            <Link to="/">Accueil</Link>
          </li>

          <li
            className={
              pathName === "/about" ? "item_article_active" : "item_article"
            }
          >
            <Link to="/about"> A propos</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default Header;
