import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

export const useForm = ({ ...inputs }) => {
  const [form, setForm] = useState({ id: uuidv4(), ...inputs })

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm({
      ...form,
      [name]: value
    })
  }

  const setValues = ({ ...values }) => {
    setForm({
      ...form,
      ...values
    })
  }

  const handleReset = () => {
    setForm({ id: uuidv4(), ...inputs })
  }

  return {
    ...form,
    form,
    handleChange,
    handleReset,
    setValues
  }
}
