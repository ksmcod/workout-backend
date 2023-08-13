import React, { useContext, useEffect, useReducer } from 'react'
import WorkoutDetails from '../components/WorkoutDetails';
import { useLoaderData } from 'react-router-dom';
import WorkoutForm from '../components/WorkoutForm';
import useWorkoutsContext from '../hooks/useWorkoutsContext';
import useAuthContext from '../hooks/useAuthContext';

export default function Home() {

  // const rawWorkouts = useLoaderData();
  // console.log("Workouts from loader: ",rawWorkouts);

  // const [workouts,setWorkouts] = useState(useLoaderData());
   
  // const loadedWorkouts = useLoaderData();
  // console.log(loadedWorkouts);
  // function load() {
  //   const loaded = useLoaderData();
  //   setWorkouts(loaded);
  // }

  const { workouts, dispatch } = useWorkoutsContext();
  const { user } = useAuthContext();

  useEffect(() => {
    document.title = 'Workout Pal';
    
    async function load() {
      const response = await fetch(`${import.meta.env.VITE_SERVER}/api/workouts`,{
        headers: {
          'Authorization': `Bearer ${user.token}`
        }
      });
      const json = await response.json();
      // console.log("Json is: ",response)

      if(!response.ok) {
        throw Error('Could not load workouts!');
      } 
      dispatch({ type: 'SET_WORKOUTS', payload: json });
    }

    if(user) {
      load();
    }
  },[user]);
  

  return (
    <div className='max-w-6xl mx-auto flex flex-col-reverse gap-10 sm:p-5 sm:grid sm:grid-cols-ninja sm:gap-24'>

        <div className="space-y-5 px-5 pb-5 sm:p-1">
        { workouts && workouts.map(workout => (
          <WorkoutDetails key={workout._id} workout={workout} />
        ))}
        </div>

        <WorkoutForm/>

    </div>
  )

}

export async function workoutsLoader() {
  const response = await fetch(`${import.meta.env.SERVER}/api/workouts`);
  // const json = await response.json();

  if(!response.ok) {
    throw Error('Could not load workouts!');
  }

  return response.json();
}


// import React, { useContext, useEffect, useReducer } from 'react'
// import WorkoutDetails from '../components/WorkoutDetails';
// import { useLoaderData } from 'react-router-dom';
// import WorkoutForm from '../components/WorkoutForm';
// import useWorkoutsContext from '../hooks/useWorkoutsContext';

// export default function Home() {

//   // const rawWorkouts = useLoaderData();
//   // console.log("Workouts from loader: ",rawWorkouts);

//   // const [workouts,setWorkouts] = useState(useLoaderData());
   
//   // const loadedWorkouts = useLoaderData();
//   // console.log(loadedWorkouts);
//   // function load() {
//   //   const loaded = useLoaderData();
//   //   setWorkouts(loaded);
//   // }

//   const { workouts, dispatch } = useWorkoutsContext();

//   useEffect(() => {
//     document.title = 'Workout Pal';
    
//     async function load() {
//       const response = await fetch('http://localhost:4000/api/workouts');
//       console.log('response: ',response)
//       const json = await response.json();

//       if(!response.ok) {
//         throw Error('Could not load workouts!');
//       } 
//       dispatch({ type: 'SET_WORKOUTS', payload: json });
//     }
//     load();
//   },[]);
  

//   return (
//     <div className='max-w-6xl mx-auto p-5 grid grid-cols-ninja gap-24'>

//         <div className="space-y-5">
//         { workouts && workouts.map(workout => (
//           <WorkoutDetails key={workout._id} workout={workout} />
//         ))}
//         </div>

//         <WorkoutForm/>

//     </div>
//   )

// }

// export async function workoutsLoader() {
//   const response = await fetch('http://localhost:4000/api/workouts');
//   // const json = await response.json();

//   if(!response.ok) {
//     throw Error('Could not load workouts!');
//   }

//   return response.json();
// }

