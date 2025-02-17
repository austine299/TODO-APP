import React, { useState } from "react";

function TodoList(props) {
  const [mytext, setMyText] = useState(false);

  function textStyle() {
    setMyText(true);
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
          {props.hidechecked === true ? (
            <input
              type="checkbox"
              className="checkbox"
              onClick={() => {
                textStyle();
                props.onClick();
              }}
            />
          ) : (
            <></>
          )}{" "}
          <span
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
        <span onClick={props.delete}>X</span>
      </li>
    </div>
  );
}

export default TodoList;
