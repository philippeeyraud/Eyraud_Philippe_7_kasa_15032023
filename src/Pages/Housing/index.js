import Header from "../../components/Header/index";
import Footer from "../../components/Footer";
import Slide from "../../components/Carousel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import list from "../../Data/index";
import Collapse from "../../components/Collapse/index";
import "./index.scss";

import staractive from "../../assets/staractive .png";
import starinactive from "../../assets/starinactive .png";

function Housing() {
  const [imageSlide, setImageSlide] = useState([]);
  const idHousing = useParams("id").id;
  const DataHousing = list.filter((Data) => Data.id === idHousing);

  useEffect(() => {
    const DataHousing = list.filter((Data) => Data.id === idHousing);
    setImageSlide(DataHousing[0].pictures);
  }, [idHousing]);
  const rating = DataHousing[0].rating;
  const name = DataHousing[0].host.name.split(" ");
  const description = DataHousing[0].description;
  const equipments = DataHousing[0].equipments;
  return (
    <div>
      <Header />

      <Slide imageSlide={imageSlide} />
      <main className="housing">
        <div className="housing_box">
          <div className="housing_box_text">
            <h1>{DataHousing[0].title}</h1>
            <p>{DataHousing[0].location}</p>
            <div className="align">
              {DataHousing[0].tags.map((tag, items) => {
                return <button key={items}>{tag}</button>;
              })}
            </div>
          </div>
          <div className="alignc">
            <div className="align">
              {[...Array(5)].map((star, item) => {
                const ratingValue = item + 1;
                return (
                  <img
                    className="stars"
                    key={item}
                    src={ratingValue <= rating ? staractive : starinactive}
                    alt="star"
                  />
                );
              })}
            </div>
            <div className="housing_box_text_host">
              <div className="housing_box_text_host_name">
                <span>{name[0]}</span>
                <span>{name[1]}</span>
              </div>
              <img
                className="picture"
                src={DataHousing[0].host.picture}
                alt="host "
              />
            </div>
          </div>
        </div>
        <div className="housing_box_text_host_breakdown">
          <div className="housing_box_text_host_breakdown_item">
            <Collapse title={"Description"} text={description} />
          </div>

          <div className="housing_box_text_host_breakdown_item">
            <Collapse title={"Equipements"} text={equipments} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Housing;
