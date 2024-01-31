import React from "react";

const Texts = ({ language }) => {
  const getTextsForLanguage = () => {

    switch (language) {

      case "en":
        return {
          paragraph1:
            "One in twelve people live in extreme poverty. It’s a cycle that’s hard to break. But when women thrive the whole community benefits. That’s why we partner with women in extreme poverty. We invest in them and the structures they need to succeed. With training and mentoring, they build sustainable livelihoods and transform their futures.",
          paragraph2: "Women are powerful agents of change.",
          linkText: "HOW WE DO IT >",
        };
        
      case "es":
        return {
          paragraph1:
            "Uno de cada doce personas vive en extrema pobreza. Es un ciclo difícil de romper. Pero cuando las mujeres prosperan, toda la comunidad se beneficia. Por eso nos asociamos con mujeres en extrema pobreza. Invertimos en ellas y en las estructuras que necesitan para tener éxito. Con capacitación y tutoría, construyen medios de vida sostenibles y transforman su futuro.",
          paragraph2: "Las mujeres son poderosas agentes de cambio.",
          linkText: "CÓMO LO HACEMOS >",
        };

      default:
        return {
          paragraph1:
            "One in twelve people live in extreme poverty. It’s a cycle that’s hard to break. But when women thrive the whole community benefits. That’s why we partner with women in extreme poverty. We invest in them and the structures they need to succeed. With training and mentoring, they build sustainable livelihoods and transform their futures.",
          paragraph2: "Women are powerful agents of change.",
          linkText: "HOW WE DO IT >",
        };
    }
  };

  const { paragraph1, paragraph2, linkText } = getTextsForLanguage();

  return (
    <div className="text-body-1">
      <div className="text-body-1-div">
        <p className="text-body-1-p">{paragraph1}</p>
        <p className="text-body-1-p">{paragraph2}</p>
        <a className="text-body-1-a" href="#">
          {linkText}
        </a>
      </div>
    </div>
  );
};

export default Texts;
