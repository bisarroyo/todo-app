import { Toaster } from 'react-hot-toast'

import { Add } from '../components/Add'
import { TodosList } from '../containers/TodosList'
import { TodosStyle } from './TodosStyle'
import { Edit } from '../components/Edit'
import { Filter } from '../components/Filter'

import { UseNotification } from '../hooks/useNotificarions'

import { useTodo } from '../hooks/useTodo'

export const Todos = () => {
  UseNotification()
  const {
    todos,
    handleAddTodo,
    handleRemoveTodo,
    handleRemoveTodoPermanent,
    setEditing,
    handleEditTodo,
    handleToggleTodo,
    handleStarredTodo
  } = useTodo()

  return (
    <TodosStyle>
      <section>
        <h1>My day</h1>
        <Add onNewTodo={handleAddTodo} />
        <Filter />
        <TodosList
          todos={todos}
          handleDelete={handleRemoveTodo}
          handleDeletePermanent={handleRemoveTodoPermanent}
          handleEdit={setEditing}
          handleToggle={handleToggleTodo}
          handleStarred={handleStarredTodo}
        />
      </section>
      <section>
        <h2>Info</h2>
        <Edit handleEdit={handleEditTodo} />
      </section>
      <Toaster />
    </TodosStyle>
  )
}
