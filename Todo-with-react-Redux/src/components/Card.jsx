import React,{useState} from 'react'
import TodoForm from './TodoForm'
import TodoDesign from './TodoDesign'
import { clearTodo } from '../feature/TodoSlice'
import { useSelector, useDispatch } from 'react-redux'
import UpdateForm from './UpdateForm'

function Card() {
  const todos = useSelector((state) => state.todos);
  const toggleForm = useSelector((state) => state.toggleForm)
  const dispatch = useDispatch();

  console.log(todos)
    
  return (
    <div className='flex flex-col justify-center items-center w-1/2 mx-auto mt-5 rounded-lg bg-blue-700 p-2'>
        <h1 className=' text-white font-bold'> Manage Todo</h1>
        <div className='mt-2'>
            {toggleForm ? <TodoForm/> : <UpdateForm/>}
        </div>
        <ul
          className='w-full px-2  '
        >
          {todos.map((todo) =>(
            <li key={todo.id}
            className='w-full mt-3'
            >
              <TodoDesign id={todo.id} text={todo.text}  />

            </li>
          ))}
        </ul>

        <div className='mt-3'>
          <button 
            onClick={() => dispatch(clearTodo())}
            className='bg-yellow-600 text-lg font-bold px-3 rounded-lg'>Clear</button>
        </div>
      
    </div>
  )
}

export default Card
