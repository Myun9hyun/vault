import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './numberinput.css';

function NumberInput() {
  const [nickname, setNickname] = useState('');
  const [number, setNumber] = useState('');
  const [passnumber, setPassnumber] = useState(''); // 개인번호 추가
  const [remainingChances, setRemainingChances] = useState(0);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handleNumberChange = (e) => {
    setNumber(e.target.value);
  };

  const handlePassnumberChange = (e) => { // 개인번호 입력 처리 함수 추가
    setPassnumber(e.target.value);
  };

  const saveNumber = () => {
    const data = {
      nickname: nickname,
      number: number,
      passnumber: passnumber, // 개인번호 추가
      time: new Date().toISOString(),
    };

    if (remainingChances <= 0) {
      alert('남은 기회가 없습니다.');
      return;
    }

    axios
      .post('http://localhost:8080/api/numbers/save', data)
      .then((response) => {
        console.log('Number saved:', response.data);
        alert('저장이 완료되었습니다!');
        fetchRemainingChances();
      })
      .catch((error) => {
        console.error('Error saving number:', error);
      });
  };

  const fetchRemainingChances = () => {
    axios
      .get('http://localhost:8080/api/chances/list')
      .then((response) => {
        const chancesData = response.data;
        const userChances = chancesData.find((chance) => chance.nickname === nickname);
        if (userChances) {
          setRemainingChances(userChances.chance);
        }
      })
      .catch((error) => {
        console.error('Error fetching remaining chances:', error);
      });
  };

  useEffect(() => {
    fetchRemainingChances();
  }, [nickname]);

  return (
    <div className="login-box">
      <h2>아기자기 비밀금고</h2>
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
            placeholder="Number"
            value={number}
            onChange={handleNumberChange}
          />
          <label>Number</label>
        </div>
        <div className="user-box"> {/* 개인번호 입력란 */}
          <input
            type="password"
            placeholder="Passnumber"
            value={passnumber}
            onChange={handlePassnumberChange}
          />
          <label>Passnumber</label>
        </div>
        <p>남은 기회: {remainingChances}</p>
        <a onClick={saveNumber}>Save Number</a>
      </form>
    </div>
  );
}

export default NumberInput;
