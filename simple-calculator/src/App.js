import add from "./components/add";
import sub from "./components/sub";
import mul from "./components/mul";
import divide from "./components/divide";

function App() {
  const list = {
    backgroundColor: "red",
    fontSize: "4rem",
  };
  const ul = {
    backgroundColor: "yellow",
    display: "grid",
    justifyContent: "center",
    alignContent: "center",
    height: "100vh",
    width: "100%",
  };
  return (
    <div className='App'>
      <ul style={ul}>
        <li style={list}> value of sum is {add(1, 2)}</li>
        <li style={list}> value of subtraction is {sub(1, 2)}</li>
        <li style={list}> value of mutliplication is {mul(1, 2)}</li>
        <li style={list}> value of Divison is {divide(1, 2)}</li>
      </ul>
    </div>
  );
}

export default App;
