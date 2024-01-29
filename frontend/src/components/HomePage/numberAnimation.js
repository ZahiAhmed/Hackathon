// NumberIncrementAnimation.js
import React, { useState, useEffect, useRef } from 'react';

const NumberIncrementAnimation = ({ targetNumber, duration }) => {
  const startNumber = 0;
  const increment = (targetNumber - startNumber) / duration;

  const [currentNumber, setCurrentNumber] = useState(startNumber);
  const [isVisible, setIsVisible] = useState(false);
  const numberRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 } // Adjust the threshold as needed
    );

    if (numberRef.current) {
      observer.observe(numberRef.current);
    }

    return () => {
      if (numberRef.current) {
        observer.unobserve(numberRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      const startTime = Date.now();
      setCurrentNumber(startNumber); // Reset the currentNumber when becoming visible

      function updateNumber() {
        const elapsedTime = Date.now() - startTime;

        if (elapsedTime < duration) {
          const newNumber = startNumber + increment * elapsedTime;
          setCurrentNumber(Math.round(newNumber));
          requestAnimationFrame(updateNumber);
        } else {
          setCurrentNumber(targetNumber);
        }
      }

      updateNumber(); // Start the animation
    }
  }, [isVisible, duration, increment, startNumber, targetNumber]);

  return (
    <span ref={numberRef}>
      {currentNumber}
    </span>
  );
};

export default NumberIncrementAnimation;
