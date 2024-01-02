import React, { useCallback, useState } from "react";

const BMI = () => {
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);

  const handleCalculations = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid details");
    } else {
      const bmiFormula = (weight / (height * height)) * 703;
      setBmi(bmiFormula.toFixed(2));
    }
  };

  const resetForm = () => {
    setWeight("");
    setHeight("");
    setBmi(null);
  };

  return (
    <div className="app">
      <div className="container">
        <h1 className="title">BMI Calculation</h1>
        <form onSubmit={handleCalculations}>
          <div>
            <label className="labels">Weight:</label>
            <br />
            <input
              className="bmi-input"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>

          <div>
            <label className="labels">Height:</label>
            <br />
            <input
              className="bmi-input"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>

          <div>
            <button className="btn" type="submit">
              Calculate
            </button>
            <button
              className="btn btn-reload"
              type="button"
              onClick={resetForm}
            >
              Reload
            </button>
          </div>

          <div className="result">
            <h3>Your BMI is: {bmi !== null ? bmi : "N/A"}</h3>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BMI;
