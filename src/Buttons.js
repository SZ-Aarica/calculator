import React, { useState } from "react";
import Calculator from "./Calculator";

export default function Butttons() {
  const [on, setOne] = useState(true);
  function startCalculator() {
    setOne(true);
  }
  return (
    <div className="Buttons">
      <button onClick={startCalculator} className="text-center">
        start
      </button>
      <Calculator on={on} />
    </div>
  );
}
