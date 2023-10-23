import { useState } from "react";
import imageCat from "../../images/greeting__photo.png";

function Greeting() {
  const [visibleText, setVisibleText] = useState(false);
  const [visibleTextBanal, setVisibleTextBanal] = useState(false);
  const [btnHide, setBtnHide] = useState(false);
  const [btnHideBanal, setBtnHideBanal] = useState(false);

  function handleClick() {
    setVisibleText(true);
    setBtnHide(true);
  }

  function handleClickHide() {
    setVisibleText(false);
    setBtnHide(false);
  }

  function handleClickBanal() {
    setVisibleTextBanal(true);
    setBtnHideBanal(true);
  }

  return (
    <section className="greeting">
      <h2 className="greeting__title">
        Мы думали, какое из приветствий сюда поставить, но они все банальные
      </h2>
      <img src={imageCat} alt="котик" className="greeting__img" />
      <div className="greeting__btns">
        <div className="greeting__box">
          <p
            className={
              visibleTextBanal
                ? "greeting__text greeting__text_type_visible"
                : " greeting__text_type_hidden"
            }
          >
            Привет!
          </p>
          {btnHideBanal ? (
            ""
          ) : (
            <button
              type="button"
              className="greeting__btn cursor"
              onClick={handleClickBanal}
            >
              Банальное
            </button>
          )}
        </div>

        <div className="greeting__box">
          <p
            className={
              visibleText
                ? "greeting__text greeting__text_type_visible"
                : " greeting__text_type_hidden"
            }
          >
            Привет, друг! Представь компанию своих самых душевных друзей и
            близких, среди которых затесалась парочка твоих фанатов и собака
            родственника, которая описалась от радости. Так вот, эта компания
            неделю готовила тебе самое трогательное приветствие, после которого
            у тебя ком к горлу подступает. Представил эту дичь? Ну вот кароче
            это наше тебе приветствие, не благодари
          </p>
          {btnHide ? (
            <button
              type="button"
              className="greeting__btn cursor"
              onClick={handleClickHide}
            >
              Скрой это, пожалуйста
            </button>
          ) : (
            <button
              type="button"
              className="greeting__btn cursor"
              onClick={handleClick}
            >
              Не банальное
            </button>
          )}
        </div>
      </div>
    </section>
  );
}

export default Greeting;
