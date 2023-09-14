import React, { useState, useEffect } from 'react';
import './Modal.css'; // 스타일 파일을 임포트하세요
import axios from 'axios';

function Modal() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState(null); // 모달 데이터 관리

  useEffect(() => {
    // 모달이 처음 열릴 때 최저 숫자 데이터를 가져옵니다.
    const getMinNumber = async () => {
      try {
        // 데이터를 조회하고 data 상태에 저장
        const response = await axios.get('http://localhost:8080/api/numbers/min');
        setData(response.data);
        
        // 모달 열기
        setIsModalOpen(true);
      } catch (error) {
        console.error('Error fetching min number:', error);
      }
    };

    getMinNumber();
  }, []); // 빈 배열을 전달하여 한 번만 실행되도록 설정

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleModalClick = () => {
    closeModal();
  };

  const handleContentClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div className='modal-page'>
      <div className="page">
        <div className="page__container">
          {/* 모달 버튼 클릭 시 최저 숫자 조회 함수 호출 */}
          <a href="#min-data" className="open-popup">
            금고결과확인
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div
          id="min-data"
          className="popup"
          onClick={handleModalClick}
        >
          <div className="popup__container">
            <a href="" className="popup__close" onClick={closeModal}>
              <span className="screen-reader">close</span>
            </a>
            <div className="popup__content" onClick={handleContentClick}>
              <h1 className="popup__title r-title">금고 결과!!!</h1>
              <p className="popup__text">
                {data && (
                  <div>
                    <p className="popup__text">최저 숫자: {data.number}</p>
                    <p className="popup__text">입력한 닉네임: {data.nickname}</p>
                    <p className="popup__text">입력 시간: {data.time}</p>
                  </div>
                )}
              </p>
            </div>
        
          </div>
        </div>
      )}
    </div>
  );
}

export default Modal;
