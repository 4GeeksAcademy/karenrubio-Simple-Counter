//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Secondscounter from "./component/secondscounter.jsx";



let seconds = 0;

function countSeconds() {
  seconds = seconds + 1;
  const four = Math.floor(seconds / 1000);
  const three = Math.floor(seconds / 100);
  const two = Math.floor(seconds / 10)
  const one = seconds % 10;

  ReactDOM.render(
    <Secondscounter
      seconds={seconds}
      four={four}
      three={three}
      two={two}
      one={one}
    />,
    document.querySelector("#app")
  );
}

setInterval(countSeconds, 1000);
//render your react application
