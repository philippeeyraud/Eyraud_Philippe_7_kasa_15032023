import { useState } from "react";
import arrow from "./../../assets/arrow.png";
import "./index.scss";
function Collapse({ title, text }) {
  const [alternate, setAlternate] = useState(false);

  return (
    <>
      <div className="breakdown">
        <h3
          className="breakdown_title align"
          onClick={() => setAlternate(!alternate)}
        >
          {title}
          <img
            className={alternate ? "arrow_up" : " arrow_down"}
            src={arrow}
            alt=""
          />
        </h3>
        <div className={alternate ? "breakdown_text" : " breakdown_text_out"}>
        {Array.isArray (text)? text.map((item, index) =>{
        return (
        <p key ={index}>{item}</p>
        )
          }):text
          }
        
        
        </div>
      </div>
      
    </>
  );
}

export default Collapse;
