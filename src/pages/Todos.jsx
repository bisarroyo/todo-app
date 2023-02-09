import { useState } from 'react'
import { Add } from '../components/Add'
import { TodosList } from '../containers/TodosList'

export const Todos = () => {
  const [todos, setTodos] = useState([
  ])

  const handleAddTodo = (newTodo) => {
    setTodos([
      ...todos,
      newTodo
    ])
  }

  const handleDelete = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id)
    setTodos(newTodos)
  }

  console.log(todos)
  return (
    <>
      <Add onNewTodo={handleAddTodo} />
      <TodosList
        todos={todos}
        handleDelete={handleDelete}
      />
    </>
  )
}
