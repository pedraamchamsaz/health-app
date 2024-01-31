"use client"
import { useState } from 'react'

const AddExercise = (props) => {
  const [disabled, setDisabled] = useState(false)
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        setDisabled(true)
        let result; 
    

  if (!e.target.exercise.value || !e.target.date.value || !e.target.duration.value || !e.target.calories.value || !typeof e.target.calories.value === "number") {
    alert("please fill in all fields");
    setDisabled(false);
    return
  }

  if(props.currentExercise) {
    result = props.client.updateExercise(props.currentExercise._id, e.target.name.value, e.target.date.value, e.target.duration.value, e.target.calories.value);
  } else {
    result = props.client.addExercise(e.target.exercise.value, e.target.date.value, e.target.duration.value, e.target.calories.value);
  }

  result.then(() => {
    setDisabled(false);
    document.getElementById("exerciseForm").reset()
    props.refreshExercise() 
  }).catch((error) => {
    alert("There was an error")
    console.log(error)
    setDisabled(false)
  })
}

  return (
    <div className='container mx-auto bg-blue-200 flex flex-col mt-10 mb-20 justify-center items-center w-3/4 rounded-md'>
    <h2 className='text-white font-bold'>Add Exercise</h2>

    <form onSubmit={submitHandler} id="exerciseForm" className='flex flex-col'>

    <label for='date' className='text-white font-bold'>Date:</label> 
    <input type="date" id='date' name='date' min='2024-01-01' max='2029-01-31' className='bg-black text-white rounded-md p-2 m-2'></input>

    <label for='exercise' className='text-white font-bold'>Exercise:</label> 
    <input type="text" name="exercise" placeholder="Running" className='bg-black text-white rounded-md p-2 m-2'></input>

    <label for='duration' className='text-white font-bold'>Duration:</label>
     <input type='number' name='duration' step={5} min={5} max={80} className='bg-black text-white rounded-md p-2 m-2'></input>

     <label for='calories' className='text-white font-bold'>Calories Burnt:</label> 
    <input type="text" name="calories" className='bg-black text-white rounded-md p-2 m-2'></input>

    <button type="submit" className='bg-black text-white font-bold rounded-md p-2 m-2'>Add</button>
    </form>
    
</div>
  )
}

export default AddExercise
