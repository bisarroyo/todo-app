import { ItemStyle } from './ItemStyle'
import { MdDelete, MdEdit } from 'react-icons/md'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'

export const Item = ({ todo, handleDelete, handleEdit, handleToggle, handleStarred }) => {
  // const { form, handleChange } = useForm({
  //   id: todo.id,
  //   description: todo.description
  // })

  // const { id, description } = form

  return (
    <ItemStyle>
      {/* <input type='text' name='description' value={description} onChange={handleChange} /> */}
      <div className='item-info'>
        <input type='checkbox' onChange={() => handleToggle(todo.id)} checked={todo.done} />
        <p className={`${todo.done && 'todo-done'}`}>{todo.description}</p>
      </div>
      <div className='item-controls'>
        <button onClick={() => handleStarred(todo.id)}>
          {
            todo.starred
              ? <AiFillStar />
              : <AiOutlineStar />
          }
        </button>
        <button onClick={() => handleDelete(todo.id)}><MdDelete /></button>
        <button onClick={() => handleEdit(todo.id, 'description')}><MdEdit /></button>
      </div>
    </ItemStyle>
  )
}
