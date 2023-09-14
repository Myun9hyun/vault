import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './chance.css';

function NumberInput() {
  const [nickname, setNickname] = useState('');
  const [chance, setChance] = useState(0);
  const [number, setNumber] = useState('');

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleChanceChange = (e) => {
    setChance(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const saveChance = () => {
    const data = {
      nickname: nickname,
      chance: chance,
      number: number,
    };

    axios
      .post('http://localhost:8080/api/chances/save', data)
      .then((response) => {
        console.log('Chance saved:', response.data);
        alert('기회가 저장되었습니다!');
        // 저장 후 입력 필드 초기화 또는 다른 작업 수행
        setNickname('');
        setChance(0);
        setNumber('');
      })
      .catch((error) => {
        console.error('Error saving chance:', error);
      });
  };

  return (
    <div className="login-box">
      <h2>금고 기회 부여</h2>
      <form>
        <div className="user-box">
          <input
            type="text"
            placeholder="Nickname"
            value={nickname}
            onChange={handleNicknameChange}
          />
          <label>Nickname</label>
        </div>
        <div className="user-box">
          <input
            type="number"
            placeholder="Remaining Chances"
            value={chance}
            onChange={handleChanceChange}
          />
          <label>기회 부여</label>
        </div>
        
        <a onClick={saveChance}>Save Chance</a>
      </form>
    </div>
  );
}

export default NumberInput;
