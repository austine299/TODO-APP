import { useState } from "react";
import "./Body.css";

function Footer(props) {
  const [all, setAll] = useState(false);
  const handleCompleted = () => {
    setIscompleted(true);
  };
  const handleAll = () => {
    setAll(true);
  };

  return (
    <div className="footer-container">
      <div>{props.itemsCount} items left</div>
      <div className="all">
        <span
          onClick={handleAll}
          className={all ? "footer-active" : "none-active"}
        >
          All {props.totalTodo}
        </span>
        <span className="none-active">Active</span>
        <span className="none-active" onClick={handleCompleted}>
          Completed{" "}
        </span>
      </div>
      <div className="clear-completed none-active" onClick={props.clear}>
        Clear Completed
      </div>
    </div>
  );
}

export default Footer;
