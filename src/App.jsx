import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home, { workoutsLoader } from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Signup from './pages/Signup'
import Login from './pages/Login'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />
      <Route path='/login' element={<Login/>} />

    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
