import { MdDelete, MdEdit } from 'react-icons/md'
import { useForm } from '../hooks/useForm'

export const Item = ({ todo, handleDelete, handleEdit }) => {
  const { form, handleChange } = useForm({
    id: todo.id,
    description: todo.description
  })

  const { id, description } = form

  return (
    <div>
      <input type='text' name='description' value={description} onChange={handleChange} />
      <button onClick={() => handleDelete(id)}><MdDelete /></button>
      <button onClick={() => handleEdit(id, description)}><MdEdit /></button>
    </div>
  )
}
