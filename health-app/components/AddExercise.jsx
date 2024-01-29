"use client"
import React from 'react'

const AddExercise = () => {
    
    const submitHandler = (e) => {
        e.preventDefault(); 
        setDisabled(true)
        let result; 
    }
  return (
    <div className='container center bg-blue-200 flex flex-col mt-10 mb-20 justify-center items-center w-3/4 rounded-md self-center'>
    <h2 className='text-white font-bold'>Add Exercise</h2>

    <form onSubmit={submitHandler} id="exerciseForm" className='flex flex-col'>

    <label for='date' className='text-white font-bold'>Date:</label> 
    <input type="date" id='date' name='date' min='2024-01-01' max='2029-01-31' className='bg-black text-white rounded-md p-2 m-2'></input>

    <label for='exercise' className='text-white font-bold'>Exercise:</label> 
    <input type="text" placeholder="Running" className='bg-black text-white rounded-md p-2 m-2'></input>

    <label for='duration' className='text-white font-bold'>Duration:</label>
     <input type='number' step={5} min={10} max={80} className='bg-black text-white rounded-md p-2 m-2'></input>

    <button type="submit" className='bg-black text-white font-bold rounded-md p-2 m-2'>Add</button>
    </form>
    
</div>
  )
}

export default AddExercise
