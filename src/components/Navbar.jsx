import { NavLink } from "react-router-dom";
import { useLogout } from "../hooks/useLogout";
import useAuthContext from "../hooks/useAuthContext";


export default function Navbar() {
  const { logout } = useLogout();
  const { user } = useAuthContext()

  function handleClick() {
    logout();
  }
  return (
    <header className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-3 flex flex-col w-full sm:flex-row sm:items-center sm:justify-between ">
            <NavLink to="/" className="text-gray-600">
                <h1 className="font-bold text-3xl">Workout Pal</h1>
            </NavLink>
            <nav className='space-x-2 flex justify-self-end self-end '>
            { user &&  
                <div className="p-1 space-x-3 flex items-center">
                  <span>{user.email}</span>
                  <button className="border-2 border-emerald-600 px-2 py-1 rounded text-green-800" onClick={handleClick}>Log out</button>
                </div> 
              }
              {!user && <div className="space-x-2">
                  <NavLink className='text-gray-600 hover:text-emerald-800' to='/login'>Login</NavLink>
                  <NavLink className='text-gray-600 hover:text-emerald-800' to='/signup'>Sign up</NavLink>
                </div>}
            </nav>
        </div>
    </header>
  )
}
