'use client'
import React from 'react';
import Landing from './Landing';
import Navbar from '../Component/navbar';
import {Footer} from "../Component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
          <Navbar />
      <main className="">
        <Landing />
      </main>
    </div>
  )
}