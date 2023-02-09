import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'
import { GrFormAdd } from 'react-icons/gr'

export const Add = ({ onNewTodo }) => {
  const [form, setForm] = useState({
    id: uuidv4(),
    description: '',
    done: false
  })

  const { description } = form

  const handleSubmit = (event) => {
    event.preventDefault()
    if (description.length <= 3) return
    onNewTodo(form)
    setForm({
      id: uuidv4(),
      description: '',
      done: false
    })
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
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
