import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./index.scss";

function Error() {
  return (
    <div>
      <Header />
      <div className="errorpage">
        <div className="errorpage_news">
          <h2>404</h2>
          <p className="texterror">
            Oups ! La page que vous demandez n'existe pas.
          </p>
          <Link className="returnaccueil" to="/">
            Retourner sur la page d'accueil
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Error;
