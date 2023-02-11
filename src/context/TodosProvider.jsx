import { useReducer } from 'react'
import { todoReducer } from '../reducer/todoReducer'
import { TodosContext } from './TodosContext'

const initialState = {
  todos: [],
  editing: null
}

export const TodosProvider = ({ children }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState)

  const { todos, editing } = state

  return (
    <TodosContext.Provider value={{ todos, editing, dispatch }}>
      {children}
    </TodosContext.Provider>
  )
}
