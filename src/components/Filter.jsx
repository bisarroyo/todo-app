import { FilterStyle } from './FilterStyle'
import { useTodo } from '../hooks/useTodo'

export const Filter = () => {
  const { handleFilterTodo } = useTodo()

  const filterByDeleted = () => {
    handleFilterTodo('deleted')
  }
  const filterByPending = () => {
    handleFilterTodo('pending')
  }
  const filterByStarred = () => {
    handleFilterTodo('starred')
  }
  const filterByDone = () => {
    handleFilterTodo('done')
  }

  return (
    <FilterStyle>
      <button onClick={filterByDeleted}>Deleted</button>
      <button onClick={filterByPending}>Pending</button>
      <button onClick={filterByStarred}>Starred</button>
      <button onClick={filterByDone}>Done</button>
    </FilterStyle>
  )
}
