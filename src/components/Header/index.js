import "./index.scss";
import Logo from "../../assets/logo.png";
import "../../assets/styles/base.scss/base.scss";
import { Link } from "react-router-dom";


//<Banner currentPath={props.currentPath} />;


function Header(props) {
     
  const currentPath = window.location.path;
  return (
    <header className="align px-20 ">
      <div className="alignflf mt-20">
        <h1>
          <img src={Logo} alt="location immobilier" />
        </h1>
      </div>
      <nav>
        <ul className="dir_item ">
          <li className={currentPath === "/" ? "dir_item_active" : "dir_item"}>
            <Link to="/">Accueil</Link>
          </li>

          <li
            className={
              currentPath === "/about" ? "dir_item_active" : "dir_item"
            }
          >
            <Link to="/about">A propos</Link>
          </li>
        </ul>
      </nav>
  
    </header>
  );
}
export default Header;
