import React, { useState } from 'react'
import useWorkoutsContext from '../hooks/useWorkoutsContext';

export default function WorkoutForm() {
    const { dispatch } = useWorkoutsContext();
    const [workout,setWorkout] = useState({ title:'', load:0, reps:'' });
    const [error,setError] = useState(null);

    async function formHandler(e) {
        if(e.target == form) {
            e.preventDefault();
            console.log(workout);

            const response = await fetch('http://localhost:4000/api/workouts',{
                method: 'POST',
                body: JSON.stringify(workout),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            const json = await response.json();

            if(!response.ok) {
                setError(json.error);
            }

            if(response.ok) {
                setError(null);
                setWorkout({ title:'', load:0, reps:0 });
                console.log('New workout added: ',json);
                dispatch({ type: 'CREATE_WORKOUT', payload: json })
            }

            return;
        }

        setWorkout(prevState => (
            {...prevState,[e.target.name]:e.target.value}
        ));
    }
  return (
    <form name='form' onSubmit={e => formHandler(e)} className='space-y-4 p-1'>
        <h3 className='font-bold text-xl text-center'>Add a New Workout</h3>
        <div className=" space-y-1">
            <label htmlFor="title" className='font-semibold'>Exercise Title </label>
            <input
             className='px-2 py-1 w-full border border-gray-100 rounded-md focus:outline-none shadow'
             type="text" required name='title' onChange={e => formHandler(e)} value={workout.title} />
        </div>

        <div className="space-y-1">
            <label htmlFor="load" className='font-semibold'>Load (in kg) </label>
            <input
             className='px-2 py-1 w-full border border-gray-100 rounded-md focus:outline-none shadow'
             type="number" required name='load' onChange={e => formHandler(e)} value={workout.load} />
        </div>

        <div className="space-y-1">
            <label htmlFor="reps" className='font-semibold'>Reps </label>
            <input 
             className='px-2 py-1 w-full border border-gray-100 rounded-md focus:outline-none shadow'
            type="number"  name='reps' onChange={e => formHandler(e)} value={workout.reps} />
        </div>

        <button className='bg-emerald-500 border-0 text-white px-2 py-1 rounded cursor-pointer w-full'>Add Workout</button>

        {error && <div className='px-2 py-1 bg-pink-100 text-pink-600 border border-pink-600 rounded  '> { error } </div>}
    </form>
  )
}
