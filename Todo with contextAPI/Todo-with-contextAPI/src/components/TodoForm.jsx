import React, {useState} from 'react'
import { useTodo } from '../contextAPI/index'

function TodoForm() {
    const [todo, setTodo] = useState([])
    const {addTodo} = useTodo()

    const add = (e) => {
        e.preventDefault()

    if(!todo) return 
        addTodo({todo, completed: false})
        setTodo('')
    }


  return (
    <form onSubmit={add}>
        <div className='w-full flex justify-center items-center p-1'>
            <input 
                type="text"
                value={todo}
                onChange={(e) => setTodo(e.target.value)}
                placeholder='Write Todo'
                className=' p-1 rounded-s-lg outline-none w-full'

            />
            <div>
                <button
                    type='submit'
                    className='bg-green-700 text-white px-3 py-1 rounded-e-lg'
                 >
                Add
                </button>
            </div>
        </div>
      
    </form>
  )
}

export default TodoForm
