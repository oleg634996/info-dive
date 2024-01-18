
import { useState } from "react";

function Score({ infoDive }) {
const [inputValue, setInputValue] = useState({
  input1: "",
  input2: "",
  input3: "",
});
  const [sumInput ,setSumInput]= useState()


const inputChange = (event) => {
  const { name, value } = event.target;
  console.log(value);
  if (value === "10") {
    return setInputValue((prev) => ({ ...prev, [name]: value }));
  }
  const app =
    value.replace(/\.$/gm, "").length === 2
      ? value[0] + ".5"
      : value.replace(/\.$/gm, "");

  setInputValue((prev) => ({ ...prev, [name]: app }));
  };
  
  const clickButton = () => {
    const { input1, input2, input3 } = inputValue;
    setSumInput(Number(input1) + Number(input2) + Number(input3))
    
    setInputValue({
      input1: "",
      input2: "",
      input3: "",
    });
  }
const score = sumInput* Number(infoDive);
console.log(sumInput, "full");
return (
  <>
    <h2 className="subtitel">Сума стрибка</h2>
    <div className="rating">
      <input
        name="input1"
        value={inputValue.input1}
        onChange={inputChange}
        inputMode="numeric"
        maxLength={2}
        className="input-rating"
      />
      <input
        name="input2"
        value={inputValue.input2}
        onChange={inputChange}
        inputMode="numeric"
        maxLength={2}
        className="input-rating"
      />
      <input
        name="input3"
        value={inputValue.input3}
        onChange={inputChange}
        inputMode="numeric"
        maxLength={2}
        className="input-rating"
      />
    </div>
    <p className="score" style={{ fontSize: "30px", fontWeight: "900" }}>
      {score.toFixed(2)}
    </p>
    <button
      onClick={clickButton}
      type="button"
      className="btn"
      style={{ marginBottom: "10px" }}
    >
      Розрахувати
    </button>
  </>
);
}
export default Score;
