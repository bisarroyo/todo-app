import { FilterStyle } from './FilterStyle'
import { useTodo } from '../hooks/useTodo'

export const Filter = () => {
  const { handleFilterTodo } = useTodo()

  const filterByPending = () => {
    handleFilterTodo({ pending: true })
  }
  const filterByStarred = () => {
    handleFilterTodo({ starred: true })
  }
  const filterByDone = () => {
    handleFilterTodo({ done: true })
  }

  return (
    <FilterStyle>
      <button onClick={filterByPending}>Pending</button>
      <button onClick={filterByStarred}>Starred</button>
      <button onClick={filterByDone}>Done</button>
    </FilterStyle>
  )
}
