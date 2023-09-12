import Promo from "../Promo/Promo";
import Greeting from "../Greeting/Greeting";
import AboutUs from "../AboutUs/AboutUs";
import Event from "../Event/Event";

function Main() {
  return (
    <main className="content">
      <Promo />
      <Greeting />
      <AboutUs />
      <Event />
    </main>
  );
}

export default Main;
