import React from 'react'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import './index.css'

const App = () => {

  const [todos, setTodos] = React.useState([
    {
      text: "Learn React Hooks",
      isCompleted: false
    },
    {
      text: "Meet friend for lunch",
      isCompleted: false
    },
    {
      text: "Build really cool todo app",
      isCompleted: false
    }
  ])

  const addTodo = text => {
    const newTodos = [...todos, {text, isCompleted: false}]
    setTodos(newTodos)
  }

  const completeTodo = index => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = true
    setTodos(newTodos)
  }

  const removeTodo = index => {
    const newTodos = [...todos]
    newTodos.splice(index, 1)
    setTodos(newTodos)
  }

  return (
    <div className="app">
      <h1>My React Todo List</h1>
      <TodoForm addTodo={addTodo}/>
      <TodoList 
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
      />
    </div>
  )
}

export default App
