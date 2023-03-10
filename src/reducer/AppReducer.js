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
  switch (action.type) {
    case AddTodo:
      return {
        ...state,
        todos: [...state.todos, action.payload]
      }

    case RemoveTodo:
      return {
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

    case RemovePermanentTodo:
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload)
      }

    case setEdit:
      return {
        ...state,
        editing: action.payload
      }

    case EditTodo:
      return {
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

    case setFilter:
      return {
        ...state,
        filtering: `${action.payload}`
      }

    case ToggleTodo:
      return {
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

    case StarredTodo:
      return {
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

    default:
      return state
  }
}
