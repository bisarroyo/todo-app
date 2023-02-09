import { v4 as uuidv4 } from 'uuid'
import { GrFormAdd } from 'react-icons/gr'
import { useForm } from '../hooks/useForm'

export const Add = ({ onNewTodo }) => {
  const { description, form, handleChange, handleReset } = useForm({
    id: uuidv4(),
    description: '',
    done: false
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (description.length <= 3) return
    onNewTodo(form)
    handleReset()
  }

  return (
    <form className='m-10' onSubmit={handleSubmit}>
      <input type='text' name='description' placeholder='Add a new Todo' value={description} onChange={handleChange} />
      <button type='submit' className='outline outline-2  outline-offset-2 rounded shadow bg-inherit'>
        <GrFormAdd />
      </button>
    </form>
  )
}
