import React from "react";
import { Question } from "../../components";

const Questions = () => {
  return (
    <div>
      <div className="relative">
        <div className="absolute -left-20 w-screen h-screen">
          <Question />
        </div>
      </div>
    </div>
  );
};

export default Questions;
