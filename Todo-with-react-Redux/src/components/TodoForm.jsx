import React,{useState} from 'react'
import { addTodo } from '../feature/TodoSlice';
import { useDispatch } from 'react-redux'

function TodoForm() {
    const [input, setInput] = useState('');
    const dispatch = useDispatch();


const handleSubmit =(e) => {
    e.preventDefault();

    if(/^\s*$/.test(input)){
        alert('Please enter a Valide Todo')
        setInput('')
    } else{
        dispatch(addTodo(input))
        setInput('')
    }
}

  return (
    <form onSubmit={handleSubmit}
    className=' w-full'
    >
        <div className='w-max'>
            <input 
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder='Write Todo' 
                className='w-96 px-2 text-lg font-semibold outline-none rounded-s-lg'
                />

            <button
                type='submit'
                className='bg-green-600 px-2 text-lg font-semibold rounded-e-lg'
            >
                Add
            </button>

        </div>
    </form>
  )
}

export default TodoForm
