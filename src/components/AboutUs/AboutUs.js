import aboutImg from "../../images/about__img.png";

function AboutUs() {
  return (
    <section className="about" id="aboutUs">
      <img className="about__img" src={aboutImg} alt="Миша и Инесса" />
      <div className="about__box">
        <h2 className="about__title">О задумке</h2>
        <p className="about__text">
          Тут все довольно просто: развиваться и отдыхать вместе можно намного
          качественнее и интереснее. Так зачем возиться в одиночку, если есть
          возможность собрать круг заряженных единомышленников? Тем более, что
          нам в кайф делиться чем-то реально полезным с другими.
        </p>
        <p className="about__text">
          Что тут называется развитием? Это важный вопрос, так как это ключевая
          цель сообщества и наша трактовка может отличаться от вашей. Какой
          конкретно это процесс, для нас не особенно важно, важен результат -
          качество жизни человека улучшилось.
        </p>
      </div>
    </section>
  );
}

export default AboutUs;
