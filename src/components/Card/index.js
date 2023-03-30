import { Link } from "react-router-dom";
import './index.scss'

function Card({ id, title, cover }) {
  return (
    <article className ="container">
      <Link to={`/${id}`} className="list_apartment ">
        <img src={cover} alt={title} />
        <h3>{title}</h3>
      </Link>
    </article>
  );
}

export default Card;
