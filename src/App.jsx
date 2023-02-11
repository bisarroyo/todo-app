import { GlobalStyle } from './globalStyles'
import { AppProvider } from './context/AppProvider'
import { BrowserRouter as Router } from 'react-router-dom'
import { RoutesApp } from './routes/routes'

const App = () => {
  return (
    <AppProvider>
      <GlobalStyle />
      <Router>
        <RoutesApp />
      </Router>
    </AppProvider>
  )
}

export default App
