import React, { useEffect, useState } from "react";
import axios from "axios";

import { Question } from "../../components";
import { path } from "../../utils/Variables";
import { useParams } from "react-router-dom";

const OneQuestion = () => {
  const params = useParams();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    // Fetch questions based on the ISO when the component mounts
    fetchQuestionsByISO(params.id);
  }, []);

  const fetchQuestionsByISO = async (iso) => {
    try {
      const response = await axios.get(`${path}question/iso/${iso}`);
      // console.log("response");
      // console.log(response.data.data);
      setQuestions(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <div className="relative">
        <div className="absolute -left-20 w-screen h-screen">
          {questions.length === 0 ? null : <Question questions={questions} isoid={params.id} />}
        </div>
      </div>
    </div>
  );
};

export default OneQuestion;
