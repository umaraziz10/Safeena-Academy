'use client';

import Image from 'next/image';
import {
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  MapPin,
  Search,
  X,
  ChevronsLeft,
  ChevronsRight,
  Filter,
} from 'lucide-react';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPinIcon } from "lucide-react"
import {
  type Appointment,
  getFilteredData,
  getCities,
  getDates,
} from './Appointment';
import Navbar from '../Component/navbar';
import { Footer } from '../Component/Footer';
import { fetchWithToken } from "@/lib/fetchWithToken";
import Link from 'next/link';
import { fadeIn } from '@/app/variant';

export default function BookingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [psychologists, setPsychologists] = useState<any[]>([]); // Type for psychologists data
  const [allPsychologists, setAllPsychologists] = useState<any[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 3;
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  
  // Search filters
  const [searchTerm, setSearchTerm] = useState<string>('');
  
  const [hasOngoing, setHasOngoing] = useState(true);
  const [ongoingPsyId, setOngoingPsyId] = useState(0);
  const [ongoingService, setOngoingService] = useState('');
  const [ongoingPsy, setOngoingPsy] = useState('');
  const [ongoingDate, setOngoingDate] = useState('');
  const [ongoingStart, setOngoingStart] = useState('');
  const [ongoingEnd, setOngoingEnd] = useState('');
  const [ongoingLoc, setOngoingLoc] = useState('');
  const [ongoingMap, setOngoingMap] = useState('');

  useEffect(() => {
    async function fetchOngoing() {
      try {
        const ongoingRes = await fetchWithToken('/consultations/ongoing-consult');
        const data = await ongoingRes.json();

        if (data.message === 'No ongoing consultations found') {
          setHasOngoing(false);
        } else {
          const ongoing = data.ongoing_consultations[0]; // Use index if it's an array
          setOngoingPsyId(ongoing.psychologist_id);
          setOngoingService(ongoing.type_of_service);
          setOngoingPsy(ongoing.psychologist_name);
          setOngoingDate(ongoing.consult_date);
          setOngoingStart(ongoing.start_time);
          setOngoingEnd(ongoing.end_time);
          setOngoingLoc(ongoing.location);
          setOngoingMap(ongoing.location_url);
          setHasOngoing(true);
        }
      } catch (error) {
        console.error('Error fetching consultations:', error);
        setHasOngoing(false);
      }
    }

    fetchOngoing();
  }, []);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Fetch psychologists data from the API
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);
      
      try {
        const response = await fetchWithToken('/psychologists'); // Fetch psychologists data
        const data = await response.json();
        
        if (response.ok) {
          setPsychologists(data.psychologists); // Populate psychologists data
          setTotalPages(Math.ceil(data.psychologists.length / itemsPerPage)); // Calculate total pages based on 3 items per page
        } else {
          console.error('Failed to fetch psychologists data:', data);
        }
      } catch (error) {
        console.error('Error fetching psychologists:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadData();
  }, [currentPage]);

  // Handle pagination
  const handlePageChange = (newPage: number) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage); // Update the page number
      document.getElementById('counselor-listings')?.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to listings
    }
  };

  // Go to first page
  const goToFirstPage = () => {
    handlePageChange(1);
  };

  // Go to last page
  const goToLastPage = () => {
    handlePageChange(totalPages);
  };

  // Handle search
  const handleSearch = () => {
    setCurrentPage(1); // Reset to first page when searching
  };


  const filteredPsychologists = psychologists.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase())
);

