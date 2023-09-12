import logo from "../../images/logo-without-back.png";
import { useState } from "react";
import Navigation from "../Navigation/Navigation";

function Header() {
  const [isNavigationMenu, setIsNavigationMenu] = useState(false);

  function handleNavigationMenuShow() {
    setIsNavigationMenu(true);
  }

  function handleNavigationMenuHide() {
    setIsNavigationMenu(false);
  }
  return (
    <header className="header">
      <a href="/" className="header__link link">
        <img className="header__logo" src={logo} alt="логотип" />
      </a>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">
            <a href="#aboutUs" className="header__link link">
              О нас
            </a>
          </li>
          <li className="header__item">
            <a href="#event" className="header__link link">
              О мероприятии
            </a>
          </li>
          <li className="header__item">
            <a href="#contact" className="header__link link">
              Контакты
            </a>
          </li>
        </ul>
      </nav>
      <div
        className="header__menu cursor"
        onClick={handleNavigationMenuShow}
      ></div>
      {isNavigationMenu ? (
        <Navigation handleClick={handleNavigationMenuHide} />
      ) : (
        ""
      )}
    </header>
  );
}

export default Header;
