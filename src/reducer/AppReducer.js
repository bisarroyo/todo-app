import {
  AddTodo,
  RemoveTodo,
  RemovePermanentTodo,
  setEdit,
  EditTodo,
  setFilter,
  ToggleTodo,
  StarredTodo
} from '../actions'

const initialState = []

export const AppReducer = (state = initialState, action) => {
  let data = null
  switch (action.type) {
    case AddTodo:
      data = {
        ...state,
        todos: [...state.todos, action.payload],
        notification: 'TODO added'
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case RemoveTodo:
      data = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              deleted: !todo.deleted
            }
          }
          return todo
        })
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case RemovePermanentTodo:
      data = {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
        notification: 'Deleted permanent'
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case setEdit:
      return {
        ...state,
        editing: action.payload
      }

    case EditTodo:
      data = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload.id) {
            return {
              ...todo,
              description: action.payload.description
            }
          }
          return todo
        })
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case setFilter:
      return {
        ...state,
        filtering: `${action.payload}`
      }

    case ToggleTodo:
      data = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              done: !todo.done
            }
          }
          return todo
        })
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    case StarredTodo:
      data = {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === action.payload) {
            return {
              ...todo,
              starred: !todo.starred
            }
          }
          return todo
        })
      }
      window.localStorage.setItem('todos', JSON.stringify(data.todos))
      return data

    default:
      return state
  }
}
