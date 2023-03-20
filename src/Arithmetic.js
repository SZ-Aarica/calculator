import React, { forwardRef, useImperativeHandle, useState } from "react";
import Calculator from "./Calculator";

const Arithmetic = forwardRef((props, ref) => {
  const [inititalValue, setInititalValue] = useState();
  function determineCalculation() {
    if (props.calculate === "+") {
      setInititalValue(parseInt(props.number1, 10) + parseInt(props.number2));
    }
  }
  //
  useImperativeHandle(ref, () => ({
    log() {
      return parseInt(props.number1, 10) + parseInt(props.number2);
    },
  }));
  return (
    <Calculator
      on={false}
      answer={parseInt(props.number1, 10) + parseInt(props.number2)}
    />
  );
});
export default Arithmetic;
