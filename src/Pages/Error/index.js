<<<<<<< HEAD
import Header from "../../components/Header";
import { Link } from "react-router-dom";
import "./index.scss";
=======
import Header from '../../components/Header'
import {Link }from 'react-router-dom'
import './index.scss'


>>>>>>> d45fcb3c6a914931fb56d4d41f6cc5651ba43cae

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
