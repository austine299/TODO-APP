import "./Body.css";

function Footer(props) {
  return (
    <div className="footer-container">
      <div>{props.itemsCount} items left</div>
      <div className="all">
        <span>All {props.totalTodo}</span>
        <span>Active</span>
        <span>Completed {props.completed}</span>
      </div>
      <div className="clear-completed">Clear Completed</div>
    </div>
  );
}

export default Footer;
