import { GlobalStyle } from './globalStyles'
import { TodosProvider } from './context/TodosProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoutesApp } from './routes/routes'

const App = () => {
  return (
    <TodosProvider>
      <GlobalStyle />
      <Router>
        <RoutesApp />
      </Router>
    </TodosProvider>
  )
}

export default App
