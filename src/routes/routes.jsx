import { useRoutes } from 'react-router-dom'
import { Todos } from '../pages/Todos'

export const RoutesApp = () => {
  const element = useRoutes([
    {
      path: '/', element: <Todos />
    }
  ])
  return element
}
