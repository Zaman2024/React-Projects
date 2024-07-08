import React, {useState} from 'react'
import { useDispatch } from 'react-redux'

function UpdateForm() {
    const [update, setUpdate] = useState('');
    const dispatch = useDispatch();

    const handleSubmit =(e)=> {
        e.preventDefault();

        if(/^\s*$/.test(update)){
            dispatch()

        }else{

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
                className='bg-red-700 text-white px-2 text-lg font-semibold rounded-e-lg'
            >
                Update
            </button>
        </div>
      
    </form>
  )
}

export default UpdateForm
