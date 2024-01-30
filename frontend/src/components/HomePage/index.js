import Video from "./Video";
import Stats from "./Stats";
import Texts from "./Texts";
import Carousel from "./Carousel";
import "./index.css"

const HomePage = () => {

  return (
    <div>
      <Carousel/>
      <Texts/>
      <Stats/>
      <Video/>
      <div className="newsletter-container">
          <h2 className="stat-container-header">STAY CONNECTED!</h2>
          <a className="text-body-1-a ">JOIN OUR NEWSLETTER {`>`}</a>
      </div>
    </div>
  );
};

export default HomePage;