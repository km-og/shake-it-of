function Footer() {
  return (
    <footer className="footer" id="contact">
      <a
        href="https://t.me/+icf85-z9liQ2ZTQy"
        target="_blank"
        rel="noreferrer"
        className="footer__link footer__link_type_desktop link"
      >
       Telegram: @shake_your_tits
      </a>

      <nav className="footer__nav">
        <ul className="footer__list">
          <li className="footer__item">
            <a href="/" className="footer__link link">
              Главная
            </a>
          </li>
          <li className="footer__item">
            <a href="/past-events" className="footer__link link">
              Предыдущие мероприятия
            </a>
          </li>
          <li className="footer__item">
            <a href="/aboutUs" className="footer__link link">
              О нас
            </a>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

export default Footer;
