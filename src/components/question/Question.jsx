import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import Cookies from "universal-cookie";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
} from "@material-tailwind/react";

import { HiHome } from "react-icons/hi";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

import Report from "../report/Report";
import { path } from "../../utils/Variables";

const Question = ({ questions, isoid }) => {
  const cookies = new Cookies();
  let user = cookies.get("user");
  // console.log(questions);
  const [openPDF, setOpenPDF] = useState(false);
  const [open, setOpen] = useState(false);
  const [PDF, setPDF] = useState(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [items, setItems] = useState([]);

  const handleOpen = () => setOpen(!open);
  const handleOpenPDF = () => {
    setPDF(null);
    setOpenPDF(!openPDF);
  };

  useEffect(() => {
    // Fetch initial items from the response API
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get(`${path}response/user/${user?._id}`);
      setItems(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const addItem = async (newItem) => {
    try {
      // const check = items.map((item) =>
      //   item.questionid === newItem.questionid ? false : item
      // );

      // console.log("check");
      // console.log(newItem);
      // if(check !== false) {
      //   await axios.put(`${path}response/${check[0]._id}`, newItem);
      //   return handleNextQuestion();
      // }
      console.log("add");
      // Push the updated array to the response API
      let result = await axios.post(`${path}response/add`, newItem);
      // console.log(result.data.data);

      // Add the new item to the local array
      const updatedItems = [...items, result.data.data];
      setItems(updatedItems);
      return handleNextQuestion();
    } catch (error) {
      console.error(error);
    }
  };

  const generatepdf = async () => {
    const result = await axios.get(`${path}report/${isoid}/${user?._id}`);
    console.log(result.data);
    if (result.data.success) {
      setTimeout(() => {
        setPDF(`${path}uploads/files/${result.data.data.document}`);
        console.log(`${path}uploads/files/${result.data.data.document}`);
        setOpen(!open);
        setOpenPDF(!openPDF);
      }, 3500);
    }
  };
  // const deleteItem = async (itemId) => {
  //   try {
  //     // Remove the item from the local array
  //     const updatedItems = items.filter((item) => item.id !== itemId);
  //     setItems(updatedItems);

  //     // Push the updated array to the response API
  //     await axios.delete(`${path}response/${itemId}`);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  // const updateItem = async (itemId, updatedItem) => {
  //   try {
  //     // Update the item in the local array
  //     const updatedItems = items.map((item) =>
  //       item.id === itemId ? updatedItem : item
  //     );
  //     setItems(updatedItems);

  //     // Push the updated array to the response API
  //     await axios.put(`${path}response/${itemId}`, updatedItem);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 > questions.length + 1) {
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex - 1 < 0) {
      return;
    }
    setCurrentQuestionIndex((prevIndex) => prevIndex - 1);
  };

  const currentQuestion = questions[currentQuestionIndex];

  return (
    <div className="w-full h-full bg-LightBGColor flex flex-col gap-4 justify-center items-center  ">
      <h1 className=" text-4xl font-extrabold leading-loose _gradient__text ">
        {currentQuestion?.pratiqueid?.pratique}
      </h1>
      {currentQuestionIndex + 1 > questions.length ? (
        <div
          className=" w-2/3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-10 py-8 
      shadow-md rounded-md text-white font-serif  "
        >
          <h1 className="text-3xl font-bold mb-4">Done</h1>
          <h2 className="text-3xl font-semibold">
            {currentQuestion?.question}
          </h2>
          <div className="flex items-center justify-end gap-10 mt-10 ">
            <h2
              className="px-4 py-2 border-2 border-white text-white text-xl font-semibold rounded-md cursor-pointer  hover:bg-white hover:text-red-700   "
              onClick={handleOpen}
            >
              Display result
            </h2>
          </div>
          {/* <div className="flex items-center justify-center gap-10 text-white font-medium">
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
            <HiHome size={26} />
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
        </div> */}
        </div>
      ) : (
        <div
          className=" w-2/3 bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl px-10 py-8 
      shadow-md rounded-md text-white font-serif  "
        >
          <h1 className="text-3xl font-bold mb-4">
            Question 0{currentQuestionIndex + 1}:
          </h1>
          <h2 className="text-3xl font-semibold">
            {currentQuestion?.question}
          </h2>
          <div className="flex items-center justify-end gap-10 mt-10 ">
            <h2
              className="px-4 py-2 border-2 border-white text-white text-xl font-semibold rounded-md cursor-pointer  hover:bg-white hover:text-red-700   "
              onClick={() =>
                addItem({
                  response: "non",
                  userid: user?._id,
                  questionid: currentQuestion?._id,
                })
              }
            >
              NON
            </h2>

            <h2
              className="px-4 py-2 border-2 border-white text-white text-xl font-semibold rounded-md cursor-pointer  hover:bg-white hover:text-blue-700   "
              onClick={() =>
                addItem({
                  response: "oui",
                  userid: user?._id,
                  questionid: currentQuestion?._id,
                })
              }
            >
              OUI
            </h2>
          </div>
          {/* <div className="flex items-center justify-center gap-10 text-white font-medium">
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
              <HiHome size={26} />
            </button>
            {currentQuestionIndex + 1 === questions.length ? (
              <button
                className="text-white text-xl hover:text-2xl transition-all ease-in-out duration-300 flex items-center gap-1"
                onClick={handleOpen}
              >
                <h1>Result</h1>
              </button>
            ) : (
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
            )}
          </div> */}
        </div>
      )}

      <Fragment>
        <Dialog size="lg" open={open} handler={handleOpen}>
          <DialogBody
            divider
            className="overflow-auto"
            style={{ maxHeight: "80vh" }}
          >
            <Report responses={items} isoid={isoid} />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpen}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
            <Button variant="gradient" color="blue" onClick={generatepdf}>
              <span>Generate PDF</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>

      <Fragment>
        <Dialog size="lg" open={openPDF} handler={handleOpenPDF}>
          <DialogBody
            divider
            className="overflow-auto"
            style={{ maxHeight: "80vh" }}
          >
            <embed
              src={PDF}
              // src={`${path}document/show/${pdf}`}
              typeof="application/pdf"
              type="application/pdf"
              width="100%"
              height="400px"
              className="rounded-md"
            />
          </DialogBody>
          <DialogFooter>
            <Button
              variant="text"
              color="red"
              onClick={handleOpenPDF}
              className="mr-1"
            >
              <span>Cancel</span>
            </Button>
          </DialogFooter>
        </Dialog>
      </Fragment>
    </div>
  );
};

export default Question;
