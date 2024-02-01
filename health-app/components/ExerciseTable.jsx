"use client" 
import {useState, useEffect} from 'react'
import AddExercise from "./AddExercise"

const ExerciseTable = (props) => {

    const [exercise, setExercise] = useState([]);
    const [currentExercise, setCurrentExercise] = useState(undefined);

    const refreshExercise = () => {
        props.client.getExercise().then((response) => {
            setExercise(response.data);
        })
    } 

    const removeExercise = (id) => {
        props.client.removeExercise(id).then(() => {
            refreshExercise()
        })
    }

    const updateExercise = (exercise) => {
        setCurrentExercise(exercise) 
    }
    


        useEffect(() => {
            refreshExercise();
          }, []); 

  return (
    <div className='w-full h-1/2 bg-red-200'>
        <AddExercise client={props.client} refreshExercise={() => {
                refreshExercise();
                setCurrentExercise(undefined)
            }} currentExercise={currentExercise} />
            <div className='w-3/4 h-auto'>
                <table className='bg-violet-200 text-white rounded-md'>
                    <tr>
                        <th className=''>Exercise</th>
                        <th>Date</th>
                        <th>Duration</th>
                        <th>Calories Burnt</th>
                    </tr>
                    <tbody>
                        {
                            exercise.map((currentExercise) => {
                                return (
                                    <tr key={currentExercise._id} >
                                        <td>{currentExercise.exercise}</td>
                                        <td>{currentExercise.date}</td>
                                        <td>{currentExercise.duration}</td>
                                        <td>{currentExercise.calories}</td>
                                        <td>
                                        <button onClick={() => removeExercise(currentExercise._id)}>Delete</button>
                                        <button onClick={() => updateExercise(currentExercise)}>Update</button>
                                        </td>
                                    </tr>
                    
                                )
                            })
                        }
                        
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default ExerciseTable