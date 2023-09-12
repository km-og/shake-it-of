import logo from "../../images/logo-without-back.png";

function Footer() {
  return (
    <footer className="footer" id="contact">
      {/* <a href="/" className="footer__link">
        <img className="footer__logo" src={logo} alt="лого" />
      </a> */}
      <a
        href="https://t.me/rastryatits_ka"
        target="_blank"
        rel="noreferrer"
        className="footer__link"
      >
        Telegram: @rastryatits_ka
      </a>
    </footer>
  );
}

export default Footer;
