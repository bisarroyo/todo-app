import toast, { Toaster } from 'react-hot-toast'

import { Add } from '../components/Add'
import { TodosList } from '../containers/TodosList'
import { TodosStyle } from './TodosStyle'
import { Edit } from '../components/Edit'
import { Filter } from '../components/Filter'

import { useTodo } from '../hooks/useTodo'
import { useState } from 'react'
import { useEffect } from 'react'

const notify = (text) =>
  toast.success(text, {
    duration: 4000,
    position: 'bottom-right'
  })

export const Todos = () => {
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

  const [notification, setNotification] = useState(todos.notification)

  console.log(todos)
  useEffect(() => {
    notify(notification)
  }, notification)

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
