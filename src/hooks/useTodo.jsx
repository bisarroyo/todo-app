import { useReducer } from 'react'
import { todoReducer } from '../reducer/todoReducer'
import { AddTodo, RemoveTodo, EditTodo, ToggleTodo, StarredTodo } from '../actions'

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

  const handleToggleTodo = (id) => {
    const action = {
      type: ToggleTodo,
      payload: id
    }
    dispatch(action)
  }

  const handleStarredTodo = (id) => {
    const action = {
      type: StarredTodo,
      payload: id
    }
    dispatch(action)
  }

  return {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleEditTodo,
    handleToggleTodo,
    handleStarredTodo
  }
}
