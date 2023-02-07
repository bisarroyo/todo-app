import { GrFormAdd } from 'react-icons/gr'

export const Add = () => {
  return (
    <form className='m-10'>
      <input type='text' name='add' placeholder='Add a new Todo' />
      <button type='submit' className='outline outline-2  outline-offset-2 rounded shadow bg-inherit'>
        <GrFormAdd />
      </button>
    </form>
  )
}
