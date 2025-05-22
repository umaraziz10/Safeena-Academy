'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { fetchWithToken } from "@/lib/fetchWithToken";
import { motion } from 'framer-motion';

const badges = [
  { id: 1, title: 'Anxiety Disorders', subtitle: 'Pahami dan atasi kecemasan.', image: '/Badges/id1.png' },
  { id: 2, title: 'Depression', subtitle: 'Pelajari cara mengatasi dan pulih.', image: '/Badges/id2.png' },
  { id: 3, title: 'Help Friends and Family', subtitle: 'Dukung orang yang Anda cintai.', image: '/Badges/id3.png' },
  { id: 4, title: 'Sleep Better', subtitle: 'Tingkatkan kebiasaan tidur Anda.', image: '/Badges/id4.png' },
  { id: 5, title: 'Panic Attack', subtitle: 'Atasi panik dengan percaya diri.', image: '/Badges/id5.png' },
  { id: 6, title: 'OCD', subtitle: 'Kelola pikiran obsesif.', image: '/Badges/id6.png' },
];

export const Badges = (): JSX.Element => {
  const [userID, setUserID] = useState(0);
  const [quizScores, setQuizScores] = useState<number[]>([0, 0, 0, 0, 0, 0]);


  useEffect(() => {
    async function fetchUser() {
      const userRes = await fetchWithToken('/users/me');
      const userData = await userRes.json();
      setUserID(userData.id);
    }
    fetchUser();
  }, []);

  useEffect(() => {
    async function fetchQuizScores() {
      const scores = [];

      for (let quizId = 1; quizId <= 6; quizId++) {
        try {
          const res = await fetchWithToken(`/quiz/score/highest?userId=${userID}&quizId=${quizId}`);
          const data = await res.json();
          scores.push(data.score ?? 0);
        } catch {
          scores.push(0);
        }
      }

      const scaledScores = scores.map(score => Math.round(score * 10));
      setQuizScores(scaledScores);
    }

    fetchQuizScores();
  }, [userID]);

  return (
    <>
      {/* Background Gradient */}
      <div
        className='fixed inset-0 -z-10'
        style={{
          background:
            'linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 72.78%, #337BBF 96.96%)',
        }}
      />

      <section className='pt-32 pb-20 px-4 md:px-[60px] lg:px-[200px] max-w-[1440px] mx-auto'>
        <div className='text-center mb-14'>
          <h2 className='text-4xl md:text-5xl font-extrabold text-[#337bbf]'>
            Medali Penyelesaian Kamu
          </h2>
          <p className='mt-4 text-base md:text-lg text-gray-700 max-w-2xl mx-auto'>
            Rayakan kemajuan dan dedikasi Anda. Setiap lencana mewakili tonggak pencapaian dalam perjalanan Anda menuju kesehatan mental yang lebih baik dan mendukung orang lain.
          </p>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center'>
          {badges.map((badge, index) => {
            const score = quizScores[badge.id - 1]; // quiz id starts from 1, array index from 0
            const imageSrc = score >= 80 ? badge.image : '/Badges/incomplete.png';
            const descSrc = score >= 80 ? badge.subtitle : 'Selesaikan kursus terlebih dahulu!';

            return (
              <motion.div
                key={badge.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className='w-full max-w-[300px]'
              >
                <Link href={`/Educational/Courses/${badge.id}`} className='block'>
                  <Card className='rounded-2xl bg-white border border-[#e0ecf5] shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-[1.03] cursor-pointer'>
                    <CardContent className='p-6 flex flex-col items-center text-center'>
                      <Image
                        src={imageSrc}
                        alt={badge.title}
                        width={150}
                        height={150}
                      />
                      <div className='font-semibold text-[#337bbf] text-lg'>
                        {badge.title}
                      </div>
                      <div className='text-sm text-gray-600 mt-2'>
                        {descSrc}
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Badges;
