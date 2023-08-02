import React from 'react';
import './Animation.css';
import Card from './Card.js'; // Card 컴포넌트를 임포트합니다.
import businessAProfilePicture from './Jjang.png'; // Business A의 프로필 사진 주소를 임포트합니다.
import businessBProfilePicture from './Yuri.png'; // Business B의 프로필 사진 주소를 임포트합니다.
import businessCProfilePicture from './Won.jpeg'; // Business C의 프로필 사진 주소를 임포트합니다.
import businessDProfilePicture from './Osu.jpeg'; // Business D의 프로필 사진 주소를 임포트합니다.
import businessEProfilePicture from './Chulsu.jpeg'; // Business E의 프로필 사진 주소를 임포트합니다.
import businessFProfilePicture from './Maeng.jpeg'; // Business F의 프로필 사진 주소를 임포트합니다.

// 나머지 사업자들의 프로필 사진 주소를 임포트합니다. (businessC, businessD, businessE, businessF)

const Marquee = () => {
  return (
    <div className="marquee">
      <div className="marquee-group">
        {/* Business A의 프로필 정보 */}
        <Card
          businessName="최용재"
          profilePicture={businessAProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessA.com"
          email="contact@businessA.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessA_resume.pdf"
        />
        {/* Business B의 프로필 정보 */}
        <Card
          businessName="김지영"
          profilePicture={businessBProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessB.com"
          email="contact@businessB.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessB_resume.pdf"
        />
        {/* Business C의 프로필 정보 */}
        <Card
          businessName="이재진"
          profilePicture={businessCProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessC.com"
          email="contact@businessC.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessC_resume.pdf"
        />
        {/* Business B의 프로필 정보 */}
        <Card
          businessName="김명현"
          profilePicture={businessDProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessB.com"
          email="contact@businessB.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessB_resume.pdf"
        />{/* Business E의 프로필 정보 */}
        <Card
          businessName="김지환"
          profilePicture={businessEProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessE.com"
          email="contact@businessE.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessE_resume.pdf"
        />
        {/* Business F의 프로필 정보 */}
        <Card
          businessName="서동준"
          profilePicture={businessFProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessF.com"
          email="contact@businessF.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessF_resume.pdf"
        />
      </div>
      {/* 나머지 사업자들의 프로필 정보로 추가로 marquee-group 컴포넌트를 렌더링합니다 */}
      <div aria-hidden="true" className="marquee-group">
      {/* Business A의 프로필 정보 */}
      <Card
          businessName="최용재"
          profilePicture={businessAProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessA.com"
          email="contact@businessA.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessA_resume.pdf"
        />
        {/* Business B의 프로필 정보 */}
        <Card
          businessName="김지영"
          profilePicture={businessBProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessB.com"
          email="contact@businessB.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessB_resume.pdf"
        />
        {/* Business C의 프로필 정보 */}
        <Card
          businessName="이재진"
          profilePicture={businessCProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessC.com"
          email="contact@businessC.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessC_resume.pdf"
        />
        {/* Business B의 프로필 정보 */}
        <Card
          businessName="김명현"
          profilePicture={businessDProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessB.com"
          email="contact@businessB.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessB_resume.pdf"
        />{/* Business E의 프로필 정보 */}
        <Card
          businessName="김지환"
          profilePicture={businessEProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessE.com"
          email="contact@businessE.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessE_resume.pdf"
        />
        {/* Business F의 프로필 정보 */}
        <Card
          businessName="서동준"
          profilePicture={businessFProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessF.com"
          email="contact@businessF.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessF_resume.pdf"
        />
      </div>
      <div className="marquee-group">
        {/* Business A의 프로필 정보 */}
        <Card
          businessName="최용재"
          profilePicture={businessAProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessA.com"
          email="contact@businessA.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessA_resume.pdf"
        />
        {/* Business B의 프로필 정보 */}
        <Card
          businessName="김지영"
          profilePicture={businessBProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessB.com"
          email="contact@businessB.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessB_resume.pdf"
        />
        {/* Business C의 프로필 정보 */}
        <Card
          businessName="이재진"
          profilePicture={businessCProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessC.com"
          email="contact@businessC.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessC_resume.pdf"
        />
        {/* Business B의 프로필 정보 */}
        <Card
          businessName="김명현"
          profilePicture={businessDProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessB.com"
          email="contact@businessB.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessB_resume.pdf"
        />{/* Business E의 프로필 정보 */}
        <Card
          businessName="김지환"
          profilePicture={businessEProfilePicture}
          followersCount="18,541"
          followingCount="181"
          location="샌프란시스코, 캘리포니아"
          work="CEO"
          website="www.businessE.com"
          email="contact@businessE.com"
          phone="1-(732)-757-2923"
          resumeLink="BusinessE_resume.pdf"
        />
        {/* Business F의 프로필 정보 */}
        <Card
          businessName="서동준"
          profilePicture={businessFProfilePicture}
          followersCount="25,123"
          followingCount="421"
          location="로스앤젤레스, 캘리포니아"
          work="CTO"
          website="www.businessF.com"
          email="contact@businessF.com"
          phone="1-(555)-123-4567"
          resumeLink="BusinessF_resume.pdf"
        />
      </div>
    </div>
  );
};

export default Marquee;
