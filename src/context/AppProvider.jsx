import { useReducer } from 'react'
import { AppReducer } from '../reducer/AppReducer'
import { AppContext } from './AppContext'

const storedData = window.localStorage.getItem('todos')
const parsedData = JSON.parse(storedData)
const todos = parsedData || []

const initialState = {
  todos,
  editing: {},
  filtering: '',
  loading: false,
  error: null,
  notification: 'test'
}

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState)

  const { todos, editing, filtering, loading, error, notification } = state

  return (
    <AppContext.Provider
      value={{
        todos,
        editing,
        filtering,
        loading,
        error,
        notification,
        dispatch
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
