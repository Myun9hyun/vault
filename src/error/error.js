import React from 'react';
// import { Link } from 'react-router-dom'; // React Router의 Link 컴포넌트를 import합니다.
import './error.css'; // 변경된 CSS 파일을 import 해주세요

function YourComponent() {
  return (
    <div className="center">
      <div className="cocktail-party">
        <h1 className="party">
          ERROR PAGE
        </h1>
        <div className="green-drink">
          <div className="juice"></div>
        </div>
        <div className="martini">
          <div className="glass"></div>
          <div className="olives"></div>
        </div>
        <div className="whiskey"></div>
      </div>
      <button className="home-button">홈으로 돌아가기</button>

      {/* Link 컴포넌트를 사용하여 버튼을 클릭하면 home.js 페이지로 이동하도록 설정합니다. */}
      {/* <Link to="/home" className="home-button">홈으로 돌아가기</Link> */}
    </div>
  );
}

export default YourComponent;
