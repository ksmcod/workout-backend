import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home, { workoutsLoader } from './pages/Home'
import RootLayout from './layouts/RootLayout'
import Signup from './pages/Signup'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>} />
      <Route path='/signup' element={<Signup/>} />

    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
