import Header from '../../components/Header'
import {Link }from 'react-router-dom'
import './index.scss'
import Four from './../../assets/Four.png'
import RetourAccueil from './../../assets/RetourAccueil.png'
import text404 from "./../../assets/text404.png";


function Error() {
    return (
      <div>
        <Header />
        <div className="errorpage">
          <div className="errorpage_news">
            <h1>
              <img src={Four} alt="error" />
            </h1>
            <p>
              <img src={text404} alt="texterror" />
            </p>
            <Link className="returnAccueil mt-30" to="/">
              <img src={RetourAccueil} alt="text retour" />
            </Link>
          </div>
        </div>
      </div>
    );
}
export default Error;