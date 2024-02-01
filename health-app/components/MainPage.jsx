"use client"

import { useState, useEffect } from 'react'
import AddExercise from "@/components/AddExercise"
import AddFood from "@/components/AddFood"

const MainPage = (props) => {


    const [exercise, setExercise] = useState([]);
    const [food, setFood] = useState([]);
    const [currentExercise, setCurrentExercise] = useState(undefined);
    const [currentFood, setCurrentFood] = useState(undefined);

    const refreshExercise = () => {
        props.client.getExercise().then((response) => {
            setExercise(response.data);
        })
    }
    const refreshFood = () => {
        props.client.getFood().then((response) => {
            setFood(response.data);
        })
    }

    // const removeExercise = (id) => {
    //     props.client.removeExercise(id).then(() => {
    //         refreshExercise()
    //     })
    // }

    // const removeFood = (id) => {
    //     props.client.removeFood(id).then(() => {
    //         refreshFood()
    //     })
    // }

    const updateExercise = (exercise) => {
        setCurrentExercise(exercise)
    }

    const updateFood = (food) => {
        setCurrentFood(food)
    }

    // useEffect(() => {
    //     refreshExercise();
    //     refreshFood();
    //     refreshUser();
    // }, []);



    // const buildExercise = () => {
    //     return exercise.map((currentExercise) => {
    //         return (
    //             <tr key={currentExercise._id} >
    //                 <td>{currentExercise.exercise}</td>
    //                 <td>{currentExercise.date}</td>
    //                 <td>{currentExercise.duration}</td>
    //                 <td>{currentExercise.calories}</td>
    //                 <td>
    //                 <button onClick={() => removeExercise(currentExercise._id)}>Delete</button>
    //                 <button onClick={() => updateExercise(currentExercise._id)}>Update</button>
    //                 </td>
    //             </tr>

    //         )
    //     })
    // }


    // const buildFood = () => {
    //     return food.map((currentFood) => {
    //         <tr key={currentFood._id}>
    //             <td>{currentFood.food}</td>
    //             <td>{currentFood.date}</td>
    //             <td>{currentFood.calories}</td>
    //             <td>
    //                 <button onClick={() => removeFood(currentFood._id)}>Delete</button>
    //                 <button onClick={() => updateFood(currentFood._id)}>Update</button>
    //             </td>
    //         </tr>
    //     })
    // }


    const dropdownMenu = () => {
        document.querySelector('#dropdown').classList.remove('hidden')
    }

    const closeDropdown = () => {
        document.querySelector('#dropdown').classList.add('hidden');
      };

  return (
    <div>
        <nav>
            <ul className='flex justify-between p-7 bg-blue-200 font-semibold'>
                <div className='flex gap-20'>
                    <li className='text-xl' id='logo'>Logo</li>
                    <div>
                        <li className='text-xl' id='add' onMouseEnter={dropdownMenu} onMouseLeave={closeDropdown}>Add +</li>
                        <div id='dropdown' className='hidden flex flex-col text-lg bg-blue-400 absolute p-2 gap-2 rounded-xl' onMouseEnter={dropdownMenu} onMouseLeave={closeDropdown}>
                            <a className='hover:bg-yellow-400 rounded-xl p-1' href="">Exercise</a>
                            <a className='hover:bg-yellow-400 rounded-xl p-1' href="">Food</a>
                            <a className='hover:bg-yellow-400 rounded-xl p-1' href="">Sleep</a>
                        </div>
                    </div>
                </div>
                <li id='app-name' className='text-3xl font-bold'>The Health App</li>
                <div className='flex gap-20 text-xl'>
                    <li id='username'>Username</li>
                    <li id='logout' onClick={() => props.loggedOut()}>Log Out</li>
                </div>
            </ul>
        </nav>
{/* navbar ends */}

           
            

    </div>
  )
}

export default MainPage