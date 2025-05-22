'use client';

import React, { useEffect, useState } from 'react';
import { Card } from '../Component/card';
import { Button } from '@/components/ui/button';
import FallingLeaves from "../Component/falling-leaves"
import { Box } from '../Component/Box';
import { Footer } from '../Component/Footer';
import { fetchWithToken } from '@/lib/fetchWithToken';
import { motion } from 'framer-motion'
import { fadeIn } from '@/app/variant'

const Index = (): JSX.Element => {
  const [continueCourseLink, setContinueCourseLink] = useState<string>('');
  const [role, setRole] = useState('');
  const [userID, setUserID] = useState(0);

  
  useEffect(() => {
    document.title = 'Safeena Academy';
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    
    if (favicon) {
      favicon.href = '/footer.png';
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/footer.png';
      document.head.appendChild(link);
    }
  }, []);


  useEffect(() => {
    async function fetchRole() {
      try {
        const roleRes = await fetchWithToken('/users/me')
        const roleData = await roleRes.json();
        if(roleData.message === "Unauthorized: No token provided") {
          setRole('No Role');
        } else {
          setRole(roleData.role);
        }
        setUserID(roleData.id);
      } catch (error) {
        console.error("Error role", error);
      }
    }
    fetchRole();
  }, []);


  useEffect(() => {
    async function fetchContinueCourse() {
      try {
        const res = await fetchWithToken('/materials');
        const data = await res.json();

        // Filter yang status === 1 (sudah selesai)
        const completedMaterials = data.filter((material: any) =>
          Array.isArray(material.status) && material.status.includes(userID)
        );

        if (completedMaterials.length > 0) {
          completedMaterials.sort(
            (a: any, b: any) => new Date(b.updatedAt).getTime() - new Date(a.updatedAt).getTime()
          );

          const lastCompletedMaterial = completedMaterials[0];
          let nextMaterialId = lastCompletedMaterial.material_id + 1;

          // Cek batas material_id
          const allMaterialIds = data.map((m: any) => m.material_id);
          const maxMaterialId = Math.max(...allMaterialIds);

          if (nextMaterialId > maxMaterialId ) {
            setContinueCourseLink('/Educational');
          } else {
            setContinueCourseLink(`/Educational/Learning/${nextMaterialId}`);
          }
        } else {
          setContinueCourseLink('/Educational');
        }
      } catch (error) {
        console.error('Failed fetching materials', error);
      }
    }

    if (role === 'student' || role === 'admin' || role === 'teacher') {
      fetchContinueCourse();
    } else {
      setContinueCourseLink('/Login')
    }
  }, [role]);


  // Service cards data
  const serviceCards = [
  {
    title: 'Lanjutkan Kursus Kamu',
    image: '/image-20.png',
  },
  {
    title: 'Lihat Semua Kursus',
    image: '/image-24.png',
  },
  {
    title: 'Medali Penyelesaian Kamu',
    image: '/image-26.png',
  },
  {
    title: 'Layanan 24/7',
    image: '/image-25.png',
  },
];

  return (
    <div
    className='flex flex-row justify-center w-full'
      style={{
        position: 'absolute',
        top: '0px',
        background:
        'linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 72.78%, #337BBF 96.96%)',
      }}
      >
      <div className='overflow-hidden w-full relative'>
        {/* Hero Section */}
        <section className='w-full max-w-[1070px] mt-[100px] md:mt-[223px] mx-auto text-center px-4'>
          <motion.h1 
          variants={fadeIn('right', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.65}}
          className='font-bold text-4xl md:text-[64px] leading-[normal]'>
            <span className='text-[#334fb4]'>Temukan </span>
            <span className='text-[#edd500]'>Jalanmu</span>
            <span className='text-black'> </span>
            <span className='text-[#65b4ff]'>Menuju Kesejahteraan Mental</span>
          </motion.h1>
          <motion.p 
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.65}}
          className='font-medium text-base md:text-lg text-[#337bbf] max-w-[585px] mx-auto mt-[20px]'>
            Di Safeena Academy, kami memberikan bimbingan penuh empati dan sumber daya berbasis bukti untuk membantu Anda menghadapi tantangan 
            hidup dengan kepercayaan diri dan kejernihan.
          </motion.p>
          <motion.div 
          variants={fadeIn('up', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.65}}
          className='flex flex-col sm:flex-row justify-center gap-4 mt-[40px]'>
            <Button className='w-full sm:w-[255px] h-[58px] rounded-[30px] bg-gradient-to-r from-[#337bbf] to-[#65b4ff]'>
              <a href="#services" className='w-full h-full flex items-center justify-center'>
                <span className='font-medium text-xl text-white'>
                  Mulai Perjalananmu
                </span>
              </a>
            </Button>

            <Button
              variant='outline'
              className='w-full sm:w-[255px] h-[58px] rounded-[30px] border border-[#337bbfc2] bg-transparent'
            >
              <a href="#why" className='w-full h-full flex items-center justify-center'>
                <span className='font-medium text-xl bg-gradient-to-r from-[rgba(51,123,191,1)] to-[rgba(110,164,215,1)] bg-clip-text text-transparent'>
                  Lihat Mengapa
                </span>
                <img
                  className='w-[25px] h-[25px] ml-2 object-cover'
                  alt='Arrow'
                  src='/image-13.png'
                />
              </a>
            </Button>
          </motion.div>
        </section>

        {/* Banner Image */}
        <motion.div 
        variants={fadeIn('up', 0.1)}
        initial='hidden'
        whileInView={'show'}
        viewport={{once: false, amount: 0.65}}
        className='w-full max-w-[1066px] h-[200px] md:h-[500px] mt-[5rem] mx-auto px-4'>
          <div className='h-full rounded-[25px] bg-[url(/whatsapp-image-2025-03-26-at-15-16-39-e5597558-1.png)] bg-cover bg-center' />
        </motion.div>

        {/* We are ready to help section */}
        <section id="services" className='mt-[80px] relative scroll-mt-[-7rem]'>
          <img className='w-full' alt='Vector' src='/vector.svg' />
          <div className='w-full [background-image:url(/cardbg.svg)] bg-no-repeat bg-cover py-[60px] md:py-[104px]'>
            <div className='max-w-[1070px] mx-auto px-4'>
              <motion.div 
              variants={fadeIn('left', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.9}}
              className='text-center mb-[40px] md:mb-[60px]'>
                <h2 className='text-3xl md:text-5xl font-normal mb-4'>
                  <span className='font-light text-[#337bbfc2]'>Kami </span>
                  <span className='font-light text-[#ead61d]'>siap</span>
                  <span className='font-light text-[#337bbfc2]'> untuk</span>
                  <span className='font-light text-[#337bbf]'> </span>
                  <span className='font-medium text-[#337bbf]'>membantu</span>
                </h2>
                <p className='font-extralight text-base md:text-lg text-[#004689]'>
                  Safeena akan selalu siap membantu Kamu kapan pun dan di mana pun.
                </p>
              </motion.div>

              <motion.div
                variants={fadeIn('down', 0.1)}
                initial='hidden'
                whileInView='show'
                viewport={{ once: false, amount: 0.65 }}
                className='grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-2 lg:px-0'
              >
                {serviceCards.map((card, index) => {
                  let link = '/Login'; // Default
                  
                  if (card.title === 'Lanjutkan Kursus Kamu') link = continueCourseLink;
                  if (card.title === 'Lihat Semua Kursus') link = '/Educational';
                  if (card.title === 'Medali Penyelesaian Kamu') link = '/Educational/Badges';
                  if (card.title === 'Layanan 24/7') link = '/Chatbot';

                  return (
                    <div
                      key={index}
                      className={`flex justify-center
                        ${index === 0 || index === 2 ? 'lg:mb-16 pb-0 lg:-translate-y-4' : ''}
                        ${index === 1 || index === 3 ? 'lg:mt-16 pt-0 lg:translate-y-4' : ''}
                      `}
                    >
                      <a
                        href={link}
                        className="
                          group
                          w-full max-w-[280px] block rounded-[10px] 
                          border-[3px] sm:border-[4px] lg:border-[6px] border-solid 
                          shadow-[4px_4px_4px_#00000040] sm:shadow-[7px_6px_4px_#00000040] 
                          transition-all duration-300
                          bg-[#f6f6f6] border-[#4579aa] 
                          hover:bg-[#337bbf] hover:border-[#f6f6f6] 
                          transform hover:scale-105
                        "
                      >
                        <Card
                          className="
                            w-full max-w-[280px] rounded-[10px] 
                            border-[3px] sm:border-[4px] lg:border-[6px] border-solid 
                            shadow-[4px_4px_4px_#00000040] sm:shadow-[7px_6px_4px_#00000040] 
                            transition-all duration-300
                            bg-transparent border-transparent
                            flex flex-col items-center justify-center
                            p-4 sm:p-6 h-[220px] sm:h-[260px] lg:h-[280px]
                          "
                        >
                          <img
                            className="w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px] object-contain mb-4"
                            alt={card.title}
                            src={card.image}
                          />
                          <h3
                            className="
                              font-normal text-lg sm:text-xl lg:text-xl text-center
                              text-[#4579aa] group-hover:text-[#f6f6f6] transition-colors duration-300
                            "
                          >
                            {card.title}
                          </h3>
                        </Card>
                      </a>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
          <img className='w-full' alt='Vector' src='/vector-1.svg' />
        </section>

        {/* Needs Someone to Talk? section */}
        <section className='w-full max-w-[1046px] mx-auto mt-[80px] flex flex-col-reverse md:flex-row items-center justify-between gap-8 px-4'>
          <motion.div 
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='w-full md:w-[397px] h-[300px] md:h-[397px]'>
            <img
              className='w-full h-full object-scale-down rounded-lg'
              alt='Consultation'
              src='/consult.png'
            />
          </motion.div>
          <motion.div 
          variants={fadeIn('right', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='max-w-full md:max-w-[512px] text-center md:text-right'>
            <h2 className='font-bold text-3xl md:text-[40px] mb-4'>
              <span className='text-[#337bbf]'>Butuh </span>
              <span className='text-[#ffee5a]'>Teman</span>
              <span className='text-[#337bbf]'> Bicara?</span>
            </h2>
            <p className='text-base text-[#337bbf] mb-8'>
              Merasa tertekan, stres, atau hanya butuh seseorang untuk mendengarkan? Kami di sini untuk Anda. Dapatkan ruang yang aman dan mendukung untuk berbicara dan didengar—tanpa penilaian.
            </p>
            <a href="/Psychologist">
              <Button className="w-full md:w-[307px] h-[72px] rounded-[15px] bg-gradient-to-r from-[#337bbf] to-[#65b4ff]">
                <img
                  className="w-[31px] h-[31px] mr-2 object-cover"
                  alt="Icon"
                  src="/arrow.png"
                />
                <span className="font-medium text-xl md:text-2xl text-[#ffee5a]">
                  Konsultasi
                </span>
              </Button>
            </a>
          </motion.div>
        </section>

        <div className='mt-40'> </div>
        <Box />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
