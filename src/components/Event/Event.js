import Composition from "../Composition/Composition";
import Slider from "../Slider/Slider";

function Event() {
  return (
    <section className="event" id="event">
      <h2 className="event__title">Ближайшее мероприятие</h2>
      <div className="event__container">
        <Slider />
        <div className="event__texts">
          <p className="event__text">
            Сняли большой лофт в 5 минутах от м.Бауманская
          </p>
          {/**/}
          <p className="event__price event__text">
            Дата: 29.10.2023 (вс) 16:40-20:00
          </p>
          <a
            href="https://yandex.ru/maps/-/CDQ~eH3T"
            className="event__link link"
            target="_blank"
            rel="noreferrer"
          >
            <p className="event__adress">Адрес: Москва, ул.Бауманская 56/17</p>
          </a>
          <p className="event__price">Цена: 1500₽</p>
          <div className="event__requisites">
            <p className="event__req">Реквизиты для оплаты:</p>
            <p className="event__req">Михаил Юрьевич Ч.</p>
            <p className="event__req">2202200211209299 (сбер)</p>
          </div>
        </div>
      </div>
      <Composition />
    </section>
  );
}

export default Event;
