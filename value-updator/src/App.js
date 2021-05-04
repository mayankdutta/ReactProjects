import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import { useState } from "react";

function App() {
  const [count, setValue] = useState(0);
  const addOne = () => setValue(count + 1);
  const minusOne = () => setValue(count - 1);
  return (
    <div className='container'>
      <div className='row my-5'>
        <div className='display-1 mx-auto'> {count}</div>
      </div>
      <div className='row'>
        <div
          className='col btn btn-lg btn-success mx-2 rounded-pill'
          onClick={addOne}
        >
          +
        </div>
        <div
          className='col btn btn-lg btn-danger  rounded-pill'
          onClick={minusOne}
        >
          -
        </div>
      </div>
    </div>
  );
}

export default App;
