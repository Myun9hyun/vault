import React, { useState } from 'react';

function App() {
  const [cnum, setCnum] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [loading, setLoading] = useState(false);

  const fetchImage = () => {
    if (cnum !== '') {
      setLoading(true);
      fetch(`http://localhost:8080/images/${cnum}`)
        .then(response => {
          if (!response.ok) {
            throw new Error('Image not found');
          }
          return response.text(); // Fetch the image as text
        })
        .then(imageData => {
          setImageUrl(`data:image/jpeg;base64,${imageData}`); // Set Base64-encoded data as image URL
        })
        .catch(error => {
          console.error('Error fetching image:', error);
          setImageUrl('');
        })
        .finally(() => setLoading(false));
    } else {
      setImageUrl('');
    }
  };

  return (
    <div>
      <div>
        <label>번호를 입력해주세요: </label>
        <input
          type="text"
          value={cnum}
          onChange={e => setCnum(e.target.value)}
        />
        <button onClick={fetchImage}>이미지 표시</button>
      </div>
      <div>
        {loading ? (
          <p>Loading...</p>
        ) : imageUrl ? (
          <img src={imageUrl} alt={`Image ${cnum}`} />
        ) : (
          <p>No image available</p>
        )}
      </div>
    </div>
  );
}

export default App;
