import { useState } from 'react'
import { Button } from './components/ui/button'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import Layout from './Layout/Layout'
import { RouteIndex, RouteSignIn, RouteSignUP } from './helpers/RouteName'
import Index from './pages'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path={RouteIndex} element={<Layout/>}>
            <Route index element={<Index/>} />
          </Route>
          <Route path={RouteSignIn} element={<SignIn/>}/>
          <Route path={RouteSignUP} element={<SignUp/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
