'use client'

import React from 'react';
import BookingPage from './BookingPage';
import Navbar from '../Component/navbar';
import { useEffect, useState } from 'react';
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
    if (role === 'No Role') {
      router.push('/Login');
    }
  }, [role, router]);

  if (!role || role === 'No Role') return null;

  return (
    <div className="flex flex-col min-h-screen">
          <Navbar />
      <main className="">
        <BookingPage />
      </main>
    </div>
  )
}