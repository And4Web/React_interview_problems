import { useState } from "react";
import { GoTriangleDown, GoTriangleUp } from "react-icons/go";
import data from "./data";
import "./style.css";

// this project started at 10:00 and ended at 30:48

// single selection
// multi selection
function Accordian() {
  const [selected, setSelected] = useState<boolean>(false);
  const [currentId, setCurrentId] = useState<number>(0);
  const [enableMulti, setEnableMulti] = useState<boolean>(false);
  const [multipleIndeces, setMultipleIndeces] = useState<number[]>([]);

  const handleSingleSelection = (id: number) => {
    setSelected(true);
    setCurrentId(currentId !== id ? id : 0);
  };

  const setMultipleSelection = () => {
    setMultipleIndeces([]);
    setEnableMulti(!enableMulti);
    setSelected(!selected)
  }

  const handleMultiSelection = (index: number) => {
    // setSelected(!selected);
    
    const tempArr = [...multipleIndeces];

    // console.log(tempArr.indexOf(index));

    if(tempArr.indexOf(index) === -1) {
      tempArr.push(index)
    }else {
      tempArr.splice(tempArr.indexOf(index), 1)
    }

    setMultipleIndeces(tempArr)
  };

  // console.log( selected, enableMulti, multipleIndeces);
  return (
    <div className="container">
      <h3>What's your question about T20 World cup?</h3>
      <button className="acc-btn" onClick={setMultipleSelection}>{
        enableMulti? "Disable Multi Selection" : "Enable Multi Selection"}</button>

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
                  onClick={() => enableMulti ? handleMultiSelection(item.id) : handleSingleSelection(item.id)}
                >
                  {!enableMulti ? (selected && (currentId === item.id) ? (
                    <GoTriangleUp />
                  ) : (
                    <GoTriangleDown />
                  )):(selected && (multipleIndeces.includes(item.id)) ? (
                    <GoTriangleUp />
                  ) : (
                    <GoTriangleDown />
                  ))}
                </span>
              </div>
              {enableMulti ? (selected && multipleIndeces.includes(item.id) && <div className="acc-answer">{item.answer}</div>) : (selected && currentId === item.id) && (
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
