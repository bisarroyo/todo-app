import { useState } from 'react'
import { Add } from './components/Add'
import { TodosList } from './containers/TodosList'

function App () {
  const [todos, setTodos] = useState([
  ])

  const handleAddTodo = (newTodo) => {
    setTodos([
      ...todos,
      newTodo
    ])
  }

  console.log(todos)
  return (
    <>
      <Add onNewTodo={handleAddTodo} />
      <TodosList todos={todos} />
    </>
  )
}

export default App
