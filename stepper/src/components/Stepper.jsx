import React, { useState } from "react";
import "./stepper.css";

export default function Stepper({ numOfSteps }) {
  const [current, setCurrent] = useState(1);

  const circles = Array.from({ length: numOfSteps }, (_, i) => {
    return (
      <>
        <div
          key={i}
          className={current >= i + 1 ? "activeCircle" : "circle"}
        ></div>
        {i < numOfSteps - 1 && <div>line</div>}
      </>
    );
  });

  const handleAdd = () => {
    if (current === numOfSteps) {
      return;
    }
    setCurrent((prev) => prev + 1);
  };

  const handleMinus = () => {
    if (current === 1) {
      return;
    }
    setCurrent((prev) => prev - 1);
  };
  return (
    <div>
      <div style={{ display: "flex" }}>{circles}</div>
      <button onClick={handleMinus}>Prev</button>
      <button onClick={handleAdd}>Next</button>
      <p>{current}</p>
    </div>
  );
}
