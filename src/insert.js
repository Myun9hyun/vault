import React, { useState } from 'react';
import axios from 'axios';

const Insert = () => {
  const [name, setName] = useState('');
  const [url, setUrl] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleUrlChange = (e) => {
    setUrl(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/data', { name, photo_url: url }, { mode: 'no-cors' });
      console.log('Data inserted successfully!');
    } catch (error) {
      console.error('Error inserting data:', error);
    }
  };

  return (
    <div>
      <h2>Insert Data</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" value={name} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="url">Photo URL:</label>
          <input type="text" id="url" value={url} onChange={handleUrlChange} />
        </div>
        <button type="submit">Insert</button>
      </form>
    </div>
  );
};

export default Insert;
