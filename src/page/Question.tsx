import React, { useState, useEffect } from "react";
import Button from "../components/Button";
import { quizQuestion } from "../data/Quiz";

const Question: React.FC = () => {
  const [index, setIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [answerStatus, setAnswerStatus] = useState<
    "correct" | "incorrect" | null
  >(null);
  setSelectedAnswer;
  const [timer, setTimer] = useState(10);

  const question = quizQuestion[index];

  const handleAnswerClick = (answer: string) => {
    if (selectedAnswer === null) {
      setSelectedAnswer(answer);

      if (answer === question.correct_answer) {
        setAnswerStatus("correct");
        setCorrectAnswers(correctAnswers + 1);
      } else {
        setAnswerStatus("incorrect");
      }
    }
  };

  const handleNextClick = () => {
    if (index < quizQuestion.length - 1) {
      setIndex(index + 1);
      setSelectedAnswer(null);
      setAnswerStatus(null);
      setTimer(10);
    } else {
      console.log("Quiz Completed!");
    }
  };

  const handleResetClick = () => {
    setIndex(0);
    setSelectedAnswer(null);
    setCorrectAnswers(0);
    setAnswerStatus(null);
    setTimer(10);
  };

  useEffect(() => {
    if (timer === 0) {
      handleNextClick();
      return;
    }

    const interval = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <div className="h-screen bg-gray-200 flex flex-col gap-12 justify-center items-center w-full">
      <h1 className="text-4xl font-semibold">Quiz App</h1>
      <hr />
      <div className="p-12 bg-white gap-4 w-auto rounded-sm shadow flex flex-col justify-between">
        <div>
          <h1 className="text-black">
            {index + 1}. {question.question}
          </h1>
          <ul className="flex flex-col gap-2 list-decimal px-8">
            {question.choices.map((item) => (
              <li
                key={item}
                onClick={() => handleAnswerClick(item)}
                className={`cursor-pointer p-2 rounded hover:bg-gray-200 ${
                  selectedAnswer === item
                    ? answerStatus === "correct"
                      ? "bg-blue-200"
                      : answerStatus === "incorrect"
                      ? "bg-red-200"
                      : ""
                    : ""
                } ${
                  selectedAnswer &&
                  item !== question.correct_answer &&
                  item === selectedAnswer
                    ? "bg-red-200"
                    : ""
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full flex justify-center items-center">
          {index === quizQuestion.length - 1 ? (
            <Button
              buttonName="Reset"
              buttonClassName="w-full"
              onClick={handleResetClick}
            />
          ) : (
            <Button
              buttonName="Next"
              buttonClassName="w-full"
              onClick={handleNextClick}
            />
          )}
        </div>

        <div className="mt-4 text-center">
          <p>
            Question {index + 1} of {quizQuestion.length}
          </p>
          <p>
            Correct Answers: {correctAnswers} out of {quizQuestion.length}
          </p>
          <p>Time Remaining: {timer} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default Question;
