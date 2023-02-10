import { MdDelete, MdEdit } from 'react-icons/md'

export const Item = ({ todo, handleDelete, handleEdit }) => {
  return (
    <div>
      <p>{todo.description}</p>
      <button onClick={() => handleDelete(todo.id)}><MdDelete /></button>
      <button onClick={() => handleEdit(todo.id, 'edit')}><MdEdit /></button>
    </div>
  )
}