const currentItems = filteredPsychologists.slice(indexOfFirstItem, indexOfLastItem);




  return (
    <div
      className='min-h-screen pt-24'
      style={{
        background:
          'linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 72.78%, #337BBF 96.96%)',
      }}
    >
      {/* Header */}
      <Navbar />

      {/* Hero Section */}
      <section className='container mx-auto px-4 mt-6 md:mt-8'>
        <motion.div
          variants={fadeIn('down', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='bg-[#337bbf] rounded-3xl overflow-hidden relative'
        >
          <div className='p-6 md:p-12 w-full md:max-w-[50%] text-white'>
            <motion.h1
              variants={fadeIn('left', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-3xl md:text-5xl font-bold mb-4 leading-tight'
            >
              Jadilah Versi <span className='text-[#edd500]'>Terbaik</span>
              <br />
              Dari Dirimu!
            </motion.h1>
            <motion.p
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='mb-6 text-sm md:text-base opacity-90'
            >
              Setiap orang berhak merasa didengar, didukung, dan diberdayakan.{' '}
              <span className='text-[#edd500] font-medium'>
              Jadwalkan sesi konsultasi
              </span>{' '}
              untuk berbicara dengan profesional terpercaya tentang pikiran, emosi, dan tujuan Anda. Bersama-sama, mari kita ambil langkah-langkah berarti menuju versi diri Anda yang paling bahagia dan sehat.
            </motion.p>
            <motion.a
              href='#counselor-listings'
              className='bg-white text-[#337bbf] px-6 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-[#edd500] hover:text-white transition-all shadow-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Konsultasi Sekarang
              <ChevronRight className='w-5 h-5' />
            </motion.a>
          </div>
          <motion.div
            variants={fadeIn('left', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className='md:absolute md:right-0 md:bottom-0 md:h-full md:w-[50%] flex justify-center mt-6 md:mt-0'
          >
            <Image
              src='/maskot.png'
              alt='Happy character illustration'
              width={400}
              height={400}
              className='object-contain h-64 md:h-full md:absolute md:bottom-0 md:right-0'
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Booking Section */}
      <section className='container mx-auto px-4 mt-12 flex'>
        <motion.div
          variants={fadeIn('up', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          className='hidden md:flex flex-col items-center mr-4 text-vertical'
        >
          <div className='rotate-180 [writing-mode:vertical-lr] text-2xl font-bold'>
            <span className='text-[#edd500]'>Jadwal Konsultasi</span>{' '}
            <span className='text-[#337bbf]'>Kamu</span>
          </div>
        </motion.div>

        <motion.div
          className='flex-1 bg-white rounded-xl p-6 relative shadow-md hover:shadow-lg transition-shadow'
          variants={fadeIn('left', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
          whileHover={{ y: -5 }}
        >
          <div className='absolute top-0 left-0 w-full h-2 bg-[#337bbf] rounded-t-xl'></div>

          {hasOngoing ? (
            <>
              <div className='text-[#337bbf] mb-2 text-center md:text-left font-medium'>
                <b>Jenis Layanan :</b> Konsultasi {ongoingService}
              </div>
              <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-4'>
                <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
                  <a
                    href={ongoingMap}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='bg-[#337bbf] hover:bg-[#28629e] transition-all duration-200 transform hover:scale-105 text-white p-2 rounded-md shadow-md inline-flex items-center justify-center'
                  >
                    <MapPin className='w-5 h-5' />
                  </a>
                  <div className='text-center md:text-left'>
                    <div className='text-[#337bbf] font-medium text-lg'>
                      {ongoingPsy}
                    </div>
                    <div className='text-sm text-gray-600 mt-2'>
                      <div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
                        <Calendar className='w-4 h-4 text-[#337bbf]' />
                        {new Date(ongoingDate).toLocaleDateString('id-ID', {
                          weekday: 'long',
                          day: 'numeric',
                          month: 'long',
                          year: 'numeric',
                        })}
                      </div>
                      <div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
                        <Clock className='w-4 h-4 text-[#337bbf]' />
                        <span>
                          {ongoingStart.slice(0, 5)} - {ongoingEnd.slice(0, 5)}
                        </span>
                      </div>
                      <div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
                        <MapPinIcon className='w-4 h-4 text-[#337bbf]' />
                        <span>{ongoingLoc}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='w-40 h-40 rounded-full overflow-hidden mr-20 bg-gray-200 shrink-0 border-4 border-[#e6f0f9] shadow-md'>
                  <Image
                    src={`/Psychologist/id${ongoingPsyId}`}
                    alt='Counselor'
                    width={200}
                    height={200}
                    className='object-cover'
                  />
                </div>
              </div>
              <div className='flex justify-center gap-2 mt-6'>
                <div className='w-2 h-2 rounded-full bg-gray-300'></div>
                <div className='w-2 h-2 rounded-full bg-[#337bbf]'></div>
                <div className='w-2 h-2 rounded-full bg-gray-300'></div>
              </div>
            </>
          ) : (
            <>
              <div className='flex justify-center items-center text-[#337bbf] mb-4 text-center md:text-left font-semibold text-xl mt-[1rem]'>
                Kamu belum menjadwalkan konsultasi.
              </div>
              <div className='flex justify-center items-center mt-4'>
                <div className='text-center text-gray-600 text-sm md:text-base'>
                  <p className='mb-2'>Sepertinya Anda belum menjadwalkan sesi konseling apa pun.</p>
                  <a 
                  href='#counselor-listings'
                  className='text-[#337bbf] font-medium'>
                    Mulailah dengan menjadwalkan sesi pertama Anda sekarang!
                  </a>
                </div>
              </div>
              <div className='flex justify-center gap-2 mt-20'>
                <div className='w-2 h-2 rounded-full bg-gray-300'></div>
                <div className='w-2 h-2 rounded-full bg-[#337bbf]'></div>
                <div className='w-2 h-2 rounded-full bg-gray-300'></div>
              </div>
            </>
          )}
        </motion.div>
      </section>

      {/* Search Section */}
      <section className='container mx-auto px-4 mt-12'>
        <motion.div
          className='flex flex-col md:flex-row gap-4'
          variants={fadeIn('down', 0.1)}
          initial='hidden'
          whileInView={'show'}
          viewport={{once: false, amount: 0.7}}
        >

          {/* Search Input */}
          <div className='flex-1 md:flex-[2] flex'>
            <div className='flex-1 bg-white rounded-l-full rounded-r-full px-4 py-3 flex items-center gap-2 shadow-md'>
              <Search className='w-5 h-5 text-gray-400' />
              <input
                type='text'
                placeholder='Cari Psikolog'
                className='bg-transparent border-none outline-none flex-1 text-gray-700'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    handleSearch();
                  }
                }}
              />
            </div>
          </div>
        </motion.div>
      </section>

      {/* Counselor Listings */}
      <section id='counselor-listings' className='container mx-auto px-4 mt-8 scroll-mt-[15rem]'>
        <AnimatePresence mode='wait'>
          {isLoading ? (
            <motion.div
              className='flex justify-center items-center py-20'
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <div className='w-12 h-12 border-4 border-[#337bbf] border-t-transparent rounded-full animate-spin'></div>
            </motion.div>
          ) : currentItems.length === 0 ? (
            <motion.div
              className='bg-white rounded-xl p-8 text-center shadow-md'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className='text-[#337bbf] text-xl font-medium mb-2'>
                Tidak ada psikolog yang ditemukan
              </div>
              <p className='text-gray-600'>
                Cobalah menyesuaikan pencarianmu untuk menemukan lebih banyak hasil.
              </p>
            </motion.div>
          ) : (
            <motion.div
              key={searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentItems.map((psychologist) => (
                <motion.div
                  key={psychologist.id}
                  className='bg-white rounded-xl p-6 mb-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-md hover:shadow-lg transition-all'
                  // variants={fadeIn('up', 0.1)}
                  // initial='hidden'
                  // whileInView={'show'}
                  // viewport={{once: false, amount: 0.7}}
                  whileHover={{ y: -5 }}
                >
                  <div className='w-24 h-24 rounded-full overflow-hidden bg-gray-200 shrink-0 border-4 border-[#e6f0f9] shadow-md'>
                    <Image
                      src={`/Psychologist/id${psychologist.id}`}
                      alt='Counselor'
                      width={96}
                      height={96}
                      className='object-cover'
                    />
                  </div>
                  <div className='flex-1 text-center md:text-left'>
                    <h3 className='text-[#337bbf] text-xl font-medium'>
                      {psychologist.name}
                    </h3>
                    <div className='flex items-center justify-center md:justify-start gap-2 mt-2'>
                      <div className='bg-[#337bbf] p-1 rounded-full'>
                        <div className='w-4 h-4 bg-white rounded-full'></div>
                      </div>
                      <span className='text-sm text-gray-600'>
                        {psychologist.handled_count} orang telah melakukan konsultasi.
                      </span>
                    </div>
                    <div className='mt-3 text-sm text-gray-600 flex items-start gap-2'>
                      <MapPin className='w-4 h-4 text-[#337bbf] shrink-0 mt-1' />
                      <span>
                        {psychologist.location}
                      </span>
                    </div>
                    <div className='mt-3 text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2'>
                      <Clock className='w-4 h-4 text-[#337bbf]' />
                      <span>Jadwal Tersedia: 08:00 - 21:45 WIB</span>
                    </div>

                    {/* Available time slots */}
                  </div>
                  <div className='mt-4 md:mt-0'>
                  <motion.button
                    className='bg-[#337bbf] text-white px-6 py-3 rounded-full hover:bg-[#edd500] transition-all w-full md:w-auto shadow-md'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link href={`/Psychologist/${psychologist.id}`}>
                      Buat Janji
                    </Link>
                  </motion.button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* Pagination */}
      {!isLoading && currentItems.length > 0 && (
        <div className='flex justify-center items-center gap-2 my-8'>
          <motion.button
            className='w-8 h-8 rounded-full flex items-center justify-center border border-[#337bbf] text-[#337bbf] hover:bg-[#337bbf] hover:text-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToFirstPage}
            disabled={currentPage === 1}
          >
            <ChevronsLeft className='w-4 h-4' />
          </motion.button>
          <motion.button
            className='w-8 h-8 rounded-full flex items-center justify-center border border-[#337bbf] text-[#337bbf] hover:bg-[#337bbf] hover:text-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeft className='w-4 h-4' />
          </motion.button>

          {Array.from({ length: totalPages }).map((_, index) => {
            const pageNumber = index + 1;
            const shouldShow =
              pageNumber === 1 ||
              pageNumber === totalPages ||
              Math.abs(pageNumber - currentPage) <= 1;

            if (!shouldShow) {
              if (pageNumber === 2 || pageNumber === totalPages - 1) {
                return (
                  <span key={pageNumber} className='text-[#337bbf]'>
                    ...
                  </span>
                );
              }
              return null;
            }

            return (
              <motion.button
                key={pageNumber}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  pageNumber === currentPage
                    ? 'bg-[#edd500] text-white'
                    : 'border border-[#337bbf] text-[#337bbf] hover:bg-[#337bbf] hover:text-white'
                } transition-colors`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => handlePageChange(pageNumber)}
              >
                {pageNumber}
              </motion.button>
            );
          })}

          <motion.button
            className='w-8 h-8 rounded-full flex items-center justify-center border border-[#337bbf] text-[#337bbf] hover:bg-[#337bbf] hover:text-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRight className='w-4 h-4' />
          </motion.button>
          <motion.button
            className='w-8 h-8 rounded-full flex items-center justify-center border border-[#337bbf] text-[#337bbf] hover:bg-[#337bbf] hover:text-white transition-colors'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={goToLastPage}
            disabled={currentPage === totalPages}
          >
            <ChevronsRight className='w-4 h-4' />
          </motion.button>
        </div>
      )}

      <Footer />
    </div>
  );
}
