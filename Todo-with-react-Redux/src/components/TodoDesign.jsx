import React from "react";
import { useDispatch } from "react-redux";
import { removeTodo, toggleInputForm } from "../feature/TodoSlice";

function TodoDesign(props) {
  const [done, setDone] = React.useState(false)
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between items-center bg-yellow-600 px-2 rounded-lg">
      <div className="flex">
        <input 
          type="checkbox"
          onChange = {()=> setDone(!done)}
          className="cursor-pointer"
        />

        <h1 className={`${done? 'line-through font-semibold':''}`}
        >{props.text}</h1>
      </div>
      <div className="m-1">
        <button
          onClick={() =>
            dispatch(
              toggleInputForm({
                id: props.id,
                text: props.text,
              })
            )
          }
          className="bg-green-700 text-white font-bold mx-2 px-2 rounded-lg"
        >
          Edit
        </button>
        <button
          onClick={() => dispatch(removeTodo(props.id))}
          className="bg-red-700 text-white font-bold px-2 rounded-lg "
        >
          X
        </button>
      </div>
    </div>
  );
}

export default TodoDesign;
