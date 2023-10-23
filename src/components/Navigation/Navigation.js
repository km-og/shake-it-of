function Navigation({ handleClick }) {
  return (
    <>
      <div className="navigation">
        <button
          type="button"
          aria-label="Закрыть"
          className="navigation__btn cursor"
          onClick={handleClick}
        ></button>
        <nav>
          <ul className="navigation__list">
            <li className="navigation__item">
              <a
                href="/past-events"
                className="navigation__link link"
                onClick={handleClick}
              >
                Предыдущие мероприятия
              </a>
            </li>
            <li className="navigation__item">
              <a
                href="/aboutUs"
                className="navigation__link link"
                onClick={handleClick}
              >
                О нас
              </a>
            </li>
            {/* <li className="navigation__item">
              <a
                href="#event"
                className="navigation__link link navigation__link_type_active"
                onClick={handleClick}
              >
                О мероприятии
              </a>
            </li> */}
            <li className="navigation__item">
              <a
                href="#contact"
                className="navigation__link link"
                onClick={handleClick}
              >
                Контакты
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}

export default Navigation;
