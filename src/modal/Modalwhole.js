import React, { useState, useEffect } from 'react';
import './Modalwhole.css'; // 스타일 파일을 임포트하세요
import axios from 'axios';

function Modalwhole() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [data, setData] = useState([]); // 모달 데이터 관리

  // 전체 데이터 조회 함수
  const getAllNumbers = async () => {
    try {
      // 데이터를 조회하고 data 상태에 저장
      const response = await axios.get('http://localhost:8080/api/numbers/list');
      setData(response.data);
      
      // 모달 열기
      setIsModalOpen(true);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    // 페이지가 로드될 때 자동으로 데이터 조회
    getAllNumbers();
  }, []);

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
          {/* 모달 버튼 클릭 시 전체 데이터 조회 함수 호출 */}
          <a href="#whole-data" className="open-popup" onClick={getAllNumbers}>
            전체 데이터 보기
          </a>
        </div>
      </div>
      {isModalOpen && (
        <div
          id="whole-data"
          className="popup"
          onClick={handleModalClick}
        >
          <div className="popup__container">
            <a href="" className="popup__close" onClick={closeModal}>
              <span className="screen-reader">close</span>
            </a>
            <div className="popup__content" onClick={handleContentClick}>
              <h1 className="popup__title r-title">전체 데이터</h1>
              <table className="centered-table">
                <thead>
                  <tr>
                    <th>닉네임</th>
                    <th>숫자</th>
                    <th>시간</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((item, index) => (
                    <tr key={index}>
                      <td>{item.nickname}</td>
                      <td>{item.number}</td>
                      <td>{item.time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          
          </div>
        </div>
      )}
    </div>
  );
}

export default Modalwhole;
