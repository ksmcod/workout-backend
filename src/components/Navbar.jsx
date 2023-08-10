import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";


export default function Navbar() {
  const { logout } = useLogout();

  function handleClick() {
    logout();
  }
  return (
    <header className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between ">
            <NavLink to="/" className="text-gray-600">
                <h1 className="font-bold text-3xl">Workout Pal</h1>
            </NavLink>
            <nav className='space-x-2 flex'>
              <div className="border p-1">
                <button onClick={handleClick}>Log out</button>
              </div>
              <NavLink to='/login'>Login</NavLink>
              <NavLink to='/signup'>Sign up</NavLink>
            </nav>
        </div>
    </header>
  )
}
