'use client'
import React from 'react';
import BookingPage from './BookingPage';
import Navbar from '../Component/navbar';
import {Footer} from "../Component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
          {/* <Navbar /> */}
          <Navbar />
      <main className="">
        <BookingPage />
      </main>
    </div>
  )
}