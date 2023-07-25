import React from 'react'

export default function WorkoutDetails({ workout }) {
  return (
    <div className='bg-white mx-auto p-5 relative shadow '>
        <h4 className='mb-3 text-xl font-bold text-emerald-500'>{workout.title}</h4>
        <p className='m-0 text-sm text-gray-600'><span className="font-bold">Load (kg): </span>{workout.load}</p>
        <p className='m-0 text-sm text-gray-600'><span className="font-bold">Reps: </span>{workout.reps}</p>
        <p className='m-0 text-sm text-gray-600'>{workout.createdAt}</p>
    </div>
  )
}
