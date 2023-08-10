
export default function Signup() {
  return (
<form name='form' onSubmit={e => formHandler(e)} className='sm:space-y-4 space-y-2 sm:p-1 p-10 max-w-sm mx-auto mt-10'>

        <h3 className='font-bold text-4xl text-center'>Sign Up</h3>

        <div className="space-y-1">
            <label htmlFor="email" className='font-semibold'>Email</label>
            <input
             className='px-2 py-1 w-full border border-gray-100 rounded-md focus:outline-none shadow'
             type="text" required name='email' id="email"/>
        </div>

        <div className="space-y-1">
            <label htmlFor="password" className='font-semibold'>Password</label>
            <input
             className='px-2 py-1 w-full border border-gray-100 rounded-md focus:outline-none shadow'
             type="password" required name='password' id="password" />
        </div>

        <button className='bg-emerald-500 border-0 text-white py-2 rounded cursor-pointer w-full'>Sign Up</button>
    </form>  )
}
