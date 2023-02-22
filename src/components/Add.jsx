import { useState } from 'react'
import DatePicker from 'react-date-picker'
import { useForm } from '../hooks/useForm'
import { AddStyle } from './AddStyle'
import { BsFillCalendarEventFill } from 'react-icons/bs'

export const Add = ({ onNewTodo }) => {
  const [date, setDate] = useState(new Date())

  const { description, form, handleChange, handleReset } = useForm({
    description: '',
    done: false,
    starred: false,
    deleted: false,
    date
  })

  console.log(form)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (description.length <= 3) return
    onNewTodo(form)
    handleReset()
  }

  return (
    <AddStyle className='m-10' onSubmit={handleSubmit}>
      <input
        className='add-input'
        type='text'
        name='description'
        placeholder='Add a new Todo'
        value={description}
        onChange={handleChange}
      />
      <div className='add-submenu'>
        <DatePicker
          onChange={setDate}
          className='add-date'
          value={date}
          calendarIcon={<BsFillCalendarEventFill />}
        />
        <button type='submit' className='add-btn'>
          Add
        </button>
      </div>
    </AddStyle>
  )
}
