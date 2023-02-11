import { Add } from '../components/Add'
import { TodosList } from '../containers/TodosList'
import { TodosStyle } from './TodosStyle'
import { Edit } from '../components/Edit'

import { useTodo } from '../hooks/useTodo'

export const Todos = () => {
  const { todos, handleAddTodo, handleRemoveTodo, handleEditTodo, handleToggleTodo, handleStarredTodo } = useTodo()
  console.log(todos)

  return (
    <TodosStyle>
      <section>
        <h2>Menu</h2>
      </section>
      <section>
        <h1>My To-dos</h1>
        <Add onNewTodo={handleAddTodo} />
        <TodosList
          todos={todos}
          handleDelete={handleRemoveTodo}
          handleEdit={handleEditTodo}
          handleToggle={handleToggleTodo}
          handleStarred={handleStarredTodo}
        />
      </section>
      <section>
        <h2>Info</h2>
        <Edit todos={todos} />
      </section>
    </TodosStyle>
  )
}
