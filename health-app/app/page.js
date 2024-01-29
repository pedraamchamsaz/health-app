import react from 'react';
import MainPage from '@/components/MainPage'
import SignUp from '@/components/SignUp';
import AddExercise from '@/components/AddExercise'; 

export default function Home() {
  return (
    <main>
      <MainPage />

      

      <SignUp />

      <AddExercise />
    </main>
  );
}
