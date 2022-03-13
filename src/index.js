import React from "react";
import ReactDOM from "react-dom";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./components/counter";
//引入css
import "./css/index.css";

const name = "Rico";
const age = 18;
const isLoading = false;
const func = () => "heeeee!";
const loadData = () => {
  if (isLoading) {
    return <h1>loading======</h1>;
  }
  return <div>数据加载失败</div>;
};

const songs = [
  { id: 1, name: "rico" },
  { id: 1, name: "syc" },
  { id: 1, name: "sky" },
  { id: 1, name: "sry" },
];
const list = (
  <ul>
    {songs.map((item) => (
      <li key={item.id}>{item.name}</li>
    ))}
  </ul>
);

const body = (
  <h1 className="hi">
    Hello JSX,<span>{name}</span>,{age}岁的男人
    {func()}
    {loadData()}
    {list}
  </h1>
);

ReactDOM.render(body, document.getElementById("root"));
