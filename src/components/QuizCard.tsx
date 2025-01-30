import React from "react";
import Button from "./Button";

type questionTyp = {
  id: number;
  question: string;
  choices: string[];
  correct_answer: string;
  timer: number;
};

type QuizCardProps = {
  question: questionTyp;
  index: number;
  quizQuestion: questionTyp[];
  correctAnswer: number;
  handleNext: () => void;
  handleReset: () => void;
  timer: number;
  selectedAnswer: string | number;
  handleSelectedAns: (answer: string) => void;
};

const QuizCard: React.FC<QuizCardProps> = ({
  question,
  index,
  quizQuestion,
  correctAnswer,
  handleNext,
  handleReset,
  timer,
  selectedAnswer,
  handleSelectedAns,
}) => {
  const suffleChoise = (array: any) => {
    return array.sort(() => Math.random() - 0.5);
  };
  return (
    <div>
      <div className=" mx-auto md:h-[500px] md:max-w-[400px] bg-white rounded-md p-6 flex flex-col gap-4 ">
        <h2 className="text-xl">
          {index + 1}. {question?.question}
        </h2>

        <ul className="list-disc px-10 mt-4 w-full p-2">
          {question?.choices.map((item: any) => {
            const isCorrect = item === question.correct_answer;
            return (
              <li
                onClick={() => handleSelectedAns(item)}
                key={item}
                className={`cursor-pointer py-2 rounded hover:bg-gray-200 p-2 mb-2 ${
                  selectedAnswer
                    ? isCorrect
                      ? "bg-green-400"
                      : "bg-red-400"
                    : ""
                }`}
              >
                {item}
              </li>
            );
          })}
        </ul>

        <div className="w-full flex justify-center item-center">
          {quizQuestion.length - 1 === index ? (
            <Button
              buttonName="Reset"
              buttonClassName=" w-full"
              onClick={handleReset}
            />
          ) : (
            <Button
              buttonName="Next"
              buttonClassName=" w-full"
              onClick={handleNext}
            />
          )}
        </div>

        <div className="flex flex-col items-center">
          <p>
            Question {index + 1} of {quizQuestion.length}
          </p>
          <p>
            Correct Answers: {correctAnswer} of {quizQuestion.length}
          </p>
          <p>Remaining: {timer} seconds</p>
        </div>
      </div>
    </div>
  );
};

export default QuizCard;
