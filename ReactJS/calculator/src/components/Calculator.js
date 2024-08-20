import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Calculator() {
  const [input1, setInput1] = useState(0);
  const [input2, setInput2] = useState(0);
  const [result, setResult] = useState(null);

  const handleCalculate = (operator) => {
    const num1 = parseInt(input1);
    const num2 = parseInt(input2);
    let res;
    if (isNaN(num1) || isNaN(num2)) {
      setResult("Vui lòng nhập số!");
      return;
    }
    switch (operator) {
      case "+":
        res = num1 + num2;
        break;
      case "-":
        res = num1 - num2;
        break;
      case "*":
        res = num1 * num2;
        break;
      case "/":
        if (num2 === 0) {
          setResult("Không thể chia cho 0!");
          return;
        }
        res = num1 / num2;
        break;
      default:
        res = 0;
    }

    setResult(res);
  };

  return (
    <div className="container w-auto shadow-sm w-25 p-5 text-center mt-5">
      <h2>Máy tính cá nhân</h2>
      <div className="mb-2">
        <input type="number"value={input1} onChange={(e) => setInput1(e.target.value)}/>
      </div>
      <div>
        <input type="number" value={input2} onChange={(e) => setInput2(e.target.value)} />
      </div>
      <h3>Kết quả: {result}</h3>
      <div className="">
        <button className="btn btn-sm btn-secondary me-2" onClick={() => handleCalculate("+")}>+</button>
        <button className="btn btn-sm btn-secondary me-2" onClick={() => handleCalculate("-")}>-</button>
        <button className="btn btn-sm btn-secondary me-2" onClick={() => handleCalculate("*")}>*</button>
        <button className="btn btn-sm btn-secondary" onClick={() => handleCalculate("/")}>/</button>
      </div>
    </div>
  );
}

export default Calculator;
