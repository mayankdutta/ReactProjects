import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import data from "./Database/data";
import "bootstrap/dist/css/bootstrap.min.css";

function Card(props) {
  const card_style = {
    width: "18rem",
  };
  return (
    <div class='card' style={card_style}>
      <img src={props.poster} class='card-img-top' alt='...' />
      <div class='card-body'>
        <h5 class='card-title'>{props.title}</h5>
        <p class='card-text'>{props.overview}</p>
      </div>
    </div>
  );
}

const Grid_it = {
  display: "grid",
  gridTemplateColumns: "auto auto auto",
  gridRowGap: "2rem",
};

ReactDOM.render(
  <React.StrictMode>
    <div className='display-1'>Hello there</div>
    <div className='container' style={Grid_it}>
      {data.map((d) => {
        return (
          <Card
            id={d.id}
            title={d.title}
            poster={d.poster}
            overview={d.overview}
          />
        );
      })}
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
