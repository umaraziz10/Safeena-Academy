// pages/index.tsx
'use client';

import { useState } from 'react';
import React from 'react';
import Details from '../Details';
import Bottom from '../Bottom';
import Navbar from '../../Component/navbar';
import { getPsychologistAvailability } from '../psychologist-data';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from '../../Component/Footer';

export default function Home() {
  const [selectedDate, setSelectedDate] = useState('19/06/2025');
  const psychologistData = getPsychologistAvailability(
    'Marissa Meditania, M.Psi., Psikolog',
    selectedDate
  );
  return (
    <div
      className='flex flex-col min-h-screen'
      style={{
        background:
          'linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 72.78%, #337BBF 96.96%)',
      }}
    >
      {/* <Navbar /> */}
      <Navbar />
      <main className='min-h-screen mt-24 '>
        <Details psychologist={psychologistData} />
        <Bottom
          services={psychologistData.services}
          timeSlots={psychologistData.timeSlots}
        />
      </main>
    </div>
  );
}
