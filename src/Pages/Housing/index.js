import Header from "../../components/Header";
import Footer from "../../components/Footer";
import Slide from "../../components/Carousel";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import list from "../../Data/index";
import './index.scss'

function Housing() {
  const [imageSlide, setImageSlide] = useState([]);
  const idHousing = useParams("id").id;
  const DataHousing = list.filter((Data) => Data.id === idHousing);

  useEffect(() => {
    const DataHousing = list.filter((Data) => Data.id === idHousing);
    setImageSlide(DataHousing[0].pictures);
  }, [idHousing]);

  return (
    <div>
      <Header />

      <Slide imageSlide={imageSlide} />
      <main class="housing">
        <div class="housing_box">
          <div class="housing_box_text">
            <h1>{DataHousing[0].title}</h1>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default Housing;
