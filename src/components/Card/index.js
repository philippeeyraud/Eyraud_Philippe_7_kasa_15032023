import { Link } from "react-router-dom";
import './index.scss'

function Card({ id, title, cover }) {
  return (
    <Link to={`/housing/${id}`} className="list_apartment ">
      <img src={cover} alt={title} />
      
        <h3 className= "width">{title}</h3>
    </Link>
  );
}

export default Card;
