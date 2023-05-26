import { Link } from "react-router-dom";
import './index.scss'

function Card({ id, title,titleOne, cover }) {
  return (
    <Link to={`/housing/${id}`} className="list_apartment ">
      <img src={cover} alt={title} />

      <h3>{title} </h3>
      <h4>{titleOne}</h4>
    </Link>
  );
}

export default Card;
