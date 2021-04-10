import "./App.css";
import { useProductsContext } from "./Context";
const Memory = ["MC", "MR", "MS", "M+", "M-"];
const MarkLeft = ["+/-", "pi", "C"];
const numbers = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0, "."];
const MarkRight = ["%", "|", "x", "+", "-", "/", "="];

function App() {
  const {
    screenNumber,
    changeNumber,
    flipNumber,
    pai,
    clearNumber,
    percentage,
    rootSquare,
    saveMemo,
    clearScreen,
    resetClearScreen,
    saveMark,
    calculation,
  } = useProductsContext();
  const clickNumber = (id) => {
    changeNumber(id);
    resetClearScreen();
  };
  const clickMarkLeft = (id) => {
    if (id === "+/-") {
      flipNumber();
    } else if (id === "pi") {
      pai();
    } else if (id === "C") {
      clearNumber();
    } else if (id.target.dataset.id === "%") {
      percentage();
    } else if (id.target.dataset.id === "|") {
      rootSquare();
    } else if (id.target.dataset.id === "=") {
      calculation();
    } else {
      saveMark(id);
      saveMemo();
      clearScreen();
    }
  };

  return (
    <div className='calculator-container'>
      <div className='screen'>
        <div id='m'>M</div>
        <input
          type='number'
          className='input-screen'
          value={screenNumber}
        ></input>
      </div>
      <div className='memory-container'>
        {Memory.map((item) => {
          return (
            <button id={item} className='item memory-item'>
              {item}
            </button>
          );
        })}
      </div>
      <div className='below-container'>
        <div className='mark-left'>
          {MarkLeft.map((item) => {
            return (
              <button
                id={item}
                className='item mark-item'
                onClick={() => clickMarkLeft(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className='numbers-middle'>
          {numbers.map((item) => {
            return (
              <button
                data-id={item}
                className={`item number-item item${item}`}
                onClick={(item) => clickNumber(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div className='mark-right'>
          {MarkRight.map((item) => {
            return (
              <button
                data-id={item}
                className={
                  item === "=" ? "item mark-item plus" : "item mark-item"
                }
                onClick={(item) => clickMarkLeft(item)}
              >
                {item}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
