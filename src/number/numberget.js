import React, { useState } from 'react';
import Modal from '../modal/Modal';
import ModalWhole from '../modal/Modalwhole';
import Countdown from '../countdown/countdown.js';
import PassInput from '../passinput/passinput.js'; // PassInput 컴포넌트를 import

function NumberGet() {
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handlePasswordCheck = (password) => {
    if (password === '123456') {
      setIsPasswordCorrect(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <div>
      {isPasswordCorrect && !Countdown.isVaultOpen && <ModalWhole />}
      {isPasswordCorrect && !Countdown.isVaultOpen && <Modal />}
      <div style={{ marginBottom: '200px' }}>
        {!isPasswordCorrect && <PassInput onPasswordCheck={handlePasswordCheck} />}
      </div>
      {!isPasswordCorrect && (
        <Countdown
          onVaultOpen={() => {
            // 원하는 동작 수행 (예: 모달 컴포넌트 표시)
          }}
        />
      )}
    </div>
  );
}

export default NumberGet;
