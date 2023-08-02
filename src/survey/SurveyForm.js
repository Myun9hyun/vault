import React, { useState, useRef, useEffect } from "react";
import "./SurveyForm.css";


const SurveyForm = () => {
  const [currentPanel, setCurrentPanel] = useState(1);
  const [formData, setFormData] = useState({});
  const progressRef = useRef(null);

  useEffect(() => {
    const progressBar = progressRef.current;
    const steps = progressBar.querySelectorAll(".progressbar__step");
    const answeredQuestions = Object.keys(formData).filter(
      (key) => key.includes("question_") && formData[key] !== ""
    );
    steps.forEach((step, index) => {
      step.classList.toggle("active", index + 1 <= answeredQuestions.length);
    });
  }, [currentPanel, formData]);

  const handleNext = () => {
    if (currentPanel === 1) {
      // 패널 1에서 "상속" 또는 "이혼"을 선택한 경우
      if (formData["question_1"] === "상속") {
        setCurrentPanel(2); // 패널 2로 이동
      } else if (formData["question_1"] === "이혼") {
        setCurrentPanel(6); // "이혼"을 선택한 경우, 패널 6으로 이동
      }
    } else if (currentPanel === 9 && formData["question_9"]) {
      handleSubmit(); // 패널 9에서 선택을 하고 다음을 누른 경우 폼 제출
    } else if (currentPanel < 9) {
      setCurrentPanel((prevPanel) => prevPanel + 1); // 그 외의 경우 다음 패널로 이동
    }
  };
  
  const handlePanel9Submit = () => {
    if (formData["question_9"]) {
      // handleSubmit(); 
    }
  };

  const handlePrev = () => {
    if (currentPanel === 1) {
      setCurrentPanel(1); // 패널 1에서는 첫 번째 패널로 돌아감
    } else if (currentPanel === 6 && formData["question_1"] === "이혼") {
      setCurrentPanel(1); // 패널 6에서 "이혼"을 선택한 경우 패널 1로 돌아감
    } else if (currentPanel === 6 && formData["question_1"] === "상속") {
      setCurrentPanel(5); // 패널 6에서 "상속"을 선택한 경우 패널 5로 돌아감
    } else if (currentPanel > 1) {
      setCurrentPanel((prevPanel) => prevPanel - 1);
    }
  };

  const handleChange = (event) => {
    const { name, value, type } = event.target;
    const newValue = type === "checkbox" ? event.target.checked : value;
    setFormData((prevData) => ({ ...prevData, [name]: newValue }));
  };

  const handleSubmit = () => {
    // 폼 제출 로직을 처리하는 함수
    console.log("Form data:", formData);
    alert("폼 제출이 완료되었습니다!");
  };
  

  return (
    <div className="container">
      <header className="header">
        <h1 id="title" className="header__title">
          우리동네 변호사에서 유사 사례를 찾아보세요
        </h1>
        <p id="description" className="header__description">
          오른쪽 질문사항에 답변하시면, 적절한 사례를 검색해드립니다.
          <a href="./card/Animation.js">Home</a>
          <a href="/">Home</a>
        </p>
        <img
          src="https://res.cloudinary.com/alexandracaulea/image/upload/v1585333913/illustration_x46ict.svg"
          alt=""
          aria-hidden="true"
          className="illustration"
        />
      </header>

      <main className="main">
        <form
          action="#"
          method="GET"
          id="survey-form"
          className="survey"
          noValidate
          onSubmit={handleSubmit}
        >
          <div
            className="progressbar"
            tabIndex="0"
            role="progressbar"
            aria-valuemin="1"
            aria-valuemax="5"
            aria-valuenow={currentPanel}
            aria-valuetext={`Question ${currentPanel} of 9`}
            ref={progressRef}
          >
            <span className="progressbar__step active" aria-hidden="true"></span>
            <span className="progressbar__step" aria-hidden="true"></span>
            <span className="progressbar__step" aria-hidden="true"></span>
            <span className="progressbar__step" aria-hidden="true"></span>
            <span className="progressbar__step" aria-hidden="true"></span>

          </div>

          {/* Panels */}
          {/* Panel 1 */}
          <section
            className={`survey__panel ${currentPanel === 1 ? "survey__panel--current" : ""}`}
            aria-hidden={currentPanel !== 1}
            data-index="1"
            data-panel="firstPanel"
            data-requirement="option"
          >
            <h2 className="survey__panel__question">
              <span className="visuallyhidden">Question 1 of 9 </span>Q1. 찾고 싶은 카테고리를 선택해주세요.
            </h2>
            <div className="survey__panel__period">
              <div className="form-group">
                <input
                  id="상속"
                  type="radio"
                  name="question_1"
                  value="상속"
                  onChange={handleChange}
                  checked={formData["question_1"] === "상속"}
                />
                <label htmlFor="상속">상속</label>
              </div>
              <div className="form-group">
                <input
                  id="이혼"
                  type="radio"
                  name="question_1"
                  value="이혼"
                  onChange={handleChange}
                  checked={formData["question_1"] === "이혼"}
                />
                <label htmlFor="이혼">이혼</label>
              </div>
            </div>
            <p className="error-message"></p>
          </section>

          {/* Panel 2 */}
          <section
            className={`survey__panel ${currentPanel === 2 ? "survey__panel--current" : ""}`}
            aria-hidden={currentPanel !== 2}
            data-index="2"
            data-panel="secondPanel"
            data-requirement="option"
          >
            <h2 className="survey__panel__question">
              <span className="visuallyhidden">Question 2 of 9 </span>Q2. 상속 1
            </h2>
            <div className="survey__panel__content">
              <div className="form-group">
                <input
                  id="option2_1"
                  type="radio"
                  name="question_2"
                  value="option2_1"
                  onChange={handleChange}
                  checked={formData["question_2"] === "option2_1"}
                />
                <label htmlFor="option2_1">Option 2_1</label>
              </div>
              <div className="form-group">
                <input
                  id="option2_2"
                  type="radio"
                  name="question_2"
                  value="option2_2"
                  onChange={handleChange}
                  checked={formData["question_2"] === "option2_2"}
                />
                <label htmlFor="option2_2">Option 2_2</label>
              </div>
              {/* Add more options if needed */}
            </div>
            <p className="error-message"></p>
          </section>

          {/* Panel 3 */}
          <section
            className={`survey__panel ${currentPanel === 3 ? "survey__panel--current" : ""}`}
            aria-hidden={currentPanel !== 3}
            data-index="3"
            data-panel="thirdPanel"
            data-requirement="option"
          >
            <h2 className="survey__panel__question">
              <span className="visuallyhidden">Question 3 of 9 </span>Q3. 상속 2
            </h2>
            <div className="survey__panel__content">
              <div className="form-group">
                <input
                  id="option3_1"
                  type="radio"
                  name="question_3"
                  value="option3_1"
                  onChange={handleChange}
                  checked={formData["question_3"] === "option3_1"}
                />
                <label htmlFor="option3_1">Option 3_1</label>
              </div>
              <div className="form-group">
                <input
                  id="option3_2"
                  type="radio"
                  name="question_3"
                  value="option3_2"
                  onChange={handleChange}
                  checked={formData["question_3"] === "option3_2"}
                />
                <label htmlFor="option3_2">Option 3_2</label>
              </div>
              {/* Add more options if needed */}
            </div>
            <p className="error-message"></p>
          </section>

          {/* Panel 4 */}
          <section
            className={`survey__panel ${currentPanel === 4 ? "survey__panel--current" : ""}`}
            aria-hidden={currentPanel !== 4}
            data-index="4"
            data-panel="fourthPanel"
            data-requirement="option"
          >
            <h2 className="survey__panel__question">
              <span className="visuallyhidden">Question 4 of 9 </span>Q4. 상속 3
            </h2>
            <div className="survey__panel__content">
              <div className="form-group">
                <input
                  id="option4_1"
                  type="radio"
                  name="question_4"
                  value="option4_1"
                  onChange={handleChange}
                  checked={formData["question_4"] === "option4_1"}
                />
                <label htmlFor="option4_1">Option 4_1</label>
              </div>
              <div className="form-group">
                <input
                  id="option4_2"
                  type="radio"
                  name="question_4"
                  value="option4_2"
                  onChange={handleChange}
                  checked={formData["question_4"] === "option4_2"}
                />
                <label htmlFor="option4_2">Option 4_2</label>
              </div>
              {/* Add more options if needed */}
            </div>
            <p className="error-message"></p>
          </section>

          {/* Panel 5 */}
          <section
            className={`survey__panel ${currentPanel === 5 ? "survey__panel--current" : ""}`}
            aria-hidden={currentPanel !== 5}
            data-index="5"
            data-panel="fifthPanel"
            data-requirement="option"
          >
            <h2 className="survey__panel__question">
              <span className="visuallyhidden">Question 5 of 9 </span>Q5. 상속 4
            </h2>
            <div className="survey__panel__content">
              <div className="form-group">
                <input
                  id="option5_1"
                  type="radio"
                  name="question_5"
                  value="option5_1"
                  onChange={handleChange}
                  checked={formData["question_5"] === "option5_1"}
                />
                <label htmlFor="option5_1">Option 5_1</label>
              </div>
              <div className="form-group">
                <input
                  id="option5_2"
                  type="radio"
                  name="question_5"
                  value="option5_2"
                  onChange={handleChange}
                  checked={formData["question_5"] === "option5_2"}
                />
                <label htmlFor="option5_2">Option 5_2</label>
              </div>
              {/* Add more options if needed */}
            </div>
            <p className="error-message"></p>
            <div className="survey__nav">
              <button
                type="button"
                  className="survey__nav__button survey__nav__button--prev effect effect-2"
                  onClick={handlePrev}
                >
                  previous
                </button>
                <button
                  type="submit"
                  className="survey__nav__button survey__nav__button--submit effect effect-3"
                  onClick={handleSubmit}
                  disabled={!formData["question_5"]}
                >
                  Submit
                </button>
              </div>
            </section>

          {/* Panel 6 */}
          <section
          className={`survey__panel ${currentPanel === 6 ? "survey__panel--current" : ""}`}
          aria-hidden={currentPanel !== 6}
          data-index="6"
          data-panel="sixthPanel"
          data-requirement="option"
        >
          <h2 className="survey__panel__question">
            <span className="visuallyhidden">Question 6 of 9 </span>Q1 이혼 1
          </h2>
          <div className="survey__panel__period">
            <div className="form-group">
              <input
                id="option1"
                type="radio"
                name="question_6"
                value="option1"
                onChange={handleChange} // Update handleChange to store the selected option in formData
                checked={formData["question_6"] === "option1"}
              />
              <label htmlFor="option1">Option 1</label>
            </div>
            <div className="form-group">
              <input
                id="option2"
                type="radio"
                name="question_6"
                value="option2"
                onChange={handleChange} // Update handleChange to store the selected option in formData
                checked={formData["question_6"] === "option2"}
              />
              <label htmlFor="option2">Option 2</label>
            </div>
            <div className="form-group">
              <input
                id="option3"
                type="radio"
                name="question_6"
                value="option3"
                onChange={handleChange} // Update handleChange to store the selected option in formData
                checked={formData["question_6"] === "option3"}
              />
              <label htmlFor="option3">Option 3</label>
            </div>
          </div>
          <p className="error-message"></p>
          
        </section>

                  {/* Panel 7 */}
        <section
          className={`survey__panel ${currentPanel === 7 ? "survey__panel--current" : ""}`}
          aria-hidden={currentPanel !== 7}
          data-index="7"
          data-panel="seventhPanel"
          data-requirement="option"
        >
          <h2 className="survey__panel__question">
            <span className="visuallyhidden">Question 7 of 9 </span>Q2. 이혼2
          </h2>
          <div className="survey__panel__content">
            <div className="form-group">
              <input
                id="option7_1"
                type="radio"
                name="question_7"
                value="option7_1"
                onChange={handleChange}
                checked={formData["question_7"] === "option7_1"}
              />
              <label htmlFor="option7_1">Option 7_1</label>
            </div>
            <div className="form-group">
              <input
                id="option7_2"
                type="radio"
                name="question_7"
                value="option7_2"
                onChange={handleChange}
                checked={formData["question_7"] === "option7_2"}
              />
              <label htmlFor="option7_2">Option 7_2</label>
            </div>
            {/* Add more options if needed */}
          </div>
          <p className="error-message"></p>
        </section>

        {/* Panel 8 */}
        <section
          className={`survey__panel ${currentPanel === 8 ? "survey__panel--current" : ""}`}
          aria-hidden={currentPanel !== 8}
          data-index="8"
          data-panel="eighthPanel"
          data-requirement="option"
        >
          <h2 className="survey__panel__question">
            <span className="visuallyhidden">Question 8 of 9 </span>Q3. 이혼3
          </h2>
          <div className="survey__panel__content">
            <div className="form-group">
              <input
                id="option8_1"
                type="radio"
                name="question_8"
                value="option8_1"
                onChange={handleChange}
                checked={formData["question_8"] === "option8_1"}
              />
              <label htmlFor="option8_1">Option 8_1</label>
            </div>
            <div className="form-group">
              <input
                id="option8_2"
                type="radio"
                name="question_8"
                value="option8_2"
                onChange={handleChange}
                checked={formData["question_8"] === "option8_2"}
              />
              <label htmlFor="option8_2">Option 8_2</label>
            </div>
            {/* Add more options if needed */}
          </div>
          <p className="error-message"></p>
        </section>

        {/* Panel 9 */}
        <section
          className={`survey__panel ${currentPanel === 9 ? "survey__panel--current" : ""}`}
          aria-hidden={currentPanel !== 9}
          data-index="9"
          data-panel="ninthPanel"
          data-requirement="option"
        >
          <h2 className="survey__panel__question">
            <span className="visuallyhidden">Question 9 of 9 </span>Q4. 이혼4
          </h2>
          <div className="survey__panel__content">
            <div className="form-group">
              <input
                id="option9_1"
                type="radio"
                name="question_9"
                value="option9_1"
                onChange={handleChange}
                checked={formData["question_9"] === "option9_1"}
              />
              <label htmlFor="option9_1">Option 9_1</label>
            </div>
            <div className="form-group">
              <input
                id="option9_2"
                type="radio"
                name="question_9"
                value="option9_2"
                onChange={handleChange}
                checked={formData["question_9"] === "option9_2"}
              />
              <label htmlFor="option9_2">Option 9_2</label>
            </div>
            {/* Add more options if needed */}
          </div>
          <p className="error-message"></p>
        </section>

          {/* Navigation Buttons */}
      <div className="survey__nav">
        {currentPanel > 1 && currentPanel !== 5 && (
          <button
            type="button"
            className="survey__nav__button survey__nav__button--prev effect effect-2"
            onClick={handlePrev}
          >
            Previous
          </button>
        )}
        {currentPanel === 9 ? (
          <button
            type="submit"
            className="survey__nav__button survey__nav__button--submit effect effect-3"
            onClick={handlePanel9Submit}
            disabled={!formData["question_9"]}
            style={{ border: "1px solid black" }} 
          >
            Submit
          </button>
        ) : (
          currentPanel !== 5 && (
            <button
              type="button"
              className="survey__nav__button survey__nav__button--next effect effect-1"
              onClick={handleNext}
              disabled={(currentPanel === 1 && !formData["question_1"]) || (currentPanel === 6 && !formData["question_6"])}
              style={{ border: "1px solid black" }} 
            >
              Next
            </button>
          )
      )}
    </div>
        </form>
      </main>
      <footer className="footer">
        <p className="footer__text">
          어떡하지.. 답이 없네..
        </p>
      </footer>
    </div>
  );
};

export default SurveyForm;