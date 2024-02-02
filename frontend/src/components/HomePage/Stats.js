import React from "react";
import { useLanguage } from "../LanguageSwitcher/LanguageContext";
import NumberIncrementAnimation from "./numberAnimation";

const Stats = ({ setStatToSpeak }) => {
  const { selectedLanguage } = useLanguage();

  const statsTexts = {
    en: {
      header: "OUR IMPACT",
      livesReached: "LIVES REACHED SINCE 1979",
      participantsSince: "PARTICIPANT SINCE 1979",
      agencyAndDecisionMaking:
        "OF PARTICIPANTS EXPERIENCED INCREASED AGENCY AND DECISION-MAKING POWER",
      savings:
        "OF PARTICIPANTS CONTINUE TO SAVE FOR THEIR BUSINESS, CHILDCARE, AND LIFE IMPROVEMENT",
      foodSecurity:
        "OF PARTICIPANTS ATTAIN FOOD SECURITY FOR THEMSELVES AND THEIR FAMILY",
    },
    es: {
      header: "NUESTRO IMPACTO",
      livesReached: "VIDAS ALCANZADAS DESDE 1979",
      participantsSince: "PARTICIPANTES DESDE 1979",
      agencyAndDecisionMaking:
        "DEL TOTAL DE PARTICIPANTES, AUMENTÓ SU AGENCIA Y PODER DE TOMA DE DECISIONES",
      savings:
        "DEL TOTAL DE PARTICIPANTES, SIGUEN AHORRANDO PARA SU NEGOCIO, CUIDADO DE NIÑOS Y MEJORA DE VIDA",
      foodSecurity:
        "DEL TOTAL DE PARTICIPANTES, ALCANZÓ LA SEGURIDAD ALIMENTARIA PARA ELLOS Y SU FAMILIA",
    },
  };

    const generateStatsText = () => {
      const statsContent = statsTexts[selectedLanguage];
      const statsText = `${statsContent.header}. ${statsContent.livesReached}: 2.3 million. ${statsContent.participantsSince}: 465 million. ${statsContent.agencyAndDecisionMaking}: 82%. ${statsContent.savings}: 95%. ${statsContent.foodSecurity}: 82%.`;
      return statsText;
    };

    React.useEffect(() => {
      setStatToSpeak(generateStatsText());
    }, [selectedLanguage, setStatToSpeak]);


  return (
    <>
      <div className="stat-container">
        <div className="stat-container-header">
          <h2>{statsTexts[selectedLanguage].header}</h2>
        </div>
        <div className="stat-containers">
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={2.3} duration={700} />
              <span> M</span>
            </p>
            <h3 className="year">
              {statsTexts[selectedLanguage].livesReached}
            </h3>
          </div>
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={465} duration={1000} />
              <span> M</span>
            </p>
            <h3 className="year">
              {statsTexts[selectedLanguage].participantsSince}
            </h3>
          </div>
        </div>
        <div className="stat-containers">
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={82} duration={1000} />
              <span>%</span>
            </p>
            <h3 className="year">
              {statsTexts[selectedLanguage].agencyAndDecisionMaking}
            </h3>
          </div>
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={95} duration={1000} />
              <span>%</span>
            </p>
            <h3 className="year">{statsTexts[selectedLanguage].savings}</h3>
          </div>
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={82} duration={1000} />
              <span>%</span>
            </p>
            <h3 className="year">
              {statsTexts[selectedLanguage].foodSecurity}
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
