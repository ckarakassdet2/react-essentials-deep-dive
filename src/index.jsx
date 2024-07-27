import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./index.css";

const entryPoint = document.getElementById("root");
ReactDOM.createRoot(entryPoint).render(<App />);
// The following code can be used to run for without using react. 
// ReactDOM.createRoot(entryPoint).render(React.createElement(App)); 
