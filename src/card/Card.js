import React from 'react';
import './Card.css'; // 스타일을 포함하는 CSS 파일을 임포트합니다.

const PortfolioCard = (props) => {
  return (
    <div className="portfoliocard">
      <div className="coverphoto"></div>
      <div className="profile_picture">
        {/* 프로필 사진을 표시하는 img 태그를 추가합니다. */}
        <img
          src={props.profilePicture}
          alt="Profile"
          style={{ width: '110px', height: '110px', borderRadius: '50%', objectFit: 'cover' }}
        />
      </div>
      <div className="left_col">
        <div className="followers">
          <div className="follow_count">{props.followersCount}</div>
          Followers
        </div>
        <div className="following">
          <div className="follow_count">{props.followingCount}</div>
          Following
        </div>
      </div>
      <div className="right_col">
        <h2 className="name">{props.businessName}</h2>
        <h3 className="location">{props.location}</h3>
        <ul className="contact_information">
          <li className="work">{props.work}</li>
          <li className="website">
            <a className="nostyle" href="#">
              {props.website}
            </a>
          </li>
          <li className="mail">{props.email}</li>
          <li className="phone">{props.phone}</li>
          <li className="resume">
            <a href="#" className="nostyle">
              {props.resumeLink}
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PortfolioCard;
