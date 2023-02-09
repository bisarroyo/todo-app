import { Item } from '../components/Item'

export const TodosList = ({ todos }) => {
  return (
    <div>
      {
        todos.map((todo) => (
          <div key={todo.id}>
            <Item todo={todo.description} />
          </div>
        ))
      }
    </div>
  )
}
