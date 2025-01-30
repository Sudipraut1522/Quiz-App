import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../page/Home";
import Question from "../page/Question";
import Quiz from "../page/Quiz";

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/question" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
