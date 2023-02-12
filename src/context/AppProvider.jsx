import { useReducer } from 'react'
import { AppReducer } from '../reducer/AppReducer'
import { AppContext } from './AppContext'

const initialState = {
  todos: [],
  editing: {},
  show: {
    pending: true,
    starred: false,
    done: false
  },
  loading: false,
  error: null
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const { todos, editing, show, loading, error } = state

  return (
    <AppContext.Provider
      value={{ todos, editing, loading, error, show, dispatch }}
    >
      {children}
    </AppContext.Provider>
  )
}
