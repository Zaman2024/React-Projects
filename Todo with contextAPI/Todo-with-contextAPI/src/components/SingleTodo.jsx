import React, { useState } from 'react'
import { useTodo } from '../contextAPI'

function SingleTodo({todo}) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, removeTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id,{...todo, todo:todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted =() =>{
    toggleComplete(todo.id)
  }


  return (
    <div>
      <div className='bg-yellow-500 px-2 py-1 rounded-lg'>
        <input 
          type="checkbox"
          checked={todo.completed}
          onChange={toggleCompleted}
          />
        <input 
          type="text"
          value={todoMsg}
          onChange={(e) => setTodoMsg(e.target.value)}
          readOnly ={!isTodoEditable}
          className={`bg-transparent mx-1 px-2 outline-none rounded-lg ${isTodoEditable ? 'bg-yellow-700': ''} ${todo.completed? 'line-through':''}`}

          />
          
            <button
              onClick={() => {
                if(todo.completed) return;
                if(isTodoEditable){
                  editTodo()
                } else setIsTodoEditable((prevTodo) => !prevTodo)
              }}
              disabled={todo.completed}
              className={`bg-green-500 text-white text-lg px-2 rounded-lg mx-1 ${isTodoEditable? 'bg-red-700':''}`}
            >
              {isTodoEditable? 'Save':'Edit'}
            </button>

            <button 
              onClick={() => removeTodo(todo.id)}
              className='bg-red-500 text-white text-lg px-2 rounded-lg'>
              X
            </button>
        
      </div>
      
    </div>
  )
}

export default SingleTodo
