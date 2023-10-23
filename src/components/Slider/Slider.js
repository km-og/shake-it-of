import { useState, useEffect } from "react";
import SliderImg from "../SliderImg/SliderImg";
import { photosArr } from "../utils/constants";

function Slider() {
  const [isFirstPhoto, setIsFirstPhoto] = useState(true);
  const [isLastPhoto, setIsLastPhoto] = useState(false);
  const [scrollToTheSign, setScrollToTheSign] = useState(0);
  const [margin, setMargin] = useState({ marginLeft: 0 });

  function scroll(evt) {
    let scrol = scrollToTheSign;

    if (!evt.target.classList.contains("slider__arrow_type_inactive")) {
      setIsFirstPhoto(false);

      evt.target.classList.contains("slider__arrow_type_prev")
        ? (scrol = scrol + 550)
        : (scrol = scrol - 550);

      setScrollToTheSign(scrol);
    }
  }

  useEffect(() => {
    setMargin((prevMargin) => ({
      ...prevMargin,
      marginLeft: scrollToTheSign,
    }));

    if (scrollToTheSign === 0) {
      setIsFirstPhoto(true);
      setIsLastPhoto(false);
    } else if (scrollToTheSign === -3300) {
      setIsLastPhoto(true);
    }
  }, [scrollToTheSign]);

  return (
    <div className="slider">
      <button
        type="button"
        className={`slider__arrow slider__arrow_type_prev ${
          isFirstPhoto ? "slider__arrow_type_inactive" : ""
        }`}
        onClick={scroll}
        // onClick={handleScrollBack}
      ></button>
      <div className="slider__photos">
        <div className="slider__box" style={margin}>
          {photosArr.map((photo) => (
            <SliderImg src={photo.src} key={photo.key} />
          ))}
        </div>
      </div>
      <button
        type="button"
        className={`slider__arrow slider__arrow_type_next ${
          isLastPhoto ? "slider__arrow_type_inactive" : ""
        }`}
        onClick={scroll}
        // onClick={handleScrollForward}
      ></button>
    </div>
  );
}

export default Slider;

// {/* <img
//           src={loftOne}
//           alt="лофт"
//           className="slider__img slider__img_type_big"
//           // style={{ order: 0 }}
//         />
//         <img
//           src={loftTwo}
//           alt="лофт"
//           className="slider__img"
//           // style={{ order: 1 }}
//         />
//         <img
//           src={loftThree}
//           alt="лофт"
//           className="slider__img"
//           // style={{ order: 2 }}
//         />
//         <img
//           src={loftFour}
//           alt="лофт"
//           className="slider__img"
//           // style={{ order: 3 }}
//         />
//         <img
//           src={loftFive}
//           alt="лофт"
//           className="slider__img"
//           // style={{ order: 4 }}
//         />
//         <img
//           src={loftSix}
//           alt="лофт"
//           className="slider__img"
//           // style={{ order: 5 }}
//         />
//         <img
//           src={loftSeven}
//           alt="лофт"
//           className="slider__img"
//           // style={{ order: 6 }}
//         /> */}
