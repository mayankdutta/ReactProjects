import { useState } from "react";
import "./App.css";

function App() {
  const current_date =
    new Date().getHours() +
    " : " +
    new Date().getMinutes() +
    " : " +
    new Date().getSeconds();
  const [count, setCount] = useState(current_date);

  function update_time() {
    const new_current_date =
      new Date().getHours() +
      " : " +
      new Date().getMinutes() +
      " : " +
      new Date().getSeconds();
    setCount(new_current_date);
  }

  return (
    <div className="w-screen h-screen main grid place-content-center space-y-4">
      <div className="font-sans font-mono text-9xl"> {count} </div>
      <button
        className="p-4 font-sans text-5xl font-light bg-red-200 border-8 border-red-200 rounded-full hover:border-red-600 "
        onClick={update_time}
      >
        Click Here
      </button>
    </div>
  );
}

export default App;
