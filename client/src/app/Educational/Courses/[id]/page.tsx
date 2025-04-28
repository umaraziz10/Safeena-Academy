// pages/index.tsx

import React from 'react';
import CoursePage from "../Courses";
import Navbar from '@/app/Component/navbar';
import {Footer} from "@/app/Component/Footer";
export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <CoursePage />
      </main>
        
    </div>
  );
}
