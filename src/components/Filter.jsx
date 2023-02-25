import { FilterStyle } from './FilterStyle'
import { useTodo } from '../hooks/useTodo'
import { useAppContext } from '../hooks/useAppContext'

export const Filter = () => {
  const { handleFilterTodo } = useTodo()

  const { filtering } = useAppContext()

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
      <button
        onClick={filterByDeleted}
        className={`${filtering === 'deleted' && 'active-filter'}`}
      >
        Deleted
      </button>
      <button
        onClick={filterByPending}
        className={`${filtering === 'pending' && 'active-filter'}`}
      >
        Pending
      </button>
      <button
        onClick={filterByStarred}
        className={`${filtering === 'starred' && 'active-filter'}`}
      >
        Starred
      </button>
      <button
        onClick={filterByDone}
        className={`${filtering === 'done' && 'active-filter'}`}
      >
        Done
      </button>
    </FilterStyle>
  )
}
