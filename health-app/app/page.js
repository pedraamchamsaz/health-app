"use client"
import {useEffect, useState} from 'react';
import {ApiClient} from "@/apiClient"
import MainPage from '@/components/MainPage'
import SignUp from '@/components/SignUp';
import AddExercise from '@/components/AddExercise'; 
import AddFood from '@/components/AddFood';
import Login from '@/components/Login'
import UserInfo from '@/components/UserInfo';

export default function Home() {
  const [token, setToken] = useState(null)
  const client = new ApiClient(() => token, () => logout())

useEffect(() => {
  const token = localStorage.getItem('token');
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
}
  return (
    <main>

      {
        token ? (
          <div>
            <MainPage client={client} /> 
          </div>
        ) : (
          <Login loggedIn={(token) => login(token)} client={client}/>
        
        )
      }
      
      <SignUp client={client}/>



      
    </main>
  );
}
