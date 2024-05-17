import { useState } from "react";
import arrowPrevious from "../../../../assets/arrow-previous.png";
import arrowNext from "../../../../assets/arrow-next.png";
import style from "./Slider.module.scss";

type PropsType = {
  pictures: string[] | string;
};

type Direction = "next" | "previous";

function Slider({ pictures }: PropsType) {
  const [currentPicture, setCurrentPicture] = useState(0);

  const changeSlide = (direction: Direction) => {
    if (direction === "previous" && currentPicture === 0) {
      setCurrentPicture(pictures.length - 1);
    } else if (direction === "previous") {
      setCurrentPicture(currentPicture - 1);
    }

    if (direction === "next" && currentPicture === pictures.length - 1) {
      setCurrentPicture(0);
    } else if (direction === "next") {
      setCurrentPicture(currentPicture + 1);
    }
  };

  const previousIcon = (
    <div
      className={style.sliderArrow}
      id="arrow-previous"
      onClick={() => changeSlide("previous")}
    >
      <img src={arrowPrevious} alt="Flèche pour voir l'image précédente" />
    </div>
  );

  const nextIcon = (
    <div
      className={style.sliderArrow}
      id="arrow-next"
      onClick={() => changeSlide("next")}
    >
      <img src={arrowNext} alt="Flèche pour voir l'image précédente" />
    </div>
  );

  const slideCount = (
    <div id={style.slideCount}>
      {currentPicture + 1} / {pictures.length}
    </div>
  );

  return (
    <div id={style.slider}>
      {pictures.length > 1 && previousIcon}

      <div className={style.slide}>
        <img src={pictures[currentPicture]} />
        {pictures.length > 1 && slideCount}
      </div>

      {pictures.length > 1 && nextIcon}
    </div>
  );
}

export default Slider;
