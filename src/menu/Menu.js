import React from 'react';
import './Menu.css';
import tower from './eiffel_tower.png'; // Business A의 프로필 사진 주소를 임포트합니다.

function Menu() {
  return (
    <div>
      <section className="box-menu">
        <a className="box first" href="#">
          <div className="icon-cont">
            {/* Add your image or icon here */}
            <img src={tower} alt="eiffel_tower" />
          </div>
          <h3>에펠탑</h3>
          <div className="expand">
            <i className="fa fa-arrow-right"></i>
          </div>
        </a>
        <a className="box second" href="#">
          <div className="icon-cont">
            {/* Add your image or icon here */}
            <i className="fa fa-edit"></i>
          </div>
          <h3>Curriculum Designers Portal</h3>
          <div className="expand">
            <i className="fa fa-arrow-right"></i>
          </div>
        </a>

        <a className="box third" href="#">
          <div className="icon-cont">
            {/* Add your image or icon here */}
            <i className="fa fa-sort-numeric-desc"></i>
          </div>
          <h3>Analysis Portal</h3>
          <div className="expand">
            <i className="fa fa-arrow-right"></i>
          </div>
        </a>

        <a className="box fourth" href="#">
          <div className="icon-cont">
            {/* Add your image or icon here */}
            <i className="fa fa-book"></i>
          </div>
          <h3>Documentation</h3>
          <div className="expand">
            <i className="fa fa-arrow-right"></i>
          </div>
        </a>
      </section>
    </div>
  );
}

export default Menu;
