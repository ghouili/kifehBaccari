import React, { useState } from "react";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const questions = [
  "Existe-t-il un comité de sécurité du système d’information ?",
  "Existe-il un RSSI dans la société, avec une fiche de poste, ainsi qu’une délégation formelle mentionnant ses attributions et ses moyens d’actions ?",
  "Les informations confidentielles à protéger sont elles identifiées ?",
  "La société procède-t-elle régulièrement à une évaluation des risques, et a-t-elle procédé évaluation en terme d’impact ?",
  "La société a-t-elle identifié les risques liés aux types d’accès possible pour les tiers externes (physique, logique depuis l’extérieur, logique depuis l’intérieur) ?",
  "La société a-t-elle procédé à la mise en place des mesures de contrôle d’accès adaptées avant d’ouvrir l’accès au SI à des tiers externes ?",
  // Add more questions here
];

const Question = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  const handleNextQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full h-full bg-LightBGColor flex flex-col gap-4 justify-center items-center  ">
      <h1 className=" text-4xl font-extrabold leading-loose _gradient__text ">
        {" "}
        Organisation de la sécurité de l’information{" "}
      </h1>
      <div
        className=" w-2/3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-10 py-8 
      shadow-md rounded-md text-white font-serif  "
      >
        <h1 className="text-3xl font-bold mb-4">
          Question 0{currentQuestionIndex + 1}:
        </h1>
        <h2 className="text-3xl font-semibold">{currentQuestion}</h2>
        <div className="flex items-center justify-end gap-10 mt-10 ">
          <h2
            className="px-4 py-2 border-2 border-white text-white text-xl font-semibold rounded-md cursor-pointer  hover:bg-white hover:text-red-700   "
            onClick={() => alert("btn clicked")}
          >
            NON
          </h2>

          <h2
            className="px-4 py-2 border-2 border-white text-white text-xl font-semibold rounded-md cursor-pointer  hover:bg-white hover:text-blue-700   "
            onClick={() => alert("btn clicked")}
          >
            OUI
          </h2>
        </div>
        <div className="flex items-center justify-center gap-10 text-white font-medium">
          <button
            className="text-white text-xl hover:text-2xl transition-all ease-in-out duration-300 flex items-center gap-1"
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
          >
            <div className="flex gap-0">
              <MdKeyboardArrowLeft />
              <MdKeyboardArrowLeft className="-ml-3" />
            </div>
            <h1>Prev</h1>
          </button>
          <button
            className="text-white text-xl hover:text-2xl transition-all ease-in-out duration-300 flex items-center gap-1"
            onClick={handleNextQuestion}
            disabled={currentQuestionIndex === questions.length - 1}
          >
            <h1>Next</h1>
            <div className="flex gap-0">
              <MdKeyboardArrowRight />
              <MdKeyboardArrowRight className="-ml-3" />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Question;
