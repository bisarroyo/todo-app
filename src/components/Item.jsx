/* eslint-disable multiline-ternary */
import { ItemStyle } from './ItemStyle'
import { MdDelete, MdEdit } from 'react-icons/md'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { FaTrashRestore } from 'react-icons/fa'
import { useAppContext } from '../hooks/useAppContext'

export const Item = ({
  todo,
  handleDelete,
  handleEdit,
  handleToggle,
  handleStarred
}) => {
  const { deleted } = useAppContext()
  return (
    <ItemStyle>
      <div className='item-info'>
        <input
          type='checkbox'
          onChange={() => handleToggle(todo.id)}
          checked={todo.done}
        />
        <p className={`${todo.done && 'todo-done'}`}>{todo.description}</p>
      </div>
      <div className='item-controls'>
        <button onClick={() => handleStarred(todo.id)} disabled={todo.done}>
          {todo.starred ? <AiFillStar /> : <AiOutlineStar />}
        </button>
        {deleted ? (
          <button onClick={() => handleDelete(todo.id)}>
            <FaTrashRestore />
          </button>
        ) : (
          <button onClick={() => handleDelete(todo.id)}>
            <MdDelete />
          </button>
        )}

        <button onClick={() => handleEdit(todo)} disabled={todo.done}>
          <MdEdit />
        </button>
      </div>
      {/* <p>
        {todo.date.getDay()} {todo.date.getDate()}
      </p> */}
    </ItemStyle>
  )
}
