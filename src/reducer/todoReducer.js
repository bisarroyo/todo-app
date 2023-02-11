import { AddTodo, RemoveTodo, EditTodo, ToggleTodo, StarredTodo } from '../actions'

const initialState = []

export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case AddTodo:
      return [...state, action.payload]

    case RemoveTodo:
      return state.filter((todo) => todo.id !== action.payload)

    case EditTodo:
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return {
            ...todo,
            description: action.payload.description
          }
        }
        return todo
      })

    case ToggleTodo:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            done: !todo.done
          }
        }
        return todo
      })

    case StarredTodo:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return {
            ...todo,
            starred: !todo.starred
          }
        }
        return todo
      })

    default:
      return state
  }
}
