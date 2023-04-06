import "./index.scss";
import Logo from "../../assets/logo.png";
import "../../assets/styles/base.scss/base.scss";

function Header() {
  const currentPage = window.location.pathname;
  return (
    <header className="align px-20 ">
      <div className="alignflf mt-20">
        <h1>
          <img src={Logo} alt="location immobilier" />
        </h1>
      </div>
      <div>
        <ul className="dir_item ">
          <li className={currentPage === "/" ? "dir_item_active" : "dir_item"}>
            <router-link to="/">Accueil</router-link>
          </li>

          <li
            className={
              currentPage === "/about" ? "dir_item_active" : "dir_item"
            }
          >
            <router-link to="/about">A propos</router-link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
