import { Outlet } from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import Navbar from '../components/Navbar'

export default function RootLayout() {
  return (
    <div>
      <header className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between ">
            <NavLink to="/" className="text-gray-600">
                <h1 className="font-bold text-3xl">Workout Pal</h1>
            </NavLink>
            <nav className='space-x-2'>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/signup'>Sign up</NavLink>
            </nav>
        </div>
    </header>

        <Outlet/>
    </div>
  )
}
