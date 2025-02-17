import React, { useState } from "react";
import TodoList from "./todo/TodoList";
import "./Body.css";
// import Footer from "./Footer";
import ModeToggle from "./ModeToggle";

function TodoBody() {
  const [inputText, setInputText] = useState("");
  const [items, setItems] = useState([]);
  const [err, setErr] = useState("");
  const [toggleMode, setToggleMode] = useState(false);
  // const [block, setBlock] = useState("");
  const [all, setAll] = useState(false);
  const [completedTodos, setCompletedTodos] = useState([]);

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

  let count = items.filter((item) => item).length;
  const total = items.length;

  const deleteTodo = (index) => {
    setItems(items.filter((item, i) => i !== index));

    // let reducedTod = [...items];
    // reducedTod.splice((item, i) => i !== index);
    // setItems(reducedTod);
  };

  const handlecompletedTodos = (index) => {
    let filteredItems = items;

    let updateCompleteArr = [...completedTodos];
    updateCompleteArr.push(filteredItems);
    setCompletedTodos(updateCompleteArr);
    console.log((count -= 2));
    deleteTodo(index);
  };

  const clear = () => {
    setCompletedTodos([]);
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
          {all === true &&
            items.map((todoItem, index) => (
              <div className="text-list">
                <li>
                  <TodoList
                    key={index}
                    id={index}
                    mytext={todoItem}
                    onChange={count}
                    delete={() => deleteTodo(index)}
                    onClick={handlecompletedTodos}
                    hidechecked={all}
                  />
                </li>
              </div>
            ))}

          {all === false &&
            completedTodos.map((todoItem, index) => (
              <div className="text-list">
                <li>
                  <TodoList
                    key={index}
                    id={index}
                    mytext={todoItem}
                    hidechecked={all}
                  />
                </li>
              </div>
            ))}

          <div className="footer-container">
            <div>{count} items left</div>
            <div className="all">
              <span
                onClick={() => setAll(true)}
                className={all === true ? "footer-active" : "none-active"}
              >
                All {total}
              </span>
              <span className="none-active">Active</span>
              <span
                onClick={() => setAll(false)}
                className={all === false ? "footer-active" : "none-active"}
              >
                Completed{" "}
              </span>
            </div>
            <div className="clear-completed none-active" onClick={clear}>
              Clear Completed
            </div>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default TodoBody;
