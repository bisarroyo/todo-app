import { Item } from '../components/Item'
import { useAppContext } from '../hooks/useAppContext'

export const TodosList = ({
  todos,
  handleDelete,
  handleEdit,
  handleToggle,
  handleStarred
}) => {
  const { filtering } = useAppContext()
  return (
    <div>
      {todos
        .filter((item) => {
          if (filtering === 'deleted') {
            return item.deleted === true
          }
          if (filtering === 'pending') {
            return item.starred !== true && item.done !== true
          }
          if (filtering === 'starred') {
            return item.starred === true
          }
          if (filtering === 'done') {
            return item.done === true
          }
          return item
        })
        .map((todo) => (
          <div key={todo.id}>
            <Item
              todo={todo}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
              handleToggle={handleToggle}
              handleStarred={handleStarred}
            />
          </div>
        ))}
    </div>
  )
}
