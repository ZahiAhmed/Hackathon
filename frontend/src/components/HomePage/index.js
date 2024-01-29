import "./index.css"
import NumberIncrementAnimation from "./numberAnimation";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Slider from 'react-slick';

const HomePage = () => {
    const carouselImages = [
        'https://www.kxan.com/wp-content/uploads/sites/40/2023/11/655bfb97ad3b45.97332785.jpeg',
        'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/fight_poverty_0.jpg'
    ];

  const carouselSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };

  return (
    <>
    <div className="home-container">
      <Slider {...carouselSettings}>
        {carouselImages.map((image, index) => (
          <div key={index}>
            <img src={image} alt={`carousel-slide-${index}`} />
          </div>
        ))}
      </Slider>
      <div className="home-container-description">
        <h1 className="home-container-description-text">
          WOMEN FORGING PATHWAYS OUT OF POVERTY
        </h1>
        <a className="home-container-description-button" href="#">
          DONATE
        </a>
      </div>
    </div>

    <div className="text-body-1">
        <div className="text-body-1-div">
            <p className="text-body-1-p">
                One in twelve people live in extreme poverty. 
                It’s a cycle that’s hard to break. 
                But when women thrive the whole community benefits. 
                That’s why we partner with women in extreme poverty. We invest in them and the structures they need to succeed. With training and mentoring, 
                they build sustainable livelihoods and transform their futures.
            </p>
            <p className="text-body-1-p">Women are powerful agents of change.</p>

            <a className= "text-body-1-a"href="#">HOW WE DO IT {`>`}</a>
        </div>
    </div>

    <div className="stat-container">
        <div className='stat-container-header'>
            <h2>OUR IMPACT</h2>
        </div>
        <div className='stat-containers'>
            <div>
                <p className='number'><NumberIncrementAnimation targetNumber={2.3} duration={700}/><span>M</span></p>
                <h3 className="year">LIVES REACHED SINCE 1979</h3>
            </div>
            <div>
                <p className='number'><NumberIncrementAnimation targetNumber={465} duration={1000}/><span>M</span></p>
                <h3 className="year">PARTICIPANT SINCE 1979</h3>
            </div>
        </div>
        <div className='stat-containers'>
            <div>
                <p className='number'><NumberIncrementAnimation targetNumber={82} duration={1000}/><span>%</span></p>
                <h3 className="year">OF PARTICIPANTS EXPERIENCED INCREASED AGENCY AND DECISION-MAKING POWER</h3>
            </div>
            <div>
                <p className='number'><NumberIncrementAnimation targetNumber={95} duration={1000}/><span>%</span></p>
                <h3 className="year">OF PARTICIPANTS CONTINUE TO SAVE FOR THEIR BUSINESS, CHILDCARE, AND LIFE IMPROVEMENT</h3>
            </div>
            <div>
                <p className='number'><NumberIncrementAnimation targetNumber={82} duration={1000}/><span>%</span></p>
                <h3 className="year">OF PARTICIPANTS ATTAIN FOOD SECURITY FOR THEMSELVES AND THEIR FAMILY</h3>
            </div>
        </div>
    </div>
    

    <div className="video-container">
      <iframe
        width="1080"
        height="604"
        src="https://www.youtube.com/embed/2iTZipttfJM"
        title="YouTube Video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>

    <div className="newsletter-container">
        <h2 className="stat-container-header">STAY CONNECTED!</h2>
        <a className="text-body-1-a ">JOIN OUR NEWSLETTER {`>`}</a>
    </div>
    </>
  );
};

export default HomePage;