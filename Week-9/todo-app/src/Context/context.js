import React, { useReducer, createContext } from 'react'

import contextReducer from './contextReducer';

const intialState = JSON.parse(localStorage.getItem('todos')) || [];

export const TodoListContext = createContext(intialState);

export const Provider = ({children}) => {

    const [todos, dispatch ] = useReducer(contextReducer, intialState);

    // action creators
    const deleteTodo = (id) => {
        dispatch({type:'DELETE_TODO', payload:id});
    }

    const addTodo = (todo) => {
        dispatch({type:'ADD_TODO', payload:todo})
    }

    const markTodo = (id) => {
        dispatch({type:'MARK_TODO', payload:id})
    }
    
    return(
        <TodoListContext.Provider value={{
            deleteTodo,
            addTodo,
            markTodo,
            todos
        }}>
            {children}
        </TodoListContext.Provider>
    )
}