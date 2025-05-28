import React from 'react';
import LandingPage from './Hero';
import Navbar from '../Component/navbar';
import Head from 'next/head';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Safeena Academy</title>
        {/* You can also link your favicon here if not using the default public folder method */}
        <link rel="icon" href="/footer.png" />
      </Head>
      <Navbar />
      <main className="flex-grow">
        <LandingPage />
      </main>
    
    </div>
  );
}
