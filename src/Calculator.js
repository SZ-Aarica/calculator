import React from "react";
import { useState } from "react";
import "./Calculator.css";

export default function Calculator() {
  const [temp, setTemp] = useState("");
  const [value, setValue] = useState("");
  const [calculate, setCalculate] = useState("");
  const ClickOne = () => {
    setTemp(temp + "1");
    setValue(temp);
  };
  const ClickTwo = () => {
    setTemp(temp + "2");
    setValue(temp);
  };
  //props = null;
  //if cculate button were clicked convertt the value which us String to Integer and store it
  //
  const addClick = () => {
    parseInt(value, 10);
    setCalculate("x  ");
  };

  return (
    <div className="container">
      <div className="Calculator">
        <div className="row">
          <h2 className="col-6">2</h2>
          <h3 className="col-6">{calculate}</h3>
        </div>

        <form className="row">
          <h1 className="col-10">{value}</h1>

          <input type="submit" className="col-2" value="="></input>
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
              <button className="col-4">3</button>
            </div>
            <div className="lineTwo row">
              <button className="col-4">4</button>
              <button className="col-4">5</button>
              <button className="col-4">6</button>
            </div>
            <div className="lineThree row">
              <button className="col-4">7</button>
              <button className="col-4">8</button>
              <button className="col-4">9</button>
            </div>
            <div className="lineFour row">
              <button className="col-4">+/-</button>
              <button className="col-4">0</button>
              <button className="col-4">.problem</button>
            </div>
          </div>
          <div className="col-4 calcute">
            {" "}
            <div className="lineOne row">
              <button className="col-6" onClick={addClick}>
                +
              </button>
              <button className="col-6">-</button>
            </div>
            <div className="lineTwo row">
              <button className="col-6">/</button>
              <button className="col-6">*</button>
            </div>
            <div className="lineThree row">
              <button className="col-6">^</button>
              <button className="col-6">√</button>
            </div>{" "}
            <div className="lineFour row">
              <button className="col-6">%</button>
              <button className="col-6">C</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
