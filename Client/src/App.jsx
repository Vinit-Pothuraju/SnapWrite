import { useState } from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import { RouteIndex } from './helpers/RouteName'
import Index from './pages'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RouteIndex} element={<Layout/>}>
            <Route index element={<Index/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
