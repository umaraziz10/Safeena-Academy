'use client'

import React, { useEffect, useState} from 'react';
import { Tables } from './table';
import Navbar from '../Component/navbar';
import { Footer } from '../Component/Footer';
import { useRouter } from 'next/navigation';
import { fetchWithToken } from '@/lib/fetchWithToken';

export default function Home() {
  const [role, setRole] = useState('');
  const router = useRouter();

  useEffect(() => {
    async function fetchRole() {
      const res = await fetchWithToken('/users/me');
      const data = await res.json();
      if (data.message === 'Unauthorized: No token provided') {
        setRole('No Role');
      } else {
        setRole(data.role);
      }
    }
    fetchRole();
  }, []);

  useEffect(() => {
    if (role && role !== 'admin') {
      router.push('/');
    }
  }, [role, router]);

  // Render nothing while checking role
  if (!role) return null;
  if (role !== 'admin') return null;
  
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
