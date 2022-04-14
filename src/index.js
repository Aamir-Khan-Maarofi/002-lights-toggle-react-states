import './index.css';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';

function Room() {
  const [isLit, setLit] = useState(true);

  return (
    <div>
      <div className={"box-div" + (isLit ? "" : " box-div-dark")}>
        The Room is {isLit ? "Lit" : "Dark"}
      </div>

      <div className='box-div-2'>
        <button className={'button' + (isLit ? "" : " box-div-dark")} onClick={() => setLit(false)}>
          TURN ON
        </button>

        <button className={'button' + (isLit ? "" : " box-div-dark")} onClick={() => setLit(true)}>
          TURN OFF
        </button>
      </div>
    </div>
  )
}

ReactDOM.render(<Room />, document.querySelector('#root'));