import { createBrowserRouter,createRoutesFromElements,Route,RouterProvider } from 'react-router-dom'
import Home, { workoutsLoader } from './pages/Home'
import RootLayout from './layouts/RootLayout'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout/>}>
      <Route index element={<Home/>} />

    </Route>
  )
)

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
