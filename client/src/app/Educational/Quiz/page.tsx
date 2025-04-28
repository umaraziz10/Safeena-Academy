import React from 'react';
import QuizPage from './Quiz';
import Navbar from '../Component/navbar';
import {Footer} from "../Component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <QuizPage />
      </main>
    
    </div>
  );
}
