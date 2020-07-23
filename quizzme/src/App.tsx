import React, { useState } from 'react';
import { getQuestions } from './API';
// Components
import QuestionCard from './components/QuestionCard';
import Logo from './components/Logo';
// types
import { QuestionsState} from './API';
// Styles
import { GlobalStyle, Wrapper } from './App.styles';

export type AnswerObject = {
  question: string;
  answer: string;
  correct: boolean;
  correctAnswer: string;
};

const Number_Questions = 10;

const App: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [level,setLevel] = useState("easy");
  const [questions, setQuestions] = useState<QuestionsState[]>([]);
  const [current, setCurrent] = useState(0);
  const [userAnswers, setUserAnswers] = useState<AnswerObject[]>([]);
  const [score, setScore] = useState(0);
  const [end, setEnd] = useState(true);

  const onStart= async () => {
    setLoading(true);
    setEnd(false);
    const newQuestions = await getQuestions(
      Number_Questions,
      level
    );
    setQuestions(newQuestions);
    setScore(0);
    setUserAnswers([]);
    setCurrent(0);
    setLoading(false);
  };

  const changeLevel =(e:any) => {
    setLevel(e.currentTarget.value)
  };

  const checkAnswer = (e: any) => {
    if (!end) {
      // User's answer
      const answer = e.currentTarget.value;
      // Check answer against correct answer
      const correct = questions[current].correct_answer === answer;
      // Add score if answer is correct
      if (correct) setScore((prev) => prev + 1);
      // Save the answer in the array for user answers
      const answerObject = {
        question: questions[current].question,
        answer,
        correct,
        correctAnswer: questions[current].correct_answer,
      };
      setUserAnswers((prev) => [...prev, answerObject]);
    }
  };

  const goNext = () => {
    // Move on to the next question if not the last question
    const next = current + 1;

    if (next=== Number_Questions) {
      setEnd(true);
    } else {
      setCurrent(next);
    }
  };

  return (
    <>
      <Logo />
      <GlobalStyle />
       
      <Wrapper>

        <h1>Level:{level}</h1>
        <label>Choose a level:</label>
            <select name="level" id="level" onChange={changeLevel}>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
        {end || userAnswers.length === Number_Questions ? (
          <button className='start' onClick={onStart}>
            Start
          </button>
        ) : null}
        {!end ? <p className='score'>Score: {score}</p> : null}
        {loading ? <p>Loading Questions...</p> : null}
        {!loading && !end && (
          <QuestionCard
            questionNr={current + 1}
            totalQuestions={Number_Questions}
            question={questions[current].question}
            answers={questions[current].answers}
            userAnswer={userAnswers ? userAnswers[current] : undefined}
            callback={checkAnswer}
          />
        )}
        {!end && !loading && userAnswers.length === current + 1 && current !== Number_Questions - 1 ? (
          <button className='next' onClick={goNext}>
            Next Question
          </button>
        ) : null}
      </Wrapper>
    </>
  ); 
};

export default App;