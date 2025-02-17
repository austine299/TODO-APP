import React, { useState } from "react";
import TodoList from "./todo/TodoList";
import "./Body.css";
import Footer from "./Footer";
import ModeToggle from "./ModeToggle";

function TodoBody() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");
  const [toggleMode, setToggleMode] = useState(false);
  // const [block, setBlock] = useState("");

  const handleToggle = () => {
    setToggleMode(!toggleMode);
  };

  function handleChange(event) {
    const newValue = event.target.value;
    setInputText(newValue);
  }

  function addItem() {
    if (inputText === "") {
      setErr("please input something here");
    } else {
      setItems((prevItems) => {
        return [...prevItems, inputText];
      });
      setErr("");
    }

    setInputText("");
  }

  const count = items.filter((item) => item).length;
  const completed = items.filter((item) => item).length;
  const total = items.length;

  const deleteTodo = (index) => {
    setItems(items.filter((item, i) => i !== index));
  };

  return (
    <div className="body" data-theme={toggleMode ? "dark" : "light"}>
      <div className="header-container">
        <div>
          <h2>TODO</h2>
          <span className="" onClick={handleToggle}>
            <ModeToggle />
          </span>
        </div>
      </div>
      <div className="body-content">
        <div className="text-container">
          <input
            onChange={handleChange}
            type="text"
            className="text"
            value={inputText}
          />
          <input
            className="button-add"
            type="submit"
            value="Add"
            onClick={addItem}
          />
        </div>
        <span style={{ color: "red" }}>{err}</span>
        <ul className="item-list">
          {items.map((todoItem, index) => (
            <div className="text-list">
              <li>
                <TodoList
                  key={index}
                  id={index}
                  mytext={todoItem}
                  onClick={() => deleteTodo(index)}
                  completed={completed}
                />
              </li>
            </div>
          ))}

          <Footer itemsCount={count} totalTodo={total} completed={completed} />
        </ul>
      </div>
    </div>
  );
}

export default TodoBody;
