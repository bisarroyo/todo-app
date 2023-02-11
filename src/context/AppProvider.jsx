import { useReducer } from 'react'
import { AppReducer } from '../reducer/AppReducer'
import { AppContext } from './AppContext'

const initialState = {
  todos: [],
  editing: null,
  loading: false,
  error: null
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const { todos, editing, loading, error } = state

  return (
    <AppContext.Provider value={{ todos, editing, loading, error, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
