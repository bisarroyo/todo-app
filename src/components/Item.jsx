import { MdDelete, MdEdit } from 'react-icons/md'

export const Item = ({ todo }) => {
  return (
    <div>
      <p>{todo}</p>
      <button><MdDelete /></button>
      <button><MdEdit /></button>
    </div>
  )
}
