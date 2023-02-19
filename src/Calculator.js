import React from "react";
import "./Calculator.css";

export default function Calculator() {
  return (
    <div className=" container">
      <div className="Calculator">
        <form className="">
          <input type="text" className="col-10"></input>

          <input type="submit" className="col-2" value="="></input>
        </form>
        <div className="buttons row">
          <div className="col-8 numbers">
            {" "}
            <div className="lineOne row">
              <button className="col-4">1</button>
              <button className="col-4">2</button>
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
          </div>
          <div className="col-4 calcute">
            {" "}
            <div className="lineOne row">
              <button className="col-6">+</button>
              <button className="col-6">-</button>
            </div>
            <div className="lineOne row">
              <button className="col-6">/</button>
              <button className="col-6">*</button>
            </div>
            <div className="lineThree row">
              <button className="col-6">^</button>
              <button className="col-6">?</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
