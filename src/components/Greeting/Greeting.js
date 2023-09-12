import { useState } from "react";

function Greeting() {
  const [visibleText, setVisibleText] = useState(false);
  const [btnHide, setBtnHide] = useState(false);

  function handleClick() {
    setVisibleText(true);
    setBtnHide(true);
  }

  function handleClickHide() {
    setVisibleText(false);
    setBtnHide(false);
  }

  return (
    <section className="greeting">
      <div className="greeting__box">
        <h2 className="greeting__title">Привет!</h2>
        <p className="greeting__text">
          Мы думали, какое из приветствий сюда поставить, но они все банальные
        </p>
      </div>
      <div className="greeting__box">
        {/* здесь можно сделать кнопку сбоку по центру, чтоб скрытый 
        текст выезжал слева направо и закрывал банальное приветсвтие */}
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

        <p
          className={
            visibleText
              ? "greeting__text greeting__text_type_visible"
              : " greeting__text_type_hidden"
          }
        >
          Привет, друг! Представь компанию своих самых душевных друзей и
          близких, среди которых затесалась парочка твоих фанатов и собака
          родственника, которая описалась от радости. Так вот эта компания
          неделю готовила тебе самое трогательное приветствие, после которого у
          тебя ком к горлу подступает. Представил эту хуйню? Ну вот кароче это
          наше тебе приветствие, не благодари
        </p>
      </div>
    </section>
  );
}

export default Greeting;
