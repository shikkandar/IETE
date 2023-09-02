import React, { useEffect, useRef } from 'react';

export const AboutNum = () => {
  const observer = useRef(null); 
  const countdownContainerRef = useRef(null); 

  const animateNumber = (target, finalValue, duration) => {
    let current = 0;
    const step = (finalValue - current) / (duration / 50);

    const updateNumber = () => {
      if (current <= finalValue) {
        document.getElementById(target).textContent = Math.floor(current);
        current += step;
        setTimeout(updateNumber, 50);
      } else {
        document.getElementById(target).textContent = finalValue ;
      }
    };

    updateNumber();
  };

  const checkIfVisible = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        animateNumber('number7', 12060, 2000);
        animateNumber('number8', 13592, 1500);
        animateNumber('number9', 42, 1000);
        animateNumber('number10', 15, 1800);

        observer.current.unobserve(entry.target);
      }
    });
  };

  useEffect(() => {
    observer.current = new IntersectionObserver(checkIfVisible, {
      root: null,
      rootMargin: '0px',
      threshold: 0.5,
    });

    const countdownContainer = countdownContainerRef.current;
    if (countdownContainer) {
      observer.current.observe(countdownContainer);
    }

    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);

  return (
    <div>
      <div className="num-card-con-2"  ref={countdownContainerRef}>
        <div className="num-card num-card-2">
          <div className="num-con" data-aos='zoom-in-up'>
            <div className="number-field-3"  id="number7">
              0
            </div>
            <div className="num-text2">Students</div>
          </div>
          <div className="num-con" data-aos='zoom-in-up'>
            <div className="number-field-3" id="number8">
              0
            </div>
            <div className="num-text2">Staff</div>
          </div>
          <div className="num-con" data-aos='zoom-in-up'>
            <div className="number-field-3" id="number9">
              0
            </div>
            <div className="num-text2">Events</div>
          </div>
          <div className="num-con" data-aos='zoom-in-up'>
            <div className="number-field-3" id="number10">
              0
            </div>
            <div className="num-text2">Colleges</div>
          </div>
        </div>
      </div>
    </div>
  );
};
