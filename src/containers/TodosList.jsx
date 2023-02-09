import { Item } from '../components/Item'

export const TodosList = ({ todos, handleDelete, handleEdit }) => {
  return (
    <div>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <Item
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          </div>
        ))
      }
    </div>
  )
}
