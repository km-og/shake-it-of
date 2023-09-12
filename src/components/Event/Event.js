import loftOne from "../../images/event__loft-one.jpg";
import loftTwo from "../../images/event__loft-two.jpg";
import loftThree from "../../images/event__loft-three.jpg";
import loftFour from "../../images/event__loft-four.jpg";
import loftFive from "../../images/event__loft-five.jpg";
import loftSix from "../../images/event__loft-six.jpg";
import loftSeven from "../../images/event__loft-seven.jpg";

function Event() {
  return (
    <section className="event" id="event">
      <div className="event__container">
        <button
          type="button"
          className="event__arrow event__arrow_type_prev arrow__inactive"
        ></button>
        <div className="event__photos">
          <img
            src={loftOne}
            alt="лофт"
            className="event__img event__img_type_big"
            style={{ order: 0 }}
          />
          <img
            src={loftTwo}
            alt="лофт"
            className="event__img"
            style={{ order: 1 }}
          />
          <img
            src={loftThree}
            alt="лофт"
            className="event__img"
            style={{ order: 2 }}
          />
          <img
            src={loftFour}
            alt="лофт"
            className="event__img"
            style={{ order: 3 }}
          />
          <img
            src={loftFive}
            alt="лофт"
            className="event__img"
            style={{ order: 4 }}
          />
          <img
            src={loftSix}
            alt="лофт"
            className="event__img"
            style={{ order: 5 }}
          />
          <img
            src={loftSeven}
            alt="лофт"
            className="event__img"
            style={{ order: 6 }}
          />
        </div>
        <button
          type="button"
          className="event__arrow event__arrow_type_next"
        ></button>

        <div className="event__texts">
          {/* <p className="event__text">
          Cобытие будет 23 сентября, с 14 до 17 часов. Сняли плюс-минус
          Сняли плюс-минус ебабельный лофт на Бауманской (5мин от метро).
        </p> */}
          <p className="event__text">
            Сняли плюс-минус ебабельный лофт на Бауманской (5мин от метро).
          </p>
          <ul className="event__list">
            <li className="event__item event__text">
              Что можно будет поделать:
            </li>
            <li className="event__item event__text">
              Потребить порцию полезного контента
            </li>
            <li className="event__item event__text">
              Поучаствовать в бомбических активностях (это по желанию)
            </li>
            <li className="event__item event__text">
              Вкусно покушать и прибухнуть (алкоголь свой)
            </li>
            <li className="event__item event__text">Попыхать калик</li>
            <li className="event__item event__text">
              Пообщаться с друзьяшками и завести новых
            </li>
          </ul>
          <p className="event__price event__text">
            Дата: 23 сентября (сб), с 14 до 17 часов
          </p>
          <p className="event__price">Цена: 1500₽</p>
          <a
            href="https://yandex.ru/maps/-/CDQ~eH3T"
            className="event__link link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="event__adress">Адрес: Москва, ул.Бауманская 56/17</p>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Event;
