import {
  AddTodo,
  RemoveTodo,
  RemovePermanentTodo,
  setEdit,
  EditTodo,
  setFilter,
  ToggleTodo,
  StarredTodo,
  NotificationTodo
} from '../actions'
import { useAppContext } from './useAppContext'

export const useTodo = () => {
  const { todos, dispatch } = useAppContext()

  const handleAddTodo = (todo) => {
    const action = {
      type: AddTodo,
      payload: todo
    }
    dispatch(action)
  }

  const handleRemoveTodo = (id) => {
    const action = {
      type: RemoveTodo,
      payload: id
    }
    dispatch(action)
  }
  const handleRemoveTodoPermanent = (id) => {
    const action = {
      type: RemovePermanentTodo,
      payload: id
    }
    dispatch(action)
  }

  const setEditing = (todo) => {
    const action = {
      type: setEdit,
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
  const handleFilterTodo = (filter) => {
    const action = {
      type: setFilter,
      payload: filter
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

  const handleNotification = () => {
    const action = {
      type: NotificationTodo,
      payload: ''
    }
    dispatch(action)
  }

  return {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleRemoveTodoPermanent,
    setEditing,
    handleEditTodo,
    handleFilterTodo,
    handleToggleTodo,
    handleStarredTodo,
    handleNotification
  }
}
