import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import { useLoaderData } from 'react-router-dom';

export default function Home() {

  // const rawWorkouts = useLoaderData();
  // console.log("Workouts from loader: ",rawWorkouts);

  const [workouts,setWorkouts] = useState(useLoaderData());

  useEffect(() => {
    document.title = 'Workout Pal!';
  },[]);


  return (
    <div className='max-w-6xl mx-auto p-5 grid grid-cols-ninja gap-24'>

        <div className="">
        { workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
        </div>

    </div>
  )
}

export async function workoutsLoader() {
  const response = await fetch('http://localhost:4000/api/workouts');
  // const json = await response.json();

  if(!response.ok) {
    throw new Error('Could not load workouts!');
  }

  return response.json();
}