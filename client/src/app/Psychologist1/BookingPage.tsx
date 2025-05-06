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

export default function BookingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [psychologists, setPsychologists] = useState<any[]>([]); // Type for psychologists data
  const [totalPages, setTotalPages] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const itemsPerPage = 3;

  // Search filters
  const [selectedCity, setSelectedCity] = useState<string>('All Cities');
  const [selectedDate, setSelectedDate] = useState<string>('All Dates');
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [cityDropdownOpen, setCityDropdownOpen] = useState(false);
  const [dateDropdownOpen, setDateDropdownOpen] = useState(false);
  const [cities, setCities] = useState<string[]>([]);
  const [dates, setDates] = useState<string[]>([]);

  // Handle scroll effect for header
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Load cities and dates
  useEffect(() => {
    setCities(['All Cities', ...getCities()]);
    setDates(['All Dates', ...getDates()]);
  }, []);

  // Load filtered data
  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      const filters = {
        city: selectedCity === 'All Cities' ? undefined : selectedCity,
        date: selectedDate === 'All Dates' ? undefined : selectedDate,
        search: searchTerm,
      };

      const result = getFilteredData(currentPage, itemsPerPage, filters);
      setPsychologists(result.data);
      setTotalPages(result.totalPages);
      setIsLoading(false);
    };

    loadData();
  }, [currentPage, selectedCity, selectedDate, searchTerm]);

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

  // Reset filters
  const resetFilters = () => {
    setSelectedCity('All Cities');
    setSelectedDate('All Dates');
    setSearchTerm('');
    setCurrentPage(1);
  };

  // Slice the psychologists data based on the current page and items per page
  const currentItems = psychologists.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

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
          className='bg-[#337bbf] rounded-3xl overflow-hidden relative'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='p-6 md:p-12 w-full md:max-w-[50%] text-white'>
            <motion.h1
              className='text-3xl md:text-5xl font-bold mb-4 leading-tight'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Be the <span className='text-[#edd500]'>Happiest</span>
              <br />
              Version of Yourself!
            </motion.h1>
            <motion.p
              className='mb-6 text-sm md:text-base opacity-90'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Everyone deserves to feel heard, supported, and empowered.{' '}
              <span className='text-[#edd500] font-medium'>
                Book a consultation
              </span>{' '}
              session to talk with a trusted professional about your thoughts,
              emotions, and goals. Together let's take meaningful steps toward
              becoming the happiest and healthiest version of yourself.
            </motion.p>
            <motion.button
              className='bg-white text-[#337bbf] px-6 py-3 rounded-full flex items-center gap-2 font-medium hover:bg-[#edd500] hover:text-white transition-all shadow-lg'
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Book now
              <ChevronRight className='w-5 h-5' />
            </motion.button>
          </div>
          <motion.div
            className='md:absolute md:right-0 md:bottom-0 md:h-full md:w-[50%] flex justify-center mt-6 md:mt-0'
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
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
          className='hidden md:flex flex-col items-center mr-4 text-vertical'
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className='rotate-180 [writing-mode:vertical-lr] text-2xl font-bold'>
            <span className='text-[#edd500]'>Your Ongoing</span>{' '}
            <span className='text-[#337bbf]'>Booking</span>
          </div>
        </motion.div>
        <motion.div
          className='flex-1 bg-white rounded-xl p-6 relative shadow-md hover:shadow-lg transition-shadow'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          whileHover={{ y: -5 }}
        >
          <div className='absolute top-0 left-0 w-full h-2 bg-[#337bbf] rounded-t-xl'></div>
          <div className='text-[#337bbf] mb-2 text-center md:text-left font-medium'>
            Onsite Counseling
          </div>
          <div className='flex flex-col md:flex-row justify-between items-center md:items-start gap-4'>
            <div className='flex flex-col md:flex-row items-center md:items-start gap-3'>
              <div className='bg-[#337bbf] text-white p-2 rounded-md shadow-md'>
                <MapPin className='w-5 h-5' />
              </div>
              <div className='text-center md:text-left'>
                <div className='text-[#337bbf] font-medium text-lg'>
                  Marissa Meditania, M.Psi., Psikolog
                </div>
                <div className='text-sm text-gray-600 mt-2'>
                  <div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
                    <Calendar className='w-4 h-4 text-[#337bbf]' />
                    <span>Tuesday, 6 May 2025</span>
                  </div>
                  <div className='flex items-center justify-center md:justify-start gap-2 mb-2'>
                    <Clock className='w-4 h-4 text-[#337bbf]' />
                    <span>16:45 - 17:45</span>
                  </div>
                  <div className='text-xs mt-2 max-w-md text-center md:text-left'>
                    Jakarta Selatan - Ibunda.id - Konseling Jakarta, Blok Rini No, Jl. Ampera Raya No.12A, RT.6/RW.2, Ragunan
                  </div>
                </div>
              </div>
            </div>
            <div className='w-40 h-40 rounded-full overflow-hidden mr-20 bg-gray-200 shrink-0 border-4 border-[#e6f0f9] shadow-md'>
              <Image
                src='/mentor.png'
                alt='Counselor'
                width={200}
                height={200}
                className='object-cover'
              />
            </div>
          </div>
          <div className='flex justify-center gap-2 mt-6'>
            <div className='w-2 h-2 rounded-full bg-[#337bbf]'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300'></div>
            <div className='w-2 h-2 rounded-full bg-gray-300'></div>
          </div>
        </motion.div>
      </section>

      {/* Search Section */}
      <section className='container mx-auto px-4 mt-12'>
        <motion.div
          className='flex flex-col md:flex-row gap-4'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* City Dropdown */}
          <div className='flex-1 relative'>
            <div
              className='bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer'
              onClick={() => setCityDropdownOpen(!cityDropdownOpen)}
            >
              <MapPin className='w-5 h-5 text-[#337bbf]' />
              <span className='text-[#337bbf] font-medium'>{selectedCity}</span>
              <ChevronDown className='w-4 h-4 ml-auto text-[#337bbf]' />
            </div>

            {cityDropdownOpen && (
              <motion.div
                className='absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {cities.map((city) => (
                  <div
                    key={city}
                    className={`px-4 py-2 cursor-pointer hover:bg-[#e6f0f9] ${
                      selectedCity === city
                        ? 'bg-[#e6f0f9] text-[#337bbf] font-medium'
                        : ''
                    }`}
                    onClick={() => {
                      setSelectedCity(city);
                      setCityDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                  >
                    {city}
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Date Dropdown */}
          <div className='flex-1 relative'>
            <div
              className='bg-white rounded-full px-4 py-3 flex items-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer'
              onClick={() => setDateDropdownOpen(!dateDropdownOpen)}
            >
              <Calendar className='w-5 h-5 text-[#337bbf]' />
              <span className='text-[#337bbf] font-medium'>{selectedDate}</span>
              <ChevronDown className='w-4 h-4 ml-auto text-[#337bbf]' />
            </div>

            {dateDropdownOpen && (
              <motion.div
                className='absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-lg z-10 max-h-60 overflow-y-auto'
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
              >
                {dates.map((date) => (
                  <div
                    key={date}
                    className={`px-4 py-2 cursor-pointer hover:bg-[#e6f0f9] ${
                      selectedDate === date
                        ? 'bg-[#e6f0f9] text-[#337bbf] font-medium'
                        : ''
                    }`}
                    onClick={() => {
                      setSelectedDate(date);
                      setDateDropdownOpen(false);
                      setCurrentPage(1);
                    }}
                  >
                    {date}
                  </div>
                ))}
              </motion.div>
            )}
          </div>

          {/* Search Input */}
          <div className='flex-1 md:flex-[2] flex'>
            <div className='flex-1 bg-white rounded-l-full px-4 py-3 flex items-center gap-2 shadow-md'>
              <Search className='w-5 h-5 text-gray-400' />
              <input
                type='text'
                placeholder='Search Psychologist'
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
            <button
              className='bg-[#337bbf] text-white px-4 py-3 rounded-r-full hover:bg-[#edd500] transition-all'
              onClick={handleSearch}
            >
              Search
            </button>
          </div>
        </motion.div>

        {/* Active Filters */}
        {(selectedCity !== 'All Cities' ||
          selectedDate !== 'All Dates' ||
          searchTerm) && (
          <motion.div
            className='mt-4 flex flex-wrap items-center gap-2'
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <span className='text-sm text-gray-500 flex items-center'>
              <Filter className='w-4 h-4 mr-1' /> Active filters:
            </span>

            {selectedCity !== 'All Cities' && (
              <span className='bg-[#e6f0f9] text-[#337bbf] text-xs px-3 py-1 rounded-full flex items-center'>
                {selectedCity}
                <button
                  className='ml-1 hover:text-red-500'
                  onClick={() => setSelectedCity('All Cities')}
                >
                  <X className='w-3 h-3' />
                </button>
              </span>
            )}

            {selectedDate !== 'All Dates' && (
              <span className='bg-[#e6f0f9] text-[#337bbf] text-xs px-3 py-1 rounded-full flex items-center'>
                {selectedDate}
                <button
                  className='ml-1 hover:text-red-500'
                  onClick={() => setSelectedDate('All Dates')}
                >
                  <X className='w-3 h-3' />
                </button>
              </span>
            )}

            {searchTerm && (
              <span className='bg-[#e6f0f9] text-[#337bbf] text-xs px-3 py-1 rounded-full flex items-center'>
                "{searchTerm}"
                <button
                  className='ml-1 hover:text-red-500'
                  onClick={() => setSearchTerm('')}
                >
                  <X className='w-3 h-3' />
                </button>
              </span>
            )}

            <button
              className='text-xs text-[#337bbf] hover:underline ml-auto'
              onClick={resetFilters}
            >
              Reset all filters
            </button>
          </motion.div>
        )}
      </section>

      {/* Counselor Listings */}
      <section id='counselor-listings' className='container mx-auto px-4 mt-8'>
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
                No psychologists found
              </div>
              <p className='text-gray-600'>
                Try adjusting your search filters to find more results.
              </p>
              <button
                className='mt-4 bg-[#337bbf] text-white px-4 py-2 rounded-full hover:bg-[#edd500] transition-all'
                onClick={resetFilters}
              >
                Reset filters
              </button>
            </motion.div>
          ) : (
            <motion.div
              key={currentPage + selectedCity + selectedDate + searchTerm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {currentItems.map((psychologist, index) => (
                <motion.div
                  key={psychologist.id}
                  className='bg-white rounded-xl p-6 mb-6 flex flex-col md:flex-row items-center md:items-start gap-6 shadow-md hover:shadow-lg transition-all'
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
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
                        {psychologist.handled_count} people have booked a consultation
                      </span>
                    </div>
                    <div className='mt-3 text-sm text-gray-600 flex items-start gap-2'>
                      <MapPin className='w-4 h-4 text-[#337bbf] shrink-0 mt-1' />
                      <span>
                        {psychologist.location || 'Jakarta Selatan - Ibunda.id - Konseling Jakarta'}
                      </span>
                    </div>
                    <div className='mt-3 text-sm text-gray-600 flex items-center justify-center md:justify-start gap-2'>
                      <Clock className='w-4 h-4 text-[#337bbf]' />
                      <span>Available Schedule: 08:00 - 21:45 WIB</span>
                    </div>

                    {/* Available time slots */}
                  </div>
                  <div className='mt-4 md:mt-0'>
                  <motion.button
                    className='bg-[#337bbf] text-white px-6 py-3 rounded-full hover:bg-[#edd500] transition-all w-full md:w-auto shadow-md'
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {/* <Link href={`/Detailed/${psychologist.id}`}> */}
                    <Link href={'/Detailed'}>
                      Make an Appointment
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
