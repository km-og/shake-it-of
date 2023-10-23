// import aboutImg from "../../images/about__img.png";
// import aboutImg from "../../images/about__photo.png";
// import aboutImg from "../../images/about__photo1.png";
// import aboutImg from "../../images/about__photo.png";

function AboutUs() {
  return (
    <section className="about" id="aboutUs">
      <h2 className="about__title">О нас</h2>
      <div className="about__container">
        <div className="about__box">
          <div className="about__img"></div>
          <p className="about__text about__text_type_img">
            *Типа успешная фотка*
          </p>
        </div>
        <div className="about__box">
          <p className="about__text">
            Мы хотим создать пространство, где можно не только полезно провести
            время, но еще и хорошо отдохнуть. По полезному контенту: наполнение
            каждого мероприятия будет уникальным. На каждую встречу мы готовим
            материал, но поделиться знаниями может каждый желающий. Формат
            свободный, главное, чтобы информация была полезной и презентована в
            нескучном формате.
          </p>
          <p className="about__text">
            Остальное время (большая часть) предназначено для отдыха с друзьями
            и новыми знакомыми. Все условия для комфортного времяпровождения мы
            создадим, по сути, все включено на 3 часа меропрятия😀 Можешь смело
            приходить голодным, так как у нас будут вкусная еда и напитки. А еще
            кальян, хороший тамада и конкурсы интересные))
          </p>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
