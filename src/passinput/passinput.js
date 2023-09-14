import React, { useState } from 'react';
import './passinput.css'; // passinput.css 파일을 import

function PassInput({ onPasswordCheck }) {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleCheckPassword = () => {
    onPasswordCheck(password); // 입력된 비밀번호를 상위 컴포넌트로 전달
  };

  return (
    <div className="wrap">
      <div className="search">
        <input
          type="password"
          className="searchTerm"
          placeholder="비밀번호는 간부진만 알고 있습니다😊"
          value={password}
          onChange={handlePasswordChange}
        />
        <button className="searchButton" onClick={handleCheckPassword}>
          🔎
        </button>
      </div>
    </div>
  );
}

export default PassInput;
