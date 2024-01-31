import React, { useState, useEffect } from 'react';

const Carousel = () => {
    const carouselImages = [
        'https://www.kxan.com/wp-content/uploads/sites/40/2023/11/655bfb97ad3b45.97332785.jpeg',
        'https://tds-images.thedailystar.net/sites/default/files/styles/big_202/public/feature/images/fight_poverty_0.jpg',
        "https://images.pexels.com/photos/2382889/pexels-photo-2382889.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleButtonClick = (index) => {
        setCurrentIndex(index);
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselImages.length);
        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex, carouselImages.length]);

    return (
        <>
            <div className="home-container">
                {carouselImages.map((image, index) => (
                    <img
                        key={index}
                        src={image}
                        alt={`carousel-slide-${index}`}
                        style={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            opacity: index === currentIndex ? 1 : 0,
                            transition: 'opacity 1s ease-in-out'
                        }}
                    />
                ))}
                <div className="home-container-description">
                    <h1 className="home-container-description-text">
                        WOMEN FORGING PATHWAYS OUT OF POVERTY
                    </h1>
                    <a className="home-container-description-button" href="#">
                        DONATE
                    </a>
                </div>
                <div className="carousel-buttons">
                    {carouselImages.map((_, index) => (
                        <button
                            key={index}
                            className={`carousel-button ${index === currentIndex ? 'active' : ''}`}
                            onClick={() => handleButtonClick(index)}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default Carousel;
