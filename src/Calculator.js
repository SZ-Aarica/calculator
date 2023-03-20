import { useState } from "react";
import "./Calculator.css";
import Arithmetic from "./Arithmetic";
import React, { forwardRef, useEffect, useRef } from "react";

export default function Calculator(props) {
  const [temp, setTemp] = useState(" ");
  const [value, setValue] = useState(" ");
  const [calculate, setCalculate] = useState("--");
  const [number, setNumber] = useState("--");
  const ClickOne = () => {
    setTemp(temp + "1");
  };
  const ClickTwo = () => {
    setTemp(temp + "2");
  };
  const ClickThree = () => {
    setTemp(temp + "3");
  };
  const ClickFour = () => {
    setTemp(temp + "4");
  };
  const ClickFive = () => {
    setTemp(temp + "5");
  };
  const ClickSix = () => {
    setTemp(temp + "6");
  };
  const ClickSeven = () => {
    setTemp(temp + "7");
  };
  const ClickEight = () => {
    setTemp(temp + "8");
  };
  const ClickNine = () => {
    setTemp(temp + "9");
  };
  const ClickZero = () => {
    setTemp(temp + "0");
  };

  const signClick = () => {
    setTemp("-" + temp);
  };

  const ClearButton = () => {
    setValue(" ");
    setTemp(" ");
    setCalculate("--");
    setNumber("--");
  };
  //props = null;
  //if cculate button were clicked convertt the value which is String to Integer and store it
  //and give the calculate the calculator * + - /
  function clearPreviousValue() {
    setNumber(value);
    setTemp(" ");
    setValue(" ");
  }
  const addClick = () => {
    setCalculate("+");
    clearPreviousValue();
    //console.log(number, value, temp);
  };
  const subClick = () => {
    setCalculate("-");
    clearPreviousValue();
  };
  const multiplyClick = () => {
    setCalculate("X");
    clearPreviousValue();
  };
  const divisionClick = () => {
    setCalculate("÷");
    clearPreviousValue();
  };
  const powerClick = () => {
    setCalculate("^");
    clearPreviousValue();
  };
  const rootClick = () => {
    setCalculate("√");
    clearPreviousValue();
  };

  //------------------------------------function to update face when you chose number
  useEffect(() => {
    setValue(temp);
  }, [temp]);

  //when = clicked the first value is already turned to string -> so turn the second input
  //that is still in string and do the calculation
  const ref = useRef();
  const ClickEqual = (event) => {
    //ehrn this button is clicked
    //call the chilled function in Arthmectic to callculate data
    event.preventDefault();
    ref.current.log();

    console.log(props.answer);
  };

  if (props.on) {
    return (
      <div className="container">
        <div className="Calculator">
          <div className="row">
            <h2 className="col-6">{number}</h2>
            <h3 className="col-6">{calculate}</h3>
          </div>
          <form className="row">
            <h1 className="col-10">{value}</h1>

            <input
              type="submit"
              className="col-2"
              value="="
              onClick={ClickEqual}
            ></input>
          </form>
          <div className="buttons row">
            <div className="col-8 numbers">
              {" "}
              <div className="lineOne row">
                <button className="col-4" onClick={ClickOne}>
                  1
                </button>
                <button className="col-4" onClick={ClickTwo}>
                  2
                </button>
                <button className="col-4" onClick={ClickThree}>
                  3
                </button>
              </div>
              <div className="lineTwo row">
                <button className="col-4" onClick={ClickFour}>
                  4
                </button>
                <button className="col-4" onClick={ClickFive}>
                  5
                </button>
                <button className="col-4" onClick={ClickSix}>
                  6
                </button>
              </div>
              <div className="lineThree row">
                <button className="col-4" onClick={ClickSeven}>
                  7
                </button>
                <button className="col-4" onClick={ClickEight}>
                  8
                </button>
                <button className="col-4" onClick={ClickNine}>
                  9
                </button>
              </div>
              <div className="lineFour row">
                <button className="col-4" onClick={signClick}>
                  +/-
                </button>
                <button className="col-4" onClick={ClickZero}>
                  0
                </button>
                <button className="col-4">.problem</button>
              </div>
            </div>
            <div className="col-4 calcute">
              {" "}
              <div className="lineOne row">
                <button className="col-6" onClick={addClick}>
                  +
                </button>
                <button className="col-6" onClick={subClick}>
                  -
                </button>
              </div>
              <div className="lineTwo row">
                <button className="col-6" onClick={divisionClick}>
                  ÷
                </button>
                <button className="col-6" onClick={multiplyClick}>
                  X
                </button>
              </div>
              <div className="lineThree row">
                <button className="col-6" onClick={powerClick}>
                  ^
                </button>
                <button className="col-6" onClick={rootClick}>
                  √
                </button>
              </div>{" "}
              <div className="lineFour row">
                <button className="col-6">%</button>
                <button className="col-6" onClick={ClearButton}>
                  C All
                </button>
              </div>
            </div>
          </div>
          <Arithmetic
            ref={ref}
            number1={number}
            number2={value}
            calculate={calculate}
          />
          ;
        </div>
      </div>
    ); //send variable to another component and return the value
  } else return null;
}
