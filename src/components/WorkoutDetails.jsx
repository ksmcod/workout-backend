import useWorkoutsContext  from '../hooks/useWorkoutsContext'
import trash from '../assets/trash.svg'


export default function WorkoutDetails({ workout }) {
  const { dispatch } = useWorkoutsContext();

  async function handleDelete() {
    const response = await fetch(`${import.meta.env.VITE_SERVER}/api/workouts/${workout._id}`,{
      method: 'DELETE'
    });
    const json = await response.json();

    if(response.ok) {
      dispatch({ type: 'DELETE_WORKOUT', payload: json });
    }
  }

  return (
    <div className='bg-white mx-auto p-5 relative shadow '>
        <h4 className='mb-3 text-xl font-bold text-emerald-500'>{workout.title}</h4>
        <p className='m-0 text-sm text-gray-600'><span className="font-bold">Load (kg): </span>{workout.load}</p>
        <p className='m-0 text-sm text-gray-600'><span className="font-bold">Reps: </span>{workout.reps}</p>
        <p className='m-0 text-sm text-gray-600'>{workout.createdAt}</p>

        <span className="absolute right-2 top-2 cursor-pointer shadow-lg rounded-full" onClick={handleDelete}><img src={trash} className='w-7' /></span>
    </div>
  )
}
