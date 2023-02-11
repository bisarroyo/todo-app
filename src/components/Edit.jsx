import { useEffect } from 'react'
import { useAppContext } from '../hooks/useAppContext'
import { useForm } from '../hooks/useForm'
import { EditStyle } from './EditStyle'

export const Edit = ({ handleEdit }) => {
  const { editing } = useAppContext()

  const initialLoad = {
    id: '',
    description: ''
  }

  const { id, description, form, handleChange, setValues } = useForm({
    id: '',
    description: ''
  })

  useEffect(() => {
    setValues({
      id: editing.id,
      description: editing.description
    })
  }, [editing])

  console.log(form)

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <EditStyle onSubmit={handleSubmit}>
      <input
        type='text'
        name='description'
        onChange={handleChange}
        value={description ?? initialLoad.description}
      />
      <button onClick={() => handleEdit(id, description)}>Edit</button>
    </EditStyle>
  )
}
