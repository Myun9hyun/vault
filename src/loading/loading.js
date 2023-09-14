import React, { useState } from 'react';
import './loading.css';
import Cockload from './cockload';
// import Cockpercent from './cockpercent'

const LoadingPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false);

  const startLoading = () => {
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsCompleted(true);
    }, Math.floor(Math.random() * 3000) + 3000); // 3~5초 사이의 랜덤한 시간 설정
  };

  const completeLoadingImmediately = () => {
    setIsLoading(false);
    setIsCompleted(true);
  };

  const resetLoading = () => {
    setIsLoading(false);
    setIsCompleted(false);
  };

  const openErrorPopup = () => {
    const errorPopup = document.createElement('div');
    errorPopup.className = 'error-popup';

    const errorMessage = document.createElement('p');
    errorMessage.className = 'error-message';
    errorMessage.textContent = '팝업 창 테스트용';
    errorMessage.style.marginBottom = '50px'; // 추가한 부분
    errorMessage.appendChild(document.createElement('br')); // 줄바꿈 추가
    errorMessage.appendChild(document.createTextNode('두 번째 줄 추가')); // 추가 문구


    const closeButton = document.createElement('button');
    closeButton.className = 'close-button';
    closeButton.textContent = 'X';
    closeButton.addEventListener('click', () => {
      document.body.removeChild(errorPopup);
    });

    errorPopup.appendChild(errorMessage);
    errorPopup.appendChild(closeButton);

    document.body.appendChild(errorPopup);
  };

  return (
    <div className="loading-page">
      <h1>Loading Page</h1>
      {isCompleted ? (
        <div>
          <button onClick={resetLoading}>처음으로 돌아가기</button>
        </div>
      ) : (
        <div>
          {isLoading ? (
            <button onClick={completeLoadingImmediately} disabled={isCompleted}>
              즉시 완료
            </button>
          ) : (
            <button onClick={startLoading} disabled={isLoading || isCompleted}>
              {isLoading ? 'Loading...' : 'Start'}
            </button>
          )}
        </div>
      )}
      {isCompleted && <p className="completed-message">완료!</p>}
      {isLoading && <Cockload />}
      {isCompleted && (
        <div>
          <button onClick={openErrorPopup} className="error-button">팝업창 테스트 버튼</button>
        </div>
      )}
    </div>
  );
};

export default LoadingPage;
