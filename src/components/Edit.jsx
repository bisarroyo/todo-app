import { useForm } from '../hooks/useForm'

export const Edit = ({ todos, handleEdit }) => {
  const { form, handleChange } = useForm({
    // id,
    // description,
    // done,
    // starred
  })

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type='text' name='description' onChange={handleChange} />
        <button>Edit</button>
      </form>
    </>
  )
}
