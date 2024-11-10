import { useState } from "react";
import "./styles.css";

export default function App() {
  const [state, setState] = useState({
    sign: "",
    numerator: 0,
    denominator: "",
  });

  decimal = () => {
    if (state.sign === "" && state.numerator.includes(".")) {
      return;
    } else if (state.sign !== "" && state.denominator.includes(".")) {
      return;
    } else {
      numberClick(".");
    }
  };

  clear = () => {
    setState({
      sign: "",
      numerator: 0,
      denominator: "",
    });
  };

  numberClick = (input) => {
    if (state.sign === "") {
      if (state.numerator === "-") {
        setState({
          ...state,
          numerator: "-" + input,
        });
      } else if (state.numerator === "0" || state.numerator === 0) {
        setState({
          ...state,
          numerator: input,
        });
      } else {
        setState({
          ...state,
          numerator: state.numerator + input,
        });
      }
    } else {
      setState({
        ...state,
        denominator: state.denominator + input,
      });
    }
  };

  signClick = (input) => {
    if (state.denominator !== "" && state.sign !== "") {
      chainSolve(input);
    } else {
      setState({
        ...state,
        sign: input,
      });
    }
  };

  negativeSign = () => {
    if (state.sign === "" && state.numerator === 0) {
      signClick("-");
      setState({
        ...state,
        numerator: "-",
      });
    } else if (state.sign !== "" && state.denominator === "") {
      setState({
        ...state,
        denominator: "-",
      });
    } else {
      signClick("-");
    }
  };

  solve = () => {
    if (
      state.sign !== "" &&
      state.numerator !== "" &&
      state.denominator !== ""
    ) {
      const num = parseFloat(state.numerator);
      const den = parseFloat(state.denominator);
      setState({
        numerator: String(
          state.sign === "/"
            ? num / den
            : state.sign === "+"
            ? num + den
            : state.sign === "-"
            ? num - den
            : num * den
        ),
        sign: "",
        denominator: "",
      });
    }
  };

  chainSolve = (input) => {
    if (
      state.sign !== "" &&
      state.numerator !== "" &&
      state.denominator !== ""
    ) {
      const num = parseFloat(state.numerator);
      const den = parseFloat(state.denominator);
      setState({
        numerator: String(
          state.sign === "/"
            ? num / den
            : state.sign === "+"
            ? num + den
            : state.sign === "-"
            ? num - den
            : num * den
        ),
        sign: input,
        denominator: "",
      });
    }
  };

  return (
    <div className="App">
      <div id="display">
        {state.numerator}
        {state.sign}
        {state.denominator}
      </div>
      <div id="btn-container">
        <div id="btnSet1">
          <button id="clear" onClick={() => clear()}>
            AC
          </button>
          <button id="divide" onClick={() => signClick("/")}>
            /
          </button>
          <button id="multiply" onClick={() => signClick("*")}>
            X
          </button>
        </div>
        <div id="btnSet2">
          <button id="seven" value="7" onClick={() => numberClick("7")}>
            7
          </button>
          <button id="eight" onClick={() => numberClick("8")}>
            8
          </button>
          <button id="nine" onClick={() => numberClick("9")}>
            9
          </button>
          <button id="subtract" onClick={() => negativeSign()}>
            -
          </button>
        </div>
        <div id="btnSet3">
          <button id="four" onClick={() => numberClick("4")}>
            4
          </button>
          <button id="five" onClick={() => numberClick("5")}>
            5
          </button>
          <button id="six" onClick={() => numberClick("6")}>
            6
          </button>
          <button id="add" onClick={() => signClick("+")}>
            +
          </button>
        </div>
        <div id="btnSet4">
          <button id="one" onClick={() => numberClick("1")}>
            1
          </button>
          <button id="two" onClick={() => numberClick("2")}>
            2
          </button>
          <button id="three" onClick={() => numberClick("3")}>
            3
          </button>
          <button id="equals" onClick={() => solve()}>
            =
          </button>
        </div>
        <div id="btnSet5">
          <button id="zero" onClick={() => numberClick("0")}>
            0
          </button>
          <button id="decimal" onClick={() => decimal()}>
            .
          </button>
        </div>
      </div>
    </div>
  );
}
