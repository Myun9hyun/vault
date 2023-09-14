import React, { useState } from 'react';
import CocktailLoader from './cockc';

function App() {
  const [userLoadingTime, setUserLoadingTime] = useState(5);
  const [startLoading, setStartLoading] = useState(false);

  const handleUserLoadingTimeChange = (event) => {
    setUserLoadingTime(event.target.value);
  };

  const handleStartLoading = () => {
    setStartLoading(true);
  };

  return (
    <div className="App">
      <label htmlFor="loadingTimeInput">로딩 시간을 입력하세요 (초):</label>
      <input
        type="number"
        id="loadingTimeInput"
        value={userLoadingTime}
        onChange={handleUserLoadingTimeChange}
      />
      <button onClick={handleStartLoading}>시작</button>
      <CocktailLoader loadingTime={userLoadingTime} startLoading={startLoading} />
    </div>
  );
}

export default App;
