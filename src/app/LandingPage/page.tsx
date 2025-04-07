// pages/index.tsx

import React from 'react';
import LandingPage from './Hero';
import Navbar from '../Component/navbar';
import {Footer} from "../Component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
      </main>
    
    </div>
  );
}
