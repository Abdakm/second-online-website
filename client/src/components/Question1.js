import { FiPlusCircle } from "react-icons/fi";
import { FiMinusCircle } from "react-icons/fi";
import { useState } from "react";

const Question1 = ({question, answer, index}) => {
  const [open, setOpen] = useState(false);
  return (
    <div onClick={() => setOpen((prev) => !prev)} className="question">
      <div className="flex items-center justify-between w-full">
        <h1>{index}. {question}</h1>
        {open ? <FiMinusCircle color={"black"} /> : <FiPlusCircle color="gray" />}
      </div>
      <p className={`answer transition-all duration-200 ${open ? 'max-h-[45px]' : 'max-h-0'}`}>{answer}</p>
    </div>
  );
};

export default Question1;
