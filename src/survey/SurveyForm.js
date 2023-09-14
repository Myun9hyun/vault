import React, { useState } from 'react';
import './SurveyForm.css'; // 스타일을 관리하는 CSS 파일

const cocktails = [
  {
    name: 'Margarita',
    flavor: 'Sour',
    baseLiquor: 'Tequila',
    strength: 'Strong',
    description: 'A classic cocktail with a tangy twist!',
  },
  // 다른 칵테일 정보들을 추가해주세요
];

function SurveyForm() {
  const [questions, setQuestions] = useState([
    { id: 1, question: 'Do you prefer sweet or sour flavors?', answer: '' },
    { id: 2, question: 'Which base liquor do you like?', answer: '' },
    { id: 3, question: 'Do you want your cocktail to be strong or mild?', answer: '' },
  ]);

  const [recommendedCocktail, setRecommendedCocktail] = useState(null);

  const handleAnswer = (questionId, answer) => {
    const updatedQuestions = questions.map(question =>
      question.id === questionId ? { ...question, answer } : question
    );
    setQuestions(updatedQuestions);
  };

  const recommendCocktail = () => {
    const selectedFlavor = questions.find(question => question.id === 1)?.answer;
    const selectedLiquor = questions.find(question => question.id === 2)?.answer;
    const selectedStrength = questions.find(question => question.id === 3)?.answer;

    const matchingCocktails = cocktails.filter(
      cocktail =>
        cocktail.flavor === selectedFlavor &&
        cocktail.baseLiquor === selectedLiquor &&
        cocktail.strength === selectedStrength
    );

    if (matchingCocktails.length > 0) {
      const randomIndex = Math.floor(Math.random() * matchingCocktails.length);
      setRecommendedCocktail(matchingCocktails[randomIndex]);
    } else {
      setRecommendedCocktail(null);
    }
  };

  return (
    <div className="survey-form">
      <h1>Find Your Perfect Cocktail</h1>
      <form>
        {questions.map(question => (
          <div key={question.id} className="question">
            <p>{question.question}</p>
            <div className="answer-options">
              {question.id === 1 && (
                <>
                  <button
                    type="button"
                    className={`option-button ${question.answer === 'Sweet' ? 'selected' : ''}`}
                    onClick={() => handleAnswer(question.id, 'Sweet')}
                  >
                    Sweet
                  </button>
                  <button
                    type="button"
                    className={`option-button ${question.answer === 'Sour' ? 'selected' : ''}`}
                    onClick={() => handleAnswer(question.id, 'Sour')}
                  >
                    Sour
                  </button>
                </>
              )}
              {question.id === 2 && (
                <>
                  <button
                    type="button"
                    className={`option-button ${question.answer === 'Vodka' ? 'selected' : ''}`}
                    onClick={() => handleAnswer(question.id, 'Vodka')}
                  >
                    Vodka
                  </button>
                  {/* 다른 base liquor에 대한 버튼들도 추가해주세요 */}
                </>
              )}
              {question.id === 3 && (
                <>
                  <button
                    type="button"
                    className={`option-button ${question.answer === 'Strong' ? 'selected' : ''}`}
                    onClick={() => handleAnswer(question.id, 'Strong')}
                  >
                    Strong
                  </button>
                  <button
                    type="button"
                    className={`option-button ${question.answer === 'Mild' ? 'selected' : ''}`}
                    onClick={() => handleAnswer(question.id, 'Mild')}
                  >
                    Mild
                  </button>
                </>
              )}
            </div>
          </div>
        ))}
        <button type="button" className="submit-button" onClick={recommendCocktail}>
          Get Recommendation
        </button>
      </form>
      {recommendedCocktail && (
        <div className="recommended-cocktail">
          <h2>Recommended Cocktail: {recommendedCocktail.name}</h2>
          <p>{recommendedCocktail.description}</p>
        </div>
      )}
    </div>
  );
}

export default SurveyForm;
