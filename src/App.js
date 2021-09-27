import React, {useState} from "react"
import './App.css';

function Todo({todo, removeTodo, completeTodo, index}) {

  return (
    <div className="todo" style={{textDecoration: todo.isCompleted ? "line-through" : ""}}>
      {todo.text}
      <button onClick = {removeTodo}>Remove Todo</button>
      <button onClick = {() => completeTodo(index)}>Complete Todo</button>
    </div>
  )
}

function AddTodo({addTodo}) {
  const [value, setValue] = useState("")

  const handleSubmit = e => {
    // forgot about parentheses on preventDefault()
    e.preventDefault();
    if (!value) return alert("please write something");
    addTodo(value);
    setValue("")
  } 

  return (
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      value={value}
      onChange={e => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </form>
  )
}

function App() {
  // googled about the square brackets in React useState im dumb :₽
  const [todos, setTodos] = useState([
    {
      text: "Hi React",
      isCompleted: false
    },
    {
      text: "My first todo app",
      isCompleted: false
    },
    {
      text: "Lets go",
      isCompleted: false
    }
    ])

  const addTodo = (text) => {
    const newTodos = [...todos, {text}]
    setTodos(newTodos)
  }  

  const removeTodo = (index) => {
    const newTodos = [...todos]
    newTodos.splice(newTodos[index], 1)
    setTodos(newTodos)
  }

  const completeTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].isCompleted = !newTodos[index].isCompleted
    setTodos(newTodos)
  }

  return (
    <div className="app">
      {todos.map((todo, index) => (
        <Todo
        todo={todo}
        index={index}
        key={index}
        removeTodo={removeTodo}
        completeTodo={completeTodo}
        />
      ))}
      <AddTodo
      addTodo={addTodo}
      />
    </div>
  );
}

export default App;
