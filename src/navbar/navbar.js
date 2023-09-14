import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import ClawMachine from '../clawmachine/clawmachine';
import NumberGet from '../number/numberget';
import NumberInput from '../number/numberinput';
import Chance from '../chance/chance';
import './navbar.css';
import PassInput from '../passinput/passinput'; // PassInput 컴포넌트를 import
import MyNumber from '../mynumber/mynumber'

function Navbar() {
  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const handlePasswordCheck = (enteredPassword) => {
    if (enteredPassword === '1234') {
      setIsPasswordCorrect(true);
    } else {
      alert('비밀번호가 올바르지 않습니다.');
    }
  };

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">홈</Link>
            </li>
            <li>
              <Link to="/input">입력</Link>
            </li>
            <li>
              <Link to="/get">금고결과</Link>
            </li>
            <li>
              <Link to="/chance">기회부여</Link>
            </li>
            <li>
              <Link to="/mynumber">내번호보기</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/input" element={<NumberInput />} />
          <Route path="/get" element={<NumberGet />} />
          <Route path="/" element={<ClawMachine />} />
          <Route path="/mynumber" element={<MyNumber />} />

          {isPasswordCorrect ? (
            <Route path="/chance" element={<Chance />} />
          ) : (
            <Route
              path="/chance"
              element={
                <PassInput onPasswordCheck={handlePasswordCheck} />
              } // PassInput 컴포넌트를 렌더링하고 onPasswordCheck 함수를 전달
            />
          )}
        </Routes>
      </div>
    </Router>
  );
}

export default Navbar;
