import React, { useState, useEffect } from 'react';
import './App.css';

const Cocktail = () => {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [cocktails, setCocktails] = useState([]);
  const [filteredCocktails, setFilteredCocktails] = useState([]);

  useEffect(() => {
    fetchCocktails();
  }, []);

  useEffect(() => {
    // 검색어가 변경될 때마다 필터된 칵테일 목록 업데이트
    const filtered = cocktails.filter((cocktail) =>
      cocktail.name.toLowerCase().includes(searchKeyword.toLowerCase())
    );
    setFilteredCocktails(filtered);
  }, [searchKeyword, cocktails]);

  const fetchCocktails = async () => {
    try {
      const response = await fetch('http://localhost:8080/cocktails');
      const data = await response.json();
      setCocktails(data);
    } catch (error) {
      console.error('칵테일 데이터를 불러오는 중 오류가 발생했습니다:', error);
    }
  };

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchKeyword(value);
  };

  const handleSearchButtonClick = () => {
    setFilteredCocktails(
      cocktails.filter((cocktail) =>
        cocktail.name.toLowerCase().includes(searchKeyword.toLowerCase())
      )
    );
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearchButtonClick();
    }
  };

  return (
    <div className="container">
      <h1>Concoctionist</h1>
      <h2>A minimal app to browse recipes!</h2>
      <div className="fancySearchContainer">
        <input
          type="text"
          id="keyword"
          name="keyword"
          autoComplete="off"
          placeholder="검색어를 입력하세요"
          value={searchKeyword}
          onChange={handleSearchChange}
          onKeyPress={handleKeyPress}
        />
        <input
          type="button"
          value="검색"
          onClick={handleSearchButtonClick}
        />
      </div>
      <div className="recipieCards">
        {cocktails.length > 0 ? (
          filteredCocktails.length > 0 ? (
            filteredCocktails.map((cocktail) => (
              <div key={cocktail.id} className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front">
                    <img src={cocktail.image} alt={cocktail.name} />
                    <h1>{cocktail.name}</h1>
                    <p className="left">🥴</p>
                    <p className="right"></p>
                  </div>
                  <div className="flip-card-back">
                    <p className="right">🥴</p>
                    <p className="left"></p>
                    <table>
                      <tr>
                        <th>Ingredients</th>
                        <th>Method</th>
                        <th>Garnish</th>
                        <th>History</th>
                      </tr>
                      <tr>
                        <td>
                          <ul>
                            {[...Array(10)].map((_, index) => (
                              <li key={index}>{cocktail['ingredient' + (index + 1)]}</li>
                            ))}
                          </ul>
                        </td>
                        <td>{cocktail.method}</td>
                        <td>{cocktail.garnish}</td>
                        <td>{cocktail.history}</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>검색된 칵테일이 없습니다. 다른 검색어를 시도해보세요.</p>
          )
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
};

export default Cocktail;
