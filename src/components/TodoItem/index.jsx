import React from "react";

function TodoItem({ todo }) {
  return (
    <div>
      <input type="checkbox" checked={todo.completed} /> {todo.id}. {todo.title}{" "}
      <button>{"<"}</button> {todo.quantity}
      <button>{">"}</button>
    </div>
  );
}

export default TodoItem;
