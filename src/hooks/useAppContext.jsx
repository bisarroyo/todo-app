import { useContext } from 'react'
import { TodosContext } from '../context/TodosContext'

export const useAppContext = () => {
  return useContext(TodosContext)
}
