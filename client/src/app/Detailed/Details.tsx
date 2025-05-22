'use client';

import { useEffect, useState } from 'react';
import { MapPinIcon } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Footer } from '../Component/Footer';
import { fetchWithToken } from "@/lib/fetchWithToken"
import { useParams, useSearchParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { fadeIn } from '../variant';


interface DetailsProps {
  psychologist: {
    id: string
    name: string
    image: string
    description: string
    location: string

    education1 : string
    education2 : string
  }
}

export const Details = (): JSX.Element => {
  const { id } = useParams();
  const searchParams = useSearchParams();
  const [loading, setLoading] = useState(true);

  const [PsyName, setPsyName] = useState('');
  const [PsyDesc, setPsyDesc] = useState('');
  const [PsyLoc, setPsyLoc] = useState('');
  const [PsyEdu1, setPsyEdu1] = useState('');
  const [PsyEdu2, setPsyEdu2] = useState('');

  useEffect(() => {
    async function fetchPsychologist() {
      try {
        const psyRes = await fetchWithToken(`/psychologists/${id}`);
        const psyData = await psyRes.json(); 
        setPsyName(psyData.psychologist.name);        
        setPsyDesc(psyData.psychologist.description);        
        setPsyLoc(psyData.psychologist.location);        
        setPsyEdu1(psyData.psychologist.education_1);        
        setPsyEdu2(psyData.psychologist.education_2);        
        
      } catch (error) {
        console.error('Failed to fetch psychologist data:', error);
      } finally {
        setLoading(false);
      }
    };
    if (id) fetchPsychologist();
  }, [id]);

  useEffect(() => {
    document.title = PsyName;
    const favicon = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;
    
    if (favicon) {
      favicon.href = '/footer.png';
    } else {
      const link = document.createElement('link');
      link.rel = 'icon';
      link.href = '/footer.png';
      document.head.appendChild(link);
    }
  }, [PsyName]);

  if (loading) return <p className="text-center mt-10">Loading...</p>;

  return (
    <section className="w-full max-w-[1067px] mx-auto pt-6 pb-2 px-4 sm:px-6">
      <motion.h1 
      variants={fadeIn('right', 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      className="font-bold text-[#337bbf] text-[28px] sm:text-[32px] md:text-[40px] font-['Outfit',Helvetica] mb-4 sm:mb-6">
        Detail Psikolog
      </motion.h1>

      <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
        <motion.div
          variants={fadeIn('right', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className="w-full sm:w-[200px] md:w-[285px] h-[250px] sm:h-[300px] md:h-[381px] rounded-[20px] bg-cover bg-center shrink-0"
          style={{ backgroundImage: `url(/Psychologist/id${id})` }}
        />

        <div className="flex flex-col flex-1">
          <motion.h2 
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className="text-[24px] sm:text-[28px] md:text-[32px] font-medium text-[#337bbf] font-['Outfit',Helvetica] mb-3 sm:mb-4">
            {PsyName}
          </motion.h2>

          <motion.p 
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className="text-[14px] sm:text-[15px] text-[#337bbf] font-['Outfit',Helvetica] mb-4 sm:mb-6">
            <span className="font-light"> {PsyDesc}</span>
          </motion.p>

          <motion.div 
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className="flex items-center mt-auto">
            <MapPinIcon className="w-5 h-5 sm:w-[25px] sm:h-[25px] text-[#337bbf] flex-shrink-0" />
            <span className="ml-2 text-[10px] sm:text-xs text-[#337bbf] font-normal font-['Outfit',Helvetica]">
              {PsyLoc}
            </span>
          </motion.div>
        </div>
      </div>

      <motion.div
      variants={fadeIn('left', 0.1)}
      initial='hidden'
      whileInView={'show'}
      viewport={{once: false, amount: 0.7}}
      >
        <Card className="mt-4 sm:mt-6 border border-solid border-[#337bbf] rounded-[10px] w-full sm:w-[90%] md:w-[705px] sm:ml-auto shadow-none">
          <CardContent className="p-4 sm:p-7">
            <div className="flex items-start">
              <div className="w-5 h-5 sm:w-[25px] sm:h-[25px] flex items-center justify-center bg-[#337bbf] rounded-md">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 1L1 5L8 9L15 5L8 1Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 11L8 15L15 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1 8L8 12L15 8"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="ml-3 font-semibold text-[#337bbf] text-sm sm:text-base font-['Outfit',Helvetica]">
                Edukasi
              </h3>
            </div>

            <div className="flex flex-wrap sm:flex-nowrap mt-3 sm:mt-4">
              <div className="ml-8 sm:ml-[46px] w-full sm:w-[500px] font-normal text-[#337bbf] text-xs sm:text-sm font-['Outfit',Helvetica]">
                {PsyEdu1}
              </div>
            </div>
            <br></br>
            <div className="ml-8 sm:ml-[46px] w-full sm:w-[500px] font-normal text-[#337bbf] text-xs sm:text-sm font-['Outfit',Helvetica]">
                {PsyEdu2}
            </div>
          </CardContent>
        </Card>
      </motion.div>
      
    </section>
  )
}

export default Details
