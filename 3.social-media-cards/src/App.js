import logo from "./logo.svg";
import "./App.css";

function App(props) {
  return (
    <div className='App'>
      <h1>props.id</h1>
      <h1>props.title</h1>
      <h1>props.poster</h1>
      <h1>props.overview</h1>
      <h1>props.release_date</h1>
      <h1>props.genres</h1>
    </div>
  );
}

export default App;
