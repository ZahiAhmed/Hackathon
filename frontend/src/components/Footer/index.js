import "./index.css";
import Icon from "../../svg/icon.js";
import Subscribe from "./Subcribe";
const Footer = () => {

  return (
    <div className="section5">
      <div className="footer-container">
        <div className="row-1">
          <div>
            <h2 className="row-1-header">JOIN OUR COMMUNITY!</h2>
            <Icon />
          </div>
          <Subscribe></Subscribe>
        </div>
        <div className="row-3">
          <h4 className="trademark">© 2023 All rights reserved</h4>
        </div>
      </div>
    </div>
  );
};

export default Footer;
