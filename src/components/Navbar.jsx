import { NavLink } from "react-router-dom";


export default function Navbar() {
  return (
    <header className="bg-white">
        <div className="max-w-7xl mx-auto px-5 py-3 flex items-center justify-between ">
            <NavLink to="/" className="text-gray-600">
                <h1 className="font-bold text-3xl">Workout Pal</h1>
            </NavLink>
        </div>
    </header>
  )
}
