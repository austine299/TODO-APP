import React, { useState } from "react";

function TodoList(props) {
  const [mytext, setMyText] = useState(false);
  function textStyle() {
    setMyText(!mytext);
  }

  return (
    <div className="list-container">
      <li className="hover-triger">
        <div
          style={{
            display: "flex",
            gap: "2rem",
          }}
        >
          <input type="checkbox" className="checkbox" onClick={textStyle} />{" "}
          <span
            onClick={props.completed}
            style={{
              textDecoration: mytext ? "line-through" : "none",
              color: mytext
                ? "var(--todo-list-text-color) "
                : "var(--primary-text-color)",
            }}
          >
            {props.mytext}
          </span>
        </div>
      </li>
      <li className="delete">
        <span onClick={props.onClick}>X</span>
      </li>
    </div>
  );
}

export default TodoList;
