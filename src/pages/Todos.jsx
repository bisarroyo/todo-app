import { Add } from '../components/Add'
import { TodosList } from '../containers/TodosList'

import { useTodo } from '../hooks/useTodo'

export const Todos = () => {
  const { todos, handleAddTodo, handleRemoveTodo, handleEditTodo } = useTodo()
  console.log(todos)

  return (
    <>
      <Add onNewTodo={handleAddTodo} />
      <TodosList
        todos={todos}
        handleDelete={handleRemoveTodo}
        handleEdit={handleEditTodo}
      />
    </>
  )
}
