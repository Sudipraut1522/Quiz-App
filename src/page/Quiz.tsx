import React, { useEffect, useState } from "react";
import { quizQuestion } from "../data/Quiz";
import QuizCard from "../components/QuizCard";

const Quiz: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [timer, setTimer] = useState(10);
  const [selectedAnswer, setSelectedAnswer] = useState<string | number>(0);
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [isTimerActive, setIsTimerActive] = useState(true);

  const question = quizQuestion[index];

  const handleSelectedAns = (answer: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      if (answer === question?.correct_answer) {
        setCorrectAnswer(correctAnswer + 1);
      }
      setIsTimerActive(false);
    }
  };

  const handleNext = () => {
    if (index < quizQuestion.length - 1) {
      setIndex((prev) => prev + 1);
      setTimer(10);
      setSelectedAnswer(0);
      setIsTimerActive(true);
    }
  };

  const handleReset = () => {
    setCorrectAnswer(0);
    setTimer(10);
    setIndex(0);
    setSelectedAnswer(0);
    setIsTimerActive(true);
  };

  useEffect(() => {
    if (!isTimerActive || timer === 0) {
      if (timer === 0) {
        handleNext();
      }
      return;
    }

    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer, isTimerActive]);

  return (
    <>
      <div className="bg-gray-100 flex flex-col justify-center items-center w-full h-screen">
        <div className="flex flex-col items-center gap-10 justify-center">
          <h1 className="text-4xl  ">Quiz Game</h1>
          <QuizCard
            question={question}
            correctAnswer={correctAnswer}
            handleNext={handleNext}
            handleReset={handleReset}
            index={index}
            quizQuestion={quizQuestion}
            timer={timer}
            selectedAnswer={selectedAnswer}
            handleSelectedAns={handleSelectedAns}
          />
        </div>
      </div>
    </>
  );
};

export default Quiz;
