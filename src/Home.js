import React, { useState } from 'react';

function Home() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleImageUpload = () => {
    if (!selectedImage) {
      alert('먼저 이미지를 선택해주세요.');
      return;
    }

    // Check if the file is a png or jpg image
    if (!selectedImage.type.includes('png') && !selectedImage.type.includes('jpg') && !selectedImage.type.includes('jpeg')) {
      alert('이미지는 png 또는 jpg 형식이어야 합니다.');
      return;
    }

    const formData = new FormData();
    formData.append('image', selectedImage);

    fetch('http://127.0.0.1:8080/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        // 백엔드로부터의 응답 처리 (필요 시)
        console.log('백엔드 응답:', data);
        alert('이미지 업로드가 성공적으로 완료되었습니다!');
      })
      .catch((error) => {
        console.error('이미지 업로드 오류:', error);
        alert('이미지 업로드에 실패했습니다. 다시 시도해주세요.');
      });
  };

  return (
    <div>
      <h1>이미지 업로드</h1>
      <input type="file" onChange={handleImageChange} />
      <button onClick={handleImageUpload}>이미지 업로드</button>
    </div>
  );
}

export default Home;