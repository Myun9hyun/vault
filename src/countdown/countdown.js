import React, { useState, useEffect, useRef } from 'react';
import moment from 'moment-timezone';
import './countdown.css'; // CSS 파일을 import
import Modal from '../modal/Modal'
import ModalWhole from '../modal/Modalwhole'
function Countdown() {
  const [remainingSeconds, setRemainingSeconds] = useState(0);
  const [isVaultOpen, setIsVaultOpen] = useState(false);
  const [vaultOpenTime, setVaultOpenTime] = useState('');

  const timerRef = useRef(null);

  const koreaTime = moment.tz('Asia/Seoul');
  const targetTime = moment.tz('2023-09-16 01:26', 'Asia/Seoul');

  const startCountdown = () => {
    const duration = moment.duration(targetTime.diff(koreaTime));
    const totalSeconds = Math.max(0, Math.floor(duration.asSeconds()));

    setRemainingSeconds(totalSeconds);

    if (totalSeconds === 0) {
      setIsVaultOpen(true);
    } else {
      timerRef.current = setInterval(() => {
        setRemainingSeconds((prevSeconds) => {
          if (prevSeconds > 0) {
            return prevSeconds - 1;
          } else {
            clearInterval(timerRef.current);
            setIsVaultOpen(true);
            return 0;
          }
        });
      }, 1000);
    }
  };

  useEffect(() => {
    startCountdown();
    setVaultOpenTime(targetTime.format('MM월 DD일 HH시 mm분')); // 열리는 시간 정보 설정

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  // ... (이전 코드 부분)

return (
    <div className="countdownHolder">
      {isVaultOpen && <ModalWhole />}
      {isVaultOpen && <Modal />}

      {!isVaultOpen && (
        <div>
          <p>금고는 {vaultOpenTime} 에 열립니다!</p>
         
          {/* 여기에 나머지 카운트다운 요소들을 추가 */}
          <div className="position countDiv">
            <span className="digit">{Math.floor(remainingSeconds / 3600)}</span>
          </div>
          <div className="position countDiv">
            <span className="digit">:</span>
          </div>
          <div className="position countDiv">
            <span className="digit">
              {String(Math.floor((remainingSeconds % 3600) / 60)).padStart(2, '0')}
            </span>
          </div>
          <div className="position countDiv">
            <span className="digit">:</span>
          </div>
          <div className="position countDiv">
            <span className="digit">{String(remainingSeconds % 60).padStart(2, '0')}</span>
          </div>
        </div>
      )}
    </div>
  );
  
}

export default Countdown;
