import { Todos } from './pages/Todos'
import { GlobalStyle } from './globalStyles'
// import { TodosProvider } from './context/TodosProvider'
// import { Route, Routes } from 'react-router-dom'

const App = () => {
  return (
    // <TodosProvider>
    //   <Routes>
    //     <Route path='/' element={<Todos />} />
    //   </Routes>
    // </TodosProvider>
    <>
      <GlobalStyle />
      <Todos />
    </>
  )
}

export default App
