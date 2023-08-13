import { createBrowserRouter,createRoutesFromElements,Navigate,Route,RouterProvider } from 'react-router-dom'
import Home, { workoutsLoader } from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Signup from './pages/Signup'
import Login from './pages/Login'
import useAuthContext from './hooks/useAuthContext'
import ErrorPage from './pages/ErrorPage'

export default function App() {
  const { user } = useAuthContext();

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<RootLayout/>}>
        <Route index element={user ? <Home/> : <Navigate to='/login' />} />
        <Route path='/signup' element={!user ? <Signup/> : <Navigate to='/' />} />
        <Route path='/login' element={!user ? <Login/> : <Navigate to='/'/>} />
  
        <Route path='*' element={<ErrorPage/>} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}
