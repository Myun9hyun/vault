import React, { useState, useEffect } from 'react';
import './cockpercent.css'; // 필요한 스타일 시트를 불러오세요

function CocktailLoader() {
  const [loaded, setLoaded] = useState(0);

  function increment() {
    const drinkTop = (100 - loaded * 0.9) + '%';
    let cubesOpacity = [0, 0, 0];
    
    if (loaded >= 25) cubesOpacity[0] = 1;
    if (loaded >= 50) cubesOpacity[1] = 1;
    if (loaded >= 75) cubesOpacity[2] = 1;

    return (
      <div id="loader">
        <div id="lemon" style={{ display: loaded === 100 ? 'block' : 'none' }}></div>
        <div id="straw" style={{ display: loaded === 100 ? 'block' : 'none' }}></div>
        <div id="glass">
          <div id="cubes">
            <div style={{ opacity: cubesOpacity[0] }}></div>
            <div style={{ opacity: cubesOpacity[1] }}></div>
            <div style={{ opacity: cubesOpacity[2] }}></div>
          </div>
          <div id="drink" style={{ top: drinkTop }}></div>
          <span id="counter">{loaded}%</span>
        </div>
        <div id="coaster"></div>
      </div>
    );
  }

  useEffect(() => {
    let interval;

    function startLoading() {
      setLoaded(0);
      interval = setInterval(worker, 30);
    }

    function stopLoading() {
      clearInterval(interval);
    }

    function worker() {
      if (loaded < 100) {
        setLoaded((prevLoaded) => Math.min(prevLoaded + 1, 100)); // 최대값을 100으로 제한
      } else {
        stopLoading();
      }
    }

    startLoading();

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      {increment()}
      <footer>Please wait while<br />we fill up your glass...</footer>
    </div>
  );
}

export default CocktailLoader;
