import React, { useState } from 'react';

const UploadForm = () => {
  const [name, setName] = useState('');
  const [picture, setPicture] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handlePictureChange = (e) => {
    setPicture(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('name', name);
    formData.append('picture', picture);

    try {
      const response = await fetch('/api/data', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Data uploaded successfully!');
      } else {
        alert('Failed to upload data. Please try again.');
      }
    } catch (error) {
      console.error('Error uploading data:', error);
    }
  };

  return (
    <div>
      <h2>Upload Data</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="picture">Picture:</label>
          <input type="file" id="picture" name="picture" onChange={handlePictureChange} />
        </div>
        <button type="submit">업로드</button>
      </form>
    </div>
  );
};

export default UploadForm;
