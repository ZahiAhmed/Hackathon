import NumberIncrementAnimation from "./numberAnimation";

const Stats = () => {
  return (
    <>
      <div className="stat-container">
        <div className="stat-container-header">
          <h2>OUR IMPACT</h2>
        </div>
        <div className="stat-containers">
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={2.3} duration={700} />
              <span> M</span>
            </p>
            <h3 className="year">LIVES REACHED SINCE 1979</h3>
          </div>
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={465} duration={1000} />
              <span> M</span>
            </p>
            <h3 className="year">PARTICIPANT SINCE 1979</h3>
          </div>
        </div>
        <div className="stat-containers">
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={82} duration={1000} />
              <span>%</span>
            </p>
            <h3 className="year">
              OF PARTICIPANTS EXPERIENCED INCREASED AGENCY AND DECISION-MAKING
              POWER
            </h3>
          </div>
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={95} duration={1000} />
              <span>%</span>
            </p>
            <h3 className="year">
              OF PARTICIPANTS CONTINUE TO SAVE FOR THEIR BUSINESS, CHILDCARE,
              AND LIFE IMPROVEMENT
            </h3>
          </div>
          <div>
            <p className="number">
              <NumberIncrementAnimation targetNumber={82} duration={1000} />
              <span>%</span>
            </p>
            <h3 className="year">
              OF PARTICIPANTS ATTAIN FOOD SECURITY FOR THEMSELVES AND THEIR
              FAMILY
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Stats;
