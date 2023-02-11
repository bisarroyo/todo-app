import { Item } from '../components/Item'

export const TodosList = ({ todos, handleDelete, handleEdit, handleToggle, handleStarred }) => {
  return (
    <div>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <Item
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleToggle={handleToggle}
              handleStarred={handleStarred}
            />
          </div>
        ))
      }
    </div>
  )
}
