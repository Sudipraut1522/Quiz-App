import React from "react";
import { IoArrowForward } from "react-icons/io5";
import Button from "../components/Button";
import { NavLink } from "react-router-dom";

const Home: React.FC = () => {
  return (
    <div className="flex flex-col gap-7 justify-center items-center h-screen bg-gray-200">
      <NavLink to="question">
        <Button
          buttonClassName="bg-blue-500 text-white p-3 rounded-md flex items-center gap-2 px-6 text-lg"
          buttonName="Start"
          icone={<IoArrowForward />}
        />
      </NavLink>

      <div className="w-full md:max-w-[1000px] text-center text-gray-600 mt-4">
        A quiz is a short test designed to assess knowledge, skills, or
        understanding of a particular subject. It can take various forms, such
        as multiple-choice, true/false, or open-ended questions. Quizzes are
        commonly used in education, games, and online platforms to engage users
        and enhance learning. Timed quizzes add an extra challenge by requiring
        answers within a set time limit. Interactive quizzes help improve
        retention by making learning more engaging and fun. They also provide
        instant feedback, allowing participants to identify areas for
        improvement. Many quizzes use scoring systems to track performance and
        progress. Online quizzes can be dynamic, with randomized questions to
        keep them fresh and challenging. Personality quizzes, often seen on
        social media, are another popular type that categorizes users based on
        their responses. Overall, quizzes are an effective and enjoyable way to
        test knowledge and encourage learning.
      </div>
    </div>
  );
};

export default Home;
