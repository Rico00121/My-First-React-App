import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";

const name = "Rico";
const age = 18;
const func = () => "heeeee!";
const title = (
  <h1 className="hi">
    Hello JSX,<span>{name}</span>,{age}岁的男人
    {func()}
  </h1>
);

ReactDOM.render(title, document.getElementById("root"));
