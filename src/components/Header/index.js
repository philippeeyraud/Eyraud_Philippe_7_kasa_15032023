
import Logo from "../../assets/logo.png";
import '../../assets/styles/base.scss/base.scss'

function Header() {
  return (
    <header className="align px-20 ">
      <div className="alignflf mt-20">
        <h1>
          <img src={Logo} alt="location immobilier" />
        </h1>
      </div>
      <div>
        <ul className="align text ">
          <li className="mr-20  ">
            <router-link to="/">Accueil</router-link>
          </li>
          <li className="mr-20 ">
            <router-link to="/about">A propos</router-link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
