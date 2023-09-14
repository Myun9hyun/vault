import React, { useState, useEffect } from 'react';
import axios from 'axios';

function MyNumber() {
  const [nickname, setNickname] = useState('');
  const [passnumber, setPassnumber] = useState('');
  const [searchResult, setSearchResult] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const handleNicknameChange = (e) => {
    setNickname(e.target.value);
  };

  const handlePassnumberChange = (e) => {
    setPassnumber(e.target.value);
  };

  const searchNumber = () => {
    axios
      .get(`http://localhost:8080/api/numbers/list`)
      .then((response) => {
        const data = response.data;
        // Filter the data based on both nickname and passnumber
        const filteredData = data.filter(
          (item) => item.nickname === nickname && item.passnumber.toString() === passnumber
        );
        setSearchResult(filteredData);
        setShowAlert(filteredData.length === 0);
        console.log('검색 결과:', filteredData);
      })
      .catch((error) => {
        console.error('Error searching number:', error);
      });
  };

  return (
    <div>
      <h2>내 번호 조회</h2>
      <div>
        <label>닉네임:</label>
        <input type="text" value={nickname} onChange={handleNicknameChange} />
      </div>
      <div>
        <label>개인번호:</label>
        <input type="password" value={passnumber} onChange={handlePassnumberChange} />
      </div>
      <button onClick={searchNumber}>조회</button>

      {showAlert && (
        <div>
          <p>닉네임 혹은 개인번호를 다시 입력해주세요!</p>
        </div>
      )}

      {searchResult.length > 0 ? (
        <div>
          <h3>검색 결과:</h3>
          {searchResult.map((result) => (
            <div key={result.id}>
              <p>닉네임: {result.nickname}, 내번호: {result.number}</p>
            </div>
          ))}
        </div>
      ) : (
        <div>
          <p>검색 결과가 없습니다.</p>
        </div>
      )}
    </div>
  );
}

export default MyNumber;
