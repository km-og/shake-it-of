import { useState } from "react";

function PastEvent({ date, title, img, textBriefly, link }) {
  // const [isClick, setIsclick] = useState(false);

  // function handleClickShowMore() {
  //   setIsclick(true);
  // }

  // function handleClickHideDetailed() {
  //   setIsclick(false);
  // }

  return (
    <li className="past-event">
      <img src={img} alt={title} className="past-event__img" />
      <div className="past-event__container">
        <p className="past-event__date">{date}</p>
        <h3 className="past-event__title">{title}</h3>
        <p className="past-event__text">{textBriefly}</p>
        {/* {isClick ? <p className="past-event__text">{textDetailed}</p> : ""} */}
        {/* {isClick ? (
          <button
            type="button"
            className="past-event__btn"
            onClick={handleClickHideDetailed}
          >
            Скрыть
          </button>
        ) : ( */}
        {/* <button
            type="button"
            className="past-event__btn"
            onClick={handleClickShowMore}
          >
            Подробнее
          </button> */}
        <a
          href={link}
          target="_blank"
          rel="noreferrer"
          className="past-event__link"
          // onClick={handleClickShowMore}
        >
          Подробнее в Notion
        </a>
        {/* )} */}
      </div>
    </li>
  );
}

export default PastEvent;
