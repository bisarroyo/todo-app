/* eslint-disable multiline-ternary */
import { ItemStyle } from './ItemStyle'
import {
  MdDelete,
  MdEdit,
  MdRestoreFromTrash,
  MdDeleteForever
} from 'react-icons/md'
import { AiOutlineStar, AiFillStar } from 'react-icons/ai'
import { motion } from 'framer-motion'

const formatDate = (dateString) => {
  const date = new Date(dateString)

  const options = {
    day: '2-digit',
    month: '2-digit',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false
  }

  const formattedDate = new Intl.DateTimeFormat('es', options).format(date)

  return formattedDate
}

export const Item = ({
  todo,
  handleDelete,
  handleDeletePermanent,
  handleEdit,
  handleToggle,
  handleStarred
}) => {
  const formattedDate = formatDate(todo.date)
  return (
    <motion.div
      animate={{
        y: 10,
        opacity: 1
      }}
      initial={{ opacity: 0 }}
    >
      <ItemStyle>
        <div className='item-container'>
          <div className='item-info'>
            <input
              type='checkbox'
              onChange={() => handleToggle(todo.id)}
              checked={todo.done}
            />
            <p
              className={`${todo.done && 'todo-done'}`}
              onClick={() => handleEdit(todo)}
            >
              {todo.description}
            </p>
          </div>
          <div className='item-controls'>
            <button onClick={() => handleStarred(todo.id)} disabled={todo.done}>
              {todo.starred ? <AiFillStar /> : <AiOutlineStar />}
            </button>
            {todo.deleted ? (
              <div>
                <button onClick={() => handleDelete(todo.id)}>
                  <MdRestoreFromTrash />
                </button>
                <button onClick={() => handleDeletePermanent(todo.id)}>
                  <MdDeleteForever />
                </button>
              </div>
            ) : (
              <button onClick={() => handleDelete(todo.id)}>
                <MdDelete />
              </button>
            )}

            <button onClick={() => handleEdit(todo)} disabled={todo.done}>
              <MdEdit />
            </button>
          </div>
        </div>
        <p className='item-date'>{formattedDate}</p>
      </ItemStyle>
    </motion.div>
  )
}
