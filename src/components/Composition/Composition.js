import { useState } from "react";
function Composition() {
  const [isClickFirstItem, setIsClickFirstItem] = useState(false);
  const [isClickSecItem, setIsClickSecItem] = useState(false);

  function handleClickFirstItem() {
    isClickFirstItem ? setIsClickFirstItem(false) : setIsClickFirstItem(true);
  }

  function handleClickSecItem() {
    isClickSecItem ? setIsClickSecItem(false) : setIsClickSecItem(true);
  }
  return (
    <>
      <h2 className="composition__title">Что вас ждет?</h2>
      <ul className="composition__list">
        <li className="composition__item" onClick={handleClickFirstItem}>
          <div className="composition__string">
            <p className="composition__text">
              Краткое погружение в темы по саморазвитию
            </p>
            {isClickFirstItem ? (
              <div className="composition__icon composition__icon_type_hide"></div>
            ) : (
              <div className="composition__icon composition__icon_type_show"></div>
            )}
          </div>

          {isClickFirstItem ? (
            <>
              <p className="composition__text">
                Основная тема этой встречи - базовые составляющие для достижения
                долгосрочных целей: самодисциплина, привычки и мотивация,
                которую нужно поднять💪🏽
              </p>
              <p className="composition__text">
                Далее обсудим будущее нашего мероприятия и выберем ключевое
                направление развития: из подготовленного списка тем выделим те,
                которые интересуют большинство. Если у вас есть темы, которые вы
                бы хотели включить в этот список, напишите{" "}
                <a
                  href="https://t.me/shake_your_tits"
                  blank="_target"
                  rel="noreferrer"
                  className="composition__link"
                >
                  нам
                </a>
              </p>
            </>
          ) : (
            ""
          )}
        </li>
        <li className="composition__item" onClick={handleClickSecItem}>
          <div className="composition__string">
            <p className="composition__text">
              Небольшой интерактив в развлекательной части
            </p>
            {isClickSecItem ? (
              <div className="composition__icon composition__icon_type_hide"></div>
            ) : (
              <div className="composition__icon composition__icon_type_show"></div>
            )}
          </div>

          {isClickSecItem ? (
            <p className="composition__text">
              Раз дата встречи совпадает с Хэллуионом - ждём всех в костюмах
              (это по желанию, конечно). В конце сделаем голосование за самый
              лучший!
            </p>
          ) : (
            ""
          )}
        </li>
        <li className="composition__item composition__text">
          Вкусная еда и напитки
        </li>
        <li className="composition__item composition__text">
          Кальянная зона и настолки
        </li>
        <li className="composition__item composition__text">
          Общение со старыми и <s>молодыми</s> новыми друзьями
        </li>
      </ul>
    </>
  );
}

export default Composition;
