import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Room() {
  const [isLit, setLit] = useState(true);
  const [temp, setTemp] = useState(22);

  return (
    <div>
      <div className={"box-div" + (isLit ? "" : " box-div-dark")}>
        The Room is {isLit ? "Lit" : "Dark"}
        <p className={"temprature" + (temp >= 32 ? " high-temp" : "")}>
          {(temp < 4 ? "Freezing " : "")} {(temp >= 4 && temp < 18 ? "Cold " : "")} {(temp >= 18 && temp < 32 ? "Normal " : "")} {(temp >= 32 ? "Hot " : "")} Temprature: {temp} &#176;C
        </p>

        <button className={'button' + (isLit ? "" : " box-div-dark")} onClick={() => setLit(!isLit)}>
          {isLit ? "TURN OFF" : "TURN ON"}
        </button>

        <button className={'button' + (isLit ? "" : " box-div-dark")} onClick={() => setTemp(temp - 1)}>
          -
        </button>
        <p className={"temp-toggle" + (isLit ? "" : " box-div-dark")}>CHANGE TEMP</p>
        <button className={'button' + (isLit ? "" : " box-div-dark")} onClick={() => setTemp(temp + 1)}>
          +
        </button>
      </div>



      <div className='box-div-2'>

      </div>
    </div>
  )
}

ReactDOM.render(<Room />, document.querySelector('#root'));