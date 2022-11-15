import { useState } from "react"
import CalculatorBoard from "./Components/CalculatorBoard "
import ResultBoard from "./Components/ResultBoard"


function App() {
  const [bill, setBill] = useState("0");
  const [tip, setTip] = useState("0");
  const [person, setPerson] = useState("0");
  const [plus, setPlus] = useState("0");

  const states = [bill, setBill, tip, setTip, person, setPerson, plus, setPlus]

  return (
    <>
      <header>
        <h1 className="header">
          SPLI
          <br />
          TTER
        </h1>
      </header>
      <div className="board">
        <CalculatorBoard states={states} />
        <ResultBoard states={states} />
      </div>
    </>)
}

export default App
