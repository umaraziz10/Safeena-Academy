import React from 'react';

import { Search } from './search';
import { Tables } from './table';
import Navbar from '../Component/navbar';
import { Footer } from '../Component/Footer';
export default function Home() {
  return (
    <div
      className='flex flex-col min-h-screen w-full'
      style={{
        background: 'linear-gradient(146.6deg, #FFFFFF 0%, #337BBF 100%)',
      }}
    >
      <main className='flex-1 container mx-auto py-10  sm:py-6 md:py-8 px-2 sm:px-4 md:px-6'>
        <div className='space-y-4 pt-20 sm:space-y-6'>
          <Navbar />
          <Tables />
          <Footer />
        </div>
      </main>
    </div>
  );
}
