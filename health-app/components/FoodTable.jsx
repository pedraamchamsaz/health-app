"use client"
import {useState, useEffect} from 'react'
import AddFood from "./AddFood"

const FoodTable = (props) => {
  const [food, setFood] = useState([]);
  const [currentFood, setCurrentFood] = useState(undefined);


  const refreshFood = () => {
    props.client.getFood().then((response) => {
        setFood(response.data);
    })
} 

const removeFood = (id) => {
  props.client.removeFood(id).then(() => {
      refreshFood()
  })
}

const updateFood = (food) => {
  setCurrentFood(food)
}

useEffect(() => {
  refreshFood();
}, []); 


return (
  <div className='w-full h-1/2 bg-red-200'>
      <AddFood client={props.client} refreshFood={() => {
              refreshFood();
              setCurrentFood(undefined)
          }} currentFood={currentFood} />
          <div className='w-3/4 h-auto'>
              <table className='bg-violet-200 text-white rounded-md'>
                  <tr>
                      <th className=''>Food</th>
                      <th>Date</th>
                      <th>Calories</th>
                  </tr>
                  <tbody>
                      {
                          food.map((currentFood) => {
                              return (
                                  <tr key={currentFood._id} >
                                      <td>{currentFood.food}</td>
                                      <td>{currentFood.date}</td>
                                      <td>{currentFood.calories}</td>
                                      <td>
                                      <button onClick={() => removeFood(currentFood._id)}>Delete</button>
                                      <button onClick={() => updateFood(currentFood)}>Update</button>
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

export default FoodTable