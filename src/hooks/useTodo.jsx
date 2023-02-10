import { useReducer } from 'react'
import { todoReducer } from '../reducer/todoReducer'
import { AddTodo, RemoveTodo, EditTodo, ToggleTodo } from '../actions'

export const useTodo = () => {
  const [todos, dispatch] = useReducer(todoReducer, [])

  const handleAddTodo = (todo) => {
    const action = {
      type: AddTodo,
      payload: todo
    }
    dispatch(action)
  }

  const handleRemoveTodo = (todo) => {
    const action = {
      type: RemoveTodo,
      payload: todo
    }
    dispatch(action)
  }

  const handleEditTodo = (id, description) => {
    const action = {
      type: EditTodo,
      payload: {
        id,
        description
      }
    }
    dispatch(action)
  }

  const handleToggleTodo = (todo) => {
    const action = {
      type: ToggleTodo,
      payload: todo
    }
    dispatch(action)
  }

  return {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleEditTodo,
    handleToggleTodo
  }
}
