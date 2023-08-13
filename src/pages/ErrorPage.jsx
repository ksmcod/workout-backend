import { Link } from "react-router-dom"

export default function ErrorPage() {
  return (
    <div className='flex flex-col justify-center items-center mt-28 px-8 space-y-3'>
      <h1 className='text-8xl font-bold text-center text-gray-900'>404</h1>
      <p className="max-w-xl font-bold text-gray-600 text-2xl">Oops... The page you are looking for does not exist, or might have been moved permanently.</p>
      <p className='text-gray-600 text-lg'>Go back <Link to='/' className="text-emerald-600">Home</Link></p>
    </div>
  )
}
