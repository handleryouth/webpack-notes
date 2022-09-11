import React, { useState } from "react";
import { render } from "react-dom";
import { result } from "./something";

//if you want to use css from webpack, don't forget to import it
import "../style.css";
import "../style2.css";

function App() {
  const [state, setState] = useState("CLICK ME");

  return <button onClick={() => setState("CLICKED")}>{state}</button>;
}

render(<App />, document.getElementById("root"));
