import { useState } from 'react'
import { TodosContext } from './TodosContext'

export const TodosProvider = ({ children }) => {
  const [todos, setTodos] = useState()
  return (
    <TodosContext.Provider value={{ todos, setTodos }}>
      {children}
    </TodosContext.Provider>
  )
}
