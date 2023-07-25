import React, { useState } from 'react'

export default function WorkoutForm() {
    const [workout,setWorkout] = useState({ title:'', load:'', reps:'' });

    function formHandler(e) {

    }
  return (
    <form onSubmit={e => formHandler(e)}>
        <h3>Add a New Workout</h3>
        <div className="">
            <label htmlFor="title">Exercise Title: </label>
            <input type="text" name='title' onChange={e => formHandler(e)} value={workout.title} />
        </div>

        <div className="">
            <label htmlFor="load">Load (in kg): </label>
            <input type="text" name='load' onChange={e => formHandler(e)} value={workout.load} />
        </div>

        <div className="">
            <label htmlFor="reps">Reps: </label>
            <input type="text" name='reps' onChange={e => formHandler(e)} value={workout.reps} />
        </div>

        <button>Add Workout</button>
    </form>
  )
}
