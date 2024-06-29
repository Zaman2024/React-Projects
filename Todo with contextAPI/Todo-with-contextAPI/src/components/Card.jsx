import { useEffect, useState } from 'react'
import { TodoProvider } from './contextAPI/index'
import TodoForm from './components/TodoForm'

import './App.css'
import SingleTodo from './components/SingleTodo'

function Card() {
  const [todos, setTodos] = useState([])


const addTodo = (todo) => {
  setTodos((prev) =>[{id:Date.now(), ...todo}, ...prev])
}

const removeTodo =(id) =>{
  setTodos((prev) => prev.filter((todo) => todo.id !==id))
}
const updateTodo = (id, todo) => {
  setTodos((prev) => prev.map((prevTodo) => (todo.id ===id ? todo : prevTodo)))
  
}

const toggleComplete =(id) =>{
  setTodos((prev)=> prev.map((prevTodo) => prevTodo.id ===id ? {...prevTodo, completed : !prevTodo.completed}:prevTodo))
}


useEffect(() => {
 const todos= JSON.parse(localStorage.getItem('Todos'))

 if(todos && todos.length > 0) {
  setTodos (todos)
 }

}, [])

useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos))
}, [todos])

  return (
    <TodoProvider value={{addTodo, removeTodo, updateTodo, toggleComplete}}>
      <div className='flex flex-col items-center mx-40 bg-slate-700'>
      <h1 className=' text-white'>Zaman</h1>
      <div className=' bg-slate-700 p-2'>
          <div className=''>
            <TodoForm/>
          </div>
          <div>
            <ul>
              {todos.map((todo) => (
                <li key = {todo.id} 
                className=' mt-2'
                >
                  <SingleTodo todo={todo} />
                </li>
              ))}
            </ul>
          </div>
      </div>
      </div>
    </TodoProvider>
  )
}

export default Card
