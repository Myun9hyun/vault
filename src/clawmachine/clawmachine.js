import React from 'react';
import './clawmachine.css';

function App() {
  return (
    // <div className="wrapper">
    //   <div id="content" className="container">
    //     <h1>아기자기금고</h1>
    //     <h2>금고이벤트에 오신것을 환영합니다!</h2>
    //     <p>각자 닉네임과 숫자를 입력하고, 일정 시간 후에 공개될때, 중복되지 않은 가장 낮은 숫자를 입력 하신 분이 당첨!</p>
    //   </div>
    //   <div id="access" className="container">
    //     <div id="dial" className="dial">
    //       <div className="outer-ring">
    //         <div className="control-knob">
    //           <div className="marker"></div>
    //           <a href="#access" className="click-here">Click Here</a>
    //           <div className="control-knob-recess">
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //     <div id="codes" className="codes">
    //       <DigitsList className="digit-one" />
    //       <DigitsList className="digit-two" />
    //       <DigitsList className="digit-three" />
    //     </div>
    //   </div>
    // </div>
    <div className="claw-machine-container">
    {/* 이미지 컨테이너 */}
    <div className="image-container">
      {/* 외부 이미지를 렌더링합니다. */}
      <img src="https://i.imgur.com/tqp5mSK.png" alt="클로 머신" className="centered-image" />
      {/* 텍스트 */}
      <p className="centered-text">아기자기 금고에 오신것을 환영합니다!</p>
    </div>
    {/* 기타 컴포넌트 내용 */}
  </div>
  );
}

// function DigitsList({ className }) {
//   const digits = Array.from({ length: 30 }, (_, index) => index % 10);

//   return (
//     <ul style={{ "--first-number-position": "-1760px" }} className={className}>
//       {digits.map((digit, index) => (
//         <li key={index}>{digit}</li>
//       ))}
//     </ul>
//   );
// }

export default App;
