import { useReducer } from 'react'
import { AppReducer } from '../reducer/AppReducer'
import { AppContext } from './AppContext'

const initialState = {
  todos: [],
  editing: {},
  filtering: '',
  loading: false,
  error: null
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const { todos, editing, filtering, loading, error } = state

  return (
    <AppContext.Provider
      value={{ todos, editing, loading, error, filtering, dispatch }}
    >
      {children}
    </AppContext.Provider>
  )
}
