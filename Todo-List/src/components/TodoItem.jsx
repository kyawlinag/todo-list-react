import React from 'react'

const TodoItem = ({ todo, index, completeTodo, removeTodo}) => {
  return (
    <div
    className="todo-item"
    style={{ textDecoration: todo.isCompleted ? "line-through" : " "}}
    >
      <span>{todo.text}</span>
      <div>
        <button onClick={() => completeTodo(index)}
        >Complete</button>
        <button onClick={() => removeTodo(index)}>x</button>
      </div>
    </div>
  )
}

export default TodoItem
