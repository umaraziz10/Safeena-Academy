// pages/index.tsx
'use client';

import React from 'react';
import Details from '@/app/Detail/Details';
import Bottom from '@/app/Detail/Bottom';
import Navbar from '../../Component/navbar';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { fetchWithToken } from '@/lib/fetchWithToken';

export default function Home()  {
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
    if (role === 'No Role') {
      router.push('/Login');
    }
  }, [role, router]);

  // Render nothing until role is known
  if (!role || role === 'No Role') return null;

  return (
    <div
      className='flex flex-col min-h-screen'
      style={{
        background:
          'linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 72.78%, #337BBF 96.96%)',
      }}
    >
      <Navbar />
      <main className='min-h-screen mt-24 '>
        <Details />
        <Bottom />
      </main>
    </div>
  );
}
