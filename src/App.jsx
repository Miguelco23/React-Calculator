import { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('0');
  const [isResult, setIsResult] = useState(false);

  const handleNumber = (event) => {

    const number = event.target.textContent;

    if (display === '0' || isResult) {
      setDisplay(number);
      setIsResult(false);
    } else {
      setDisplay(display + number);
    }
  };

  const handleClear = () => {
    setDisplay('0');
    setIsResult(false);
  };

  const handleOperators = (event) => {
    const array = display.split(' ');
    const last = array[array.length - 1];
    setIsResult(false);

    if (event.target.textContent === '-') {
      setDisplay(display + ' ' + event.target.textContent);
    } else if (last === '+' || last === '*' || last === '/' || last === '-') {
      array.pop();
      while (array[array.length - 1] === '-' || array[array.length - 1] === '+' || array[array.length - 1] === '*' || array[array.length - 1] === '/') {
        array.pop();
      }
      setDisplay(array.join(' ') + ' ' + event.target.textContent);
    } else {
      setDisplay(display + ' ' + event.target.textContent);
    }

  };

  const handleEquals = () => {
    let result = eval(display);
    setDisplay(`${result}`);
    setIsResult(true);
  };

  const handleDecimal = () => {
    const array = display.split(' ');
    const last = array[array.length - 1];

    if (!last.includes('.')) {
      setDisplay(display + '.');
    }
  };

  return (
    <div className="App">
      <div className="calculator">
        <div id="display" className="row">{display}</div>
        <div id="clear" className="row" onClick={handleClear}>
          AC
        </div>
        <div id="seven" onClick={handleNumber}>7</div>
        <div id="eight" onClick={handleNumber}>8</div>
        <div id="nine" onClick={handleNumber}>9</div>
        <div id="multiply" onClick={handleOperators}>*</div>
        <div id="four" onClick={handleNumber}>4</div>
        <div id="five" onClick={handleNumber}>5</div>
        <div id="six" onClick={handleNumber}>6</div>
        <div id="divide" onClick={handleOperators}>/</div>
        <div id="one" onClick={handleNumber}>1</div>
        <div id="two" onClick={handleNumber}>2</div>
        <div id="three" onClick={handleNumber}>3</div>
        <div id="add" onClick={handleOperators}>+</div>
        <div id="zero" onClick={handleNumber}>0</div>
        <div id="decimal" onClick={handleDecimal}>.</div>
        <div id="equals" onClick={handleEquals}>=</div>
        <div id="subtract" onClick={handleOperators}>-</div>
      </div>
    </div>
  );
}

export default App;
