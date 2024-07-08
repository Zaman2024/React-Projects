import React, {useState} from 'react'
import { todoUpdated } from '../feature/TodoSlice';
import {useSelector, useDispatch } from 'react-redux'

function UpdateForm() {
    const todoToUpdate = useSelector((state) => state.updateTodo)
    const [update, setUpdate] = useState(todoToUpdate.text);
    const dispatch = useDispatch();

    const handleSubmit =(e) => {
        e.preventDefault();

        if(/^\s*$/.test(update)){
            alert('Enter new Text')
            setUpdate('')

        }else{
            dispatch(todoUpdated({
                id:todoToUpdate.id,
                text:update
            }))
        }

    }
  return (
    <form onSubmit={handleSubmit}
        className='w-full'
    >
        <div>
            <input
                type='text'
                value={update}
                onChange={(e) => setUpdate(e.target.value)}
                placeholder='Update Todo'
                className='w-96 px-2 text-lg font-semibold outline-none rounded-s-lg'
            />

            <button
                type='submit'
                className='bg-red-700 text-white px-2 text-lg font-semibold rounded-e-lg'
            >
                Update
            </button>
        </div>
      
    </form>
  )
}

export default UpdateForm
