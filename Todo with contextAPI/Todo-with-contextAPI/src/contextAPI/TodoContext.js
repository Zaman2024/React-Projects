import { createContext, useContext } from "react";

export const TodoContext = createContext({
    Todos : [
        {
            id: 1,
            tittle: "Hellow World",
            complete : false
        },
        {
            id: 1,
            tittle: "Hellow Zaman",
            completed : false
        }
    ],
    addTodo: (tittle) =>{},
    removeTodo : (id) =>{},
    updateTodo: (id, tittle) => {},
    toggleComplete: (id) =>{}
})

export const useTodo =() => {
    return useContext(TodoContext);
}

export const TodoProvider = TodoContext.Provider