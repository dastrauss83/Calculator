import { useState } from "react";
import "./App.css";
import Calculation from "./Calculation";
import ButtonContainer from "./ButtonContainer";

const App = () => {
  const [calc, setCalc] = useState("0");

  const handleNum = (value) => {
    const indexDot = calc.indexOf(".");
    if (indexDot !== -1 && value === ".") {
      isUniqueDecimalCase(value);
    } else {
      if (calc === "0" || calc === "Undefined") {
        if (value === ".") {
          setCalc("0.");
        } else {
          setCalc(value);
        }
      } else {
        setCalc((prevCalc) => prevCalc.concat(value));
      }
    }
  };

  const isUniqueDecimalCase = (value) => {
    const indexPlus = calc.indexOf("+");
    const indexMinus = calc.indexOf("-");
    const indexDivide = calc.indexOf("/");
    const indexMultiply = calc.indexOf("*");
    const indexDot = calc.indexOf(".");
    const indexNextDot = calc.substring(indexDot + 1).indexOf(".");
    if (
      !(
        indexDot < indexPlus ||
        indexDot < indexMinus ||
        indexDot < indexDivide ||
        indexDot < indexMultiply
      )
    ) {
      return;
    } else if (
      indexNextDot !== -1 &&
      (indexNextDot > indexPlus ||
        indexNextDot > indexMinus ||
        indexNextDot > indexDivide ||
        indexNextDot > indexMultiply)
    ) {
      return;
    } else {
      setCalc((prevCalc) => prevCalc.concat(value));
    }
  };

  const handleOp = (value) => {
    if (isUniqueOpCase(value)) {
      return;
    }

    const newCalc = eval(calc).toString();
    if (calc[0] === "I") {
      setCalc("0");
    } else if (value === "=") {
      setCalc(newCalc);
    } else if (value === "x") {
      setCalc(newCalc.concat("*"));
    } else if (value === "÷") {
      setCalc(newCalc.concat("/"));
    } else {
      setCalc(newCalc.concat(value));
    }
  };

  const isUniqueOpCase = () => {
    if (calc.substring(calc.length - 2, calc.length) === "/0") {
      setCalc("Undefined");
      return true;
    }
    if (calc === "Undefined") {
      setCalc("0");
      return true;
    }
    const lastDig = calc[calc.length - 1];
    if (
      lastDig === "+" ||
      lastDig === "-" ||
      lastDig === "/" ||
      lastDig === "*"
    ) {
      setCalc(calc.substring(0, calc.length - 1));
      return true;
    }
  };

  const handleAct = (value) => {
    if (isUniqueActCase()) {
      return;
    }

    const evalToString = (num) => eval(calc.concat(num)).toString();
    if (calc[0] === "U") {
      setCalc("0");
    } else if (value === "C") {
      setCalc("0");
    } else if (value === "+/-") {
      setCalc(evalToString("*(-1)"));
    } else if (value === "%") {
      setCalc(evalToString("*(.01)"));
    }
  };

  const isUniqueActCase = () => {
    const lastDig = calc[calc.length - 1];
    if (
      lastDig === "+" ||
      lastDig === "-" ||
      lastDig === "/" ||
      lastDig === "*"
    ) {
      setCalc(calc.substring(0, calc.length - 1));
      return true;
    }
  };

  const getShowCalc = () => {
    console.log(calc);
    const lastDig = calc[calc.length - 1];
    const indexDot = calc.indexOf(".");
    if (calc === "Infinity") {
      return "Undefined";
    }

    if (calc.length > 19) {
      return "Excessive";
    }

    if (calc.length > 9) {
      if (indexDot !== -1 && indexDot < 4) {
        return calc.substring(0, 10);
      }
      if (
        lastDig === "+" ||
        lastDig === "-" ||
        lastDig === "/" ||
        lastDig === "*"
      ) {
        return eval(calc.substring(0, calc.length - 1))
          .toExponential(2)
          .toString();
      } else {
        return eval(calc).toExponential(2).toString();
      }
    }
    return calc;
  };

  const handleClick = (value, variant) => {
    if (variant === "Num" || variant === "Zero") {
      handleNum(value);
    } else if (variant === "Op") {
      handleOp(value);
    } else if (variant === "Act") {
      handleAct(value);
    }
  };

  return (
    <div className="App">
      <Calculation value={getShowCalc()} />
      <ButtonContainer onClick={handleClick} />
    </div>
  );
};

export default App;
