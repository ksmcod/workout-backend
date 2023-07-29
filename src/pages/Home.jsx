import React, { useEffect, useState } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import { useLoaderData } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';

export default function Home() {

  // const rawWorkouts = useLoaderData();
  // console.log("Workouts from loader: ",rawWorkouts);

  const [workouts,setWorkouts] = useState(useLoaderData());
   
  // const loadedWorkouts = useLoaderData();
  // console.log(loadedWorkouts);
  // function load() {
  //   const loaded = useLoaderData();
  //   setWorkouts(loaded);
  // }

  useEffect(() => {
    document.title = 'Workout Pal';
    
    // async function load() {
      // const response = await fetch('http://localhost:4000/api/workouts');
      // const json = await response.json();

      // if(!response.ok) {
      //   throw Error('Could not load workouts!');
      // }

      // setWorkouts(json); 
      // console.log(json);
    // }
  },[]);
  

  return (
    <div className='max-w-6xl mx-auto p-5 grid grid-cols-ninja gap-24'>

        <div className="space-y-5">
        { workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
        </div>

        <WorkoutForm/>

    </div>
  )

}

export async function workoutsLoader() {
  const response = await fetch('http://localhost:4000/api/workouts');
  // const json = await response.json();

  if(!response.ok) {
    throw Error('Could not load workouts!');
  }

  return response.json();
}

