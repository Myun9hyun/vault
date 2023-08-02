import React, { useEffect, useState } from 'react';

const DisplayData = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/data');
        const jsonData = await response.json();
        setData(jsonData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h2>Display Data</h2>
      <div>
        {data.map((item) => (
          <div key={item.name}>
            <h3>{item.name}</h3>
            <img src={`data:image/jpeg;base64,${item.picture}`} alt={item.name} width="200" height="200" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayData;
