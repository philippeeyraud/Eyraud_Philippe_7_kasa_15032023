import './index.scss'
import ArrowForward from "../../assets/arrow_forward_ios-24px .png";
import ArrowBack from "../../assets/arrow_back_ios-24px 1 (1).png";
import {useState} from 'react'

function Slide({ imageSlide }) {
  const [index, setIndex] = useState(0);

  const followSlide = () => {
    setIndex(index + 1);
    if (index === imageSlide.length - 1) setIndex(0);
  };

  const precedSlide = () => {
    setIndex(index - 1);
    if (index === 0) setIndex(imageSlide.length - 1);
  };

    return (
      <section
        style={{ backgroundImage: `url(${imageSlide[index]})` }}
        className="carousel "
      >
        {imageSlide.length > 1 && (
          <>
            <img
              className="carousel_arrow carousel_arrow_forward"
              src={ArrowForward}
              alt="show follow slide"
              onClick={followSlide}
            />
            <img
              className="carousel_arrow carousel_arrow_back"
              src={ArrowBack}
              alt="show preced slide"
              onClick={precedSlide}
            />
            <p className="slideCount">
              {index + 1} / {imageSlide.length}
            </p>
          </>
        )}
      </section>
    );
}
export default Slide;