import { useState } from "react";
import data from "./data";
import "./style.css";
import { BiMinus, BiPlus } from "react-icons/bi";

// this project started at 10:00 and ended at 30:48

// single selection
// multi selection
function Accordian() {
  const [selected, setSelected] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const [enableMulti, setEnableMulti] = useState<boolean>(false);

  const handleSingleSelection = (id: number) => {
    setSelected(true);
    setCurrentId(currentId !== id ? id : 0);
  };

  const handleMultiSelection = (currentId: number) => {};

  console.log(selected, enableMulti, currentId);
  return (
    <div className="container">
      <h3>What's your question about T20 World cup?</h3>
      <button className="acc-btn">Enable Multi Selection</button>

      {!data ? (
        <>No Data found!</>
      ) : (
        data.map((item, index) => {
          return (
            <div className="acc-wrapper" key={index}>
              <div className="acc-question">
                <span>{item.question}</span>

                <span
                  className="acc-icon"
                  onClick={() => handleSingleSelection(item.id)}
                >
                  {selected && (currentId === item.id) ? (
                    <BiMinus />
                  ) : (
                    <BiPlus />
                  )}
                </span>
              </div>
              {selected && currentId === item.id && (
                <div className="acc-answer">{item.answer}</div>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}

export default Accordian;
