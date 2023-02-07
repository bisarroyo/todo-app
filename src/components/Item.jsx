import { MdDelete, MdEdit } from 'react-icons/md'

export const Item = () => {
  return (
    <div>
      <p>Text todo</p>
      <button><MdDelete /></button>
      <button><MdEdit /></button>
    </div>
  )
}
