import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { question } from "../constants/index";
import { useState } from "react";

const Question = () => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen((prev) => !prev)} className="question">
      <h1>{question[0].question}</h1>
      {open ? <FiMinusCircle color={"black"} /> : <FiPlusCircle color="gray" />}

      <p className="text-[12px] text-gray-400 inline-block">
        {question[0].answer}
      </p>
    </div>
  );
};

export default Question;
