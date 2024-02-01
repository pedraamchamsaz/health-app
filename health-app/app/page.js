"use client"
import {useEffect, useState} from 'react';
import {ApiClient} from "@/apiClient"
import MainPage from '@/components/MainPage'
import SignUp from '@/components/SignUp';
import AddExercise from '@/components/AddExercise'; 
import AddFood from '@/components/AddFood';
import Login from '@/components/Login'
import UserTable from '@/components/UserTable';
import FoodTable from '@/components/FoodTable';
import ExerciseTable from '@/components/ExerciseTable';

export default function Home() {
  const [token, setToken] = useState(null)
  const client = new ApiClient(() => token, () => logout())

useEffect(() => {
  const token = localStorage.getItem('token');
  console.log(token)
  if (token){
    setToken(token)
  }
}, []);

const login = (token) => {
  localStorage.setItem("token", token);
  setToken(token)
}

const logout = () => {
  localStorage.removeItem("token")
  setToken(null)
  console.log("Function called")
}
  return (
    <main>

      {
        token ? (
          <div>
            <MainPage client={client} loggedOut={() => logout()}/> 
            <UserTable client={client} />

      <ExerciseTable client={client} />

      <FoodTable client={client} />
      
      
          </div>
        ) : (
          <div>
          <Login loggedIn={(token) => login(token)} client={client}/>

          <SignUp client={client}/>
          </div>
        
        )
      }

      

      
    </main>
  );
}
