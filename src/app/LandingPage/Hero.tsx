import React from 'react';
import { Card, CardContent } from '../Component/card';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../Component/accordion';
import { Box } from '../Component/Box';
import { Footer } from '../Component/Footer';

const Index = (): JSX.Element => {
  // Navigation menu items
  const navItems = [
    { name: 'Home', active: true },
    { name: 'Services', hasDropdown: true },
    { name: 'Resources', active: false },
    { name: 'About us', active: false },
    { name: 'Contact', active: false },
  ];

  // Service cards data
  const serviceCards = [
    {
      title: 'Continue your Courses',
      image: '/image-20.png',
      bgColor: 'bg-[#f6f6f6]',
      textColor: 'text-[#4579aa]',
      borderColor: 'border-[#4579aa]',
    },
    {
      title: 'View All Courses',
      image: '/image-24.png',
      bgColor: 'bg-[#f6f6f6]',
      textColor: 'text-[#4579aa]',
      borderColor: 'border-[#4579aa]',
    },
    {
      title: 'Your Completion Badge',
      image: '/image-26.png',
      bgColor: 'bg-[#337bbf]',
      textColor: 'text-[#f6f6f6]',
      borderColor: 'border-[#f6f6f6]',
    },
    {
      title: '24/7 Support',
      image: '/image-25.png',
      bgColor: 'bg-[#f6f6f6]',
      textColor: 'text-[#4579aa]',
      borderColor: 'border-[#4579aa]',
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
          <h1 className='font-bold text-4xl md:text-[64px] leading-[normal]'>
            <span className='text-[#334fb4]'>Find Your </span>
            <span className='text-[#edd500]'>Path</span>
            <span className='text-black'> </span>
            <span className='text-[#65b4ff]'>to Mental Wellbeing</span>
          </h1>
          <p className='font-medium text-base md:text-lg text-[#337bbf] max-w-[585px] mx-auto mt-[20px]'>
            At Safeena Academy, we provide compassionate guidance and
            evidence-based resources to help you navigate life's challenge with
            confidence and clarity
          </p>
          <div className='flex flex-col sm:flex-row justify-center gap-4 mt-[40px]'>
            <Button className='w-full sm:w-[255px] h-[58px] rounded-[30px] bg-gradient-to-r from-[#337bbf] to-[#65b4ff]'>
              <span className='font-medium text-xl text-white'>
                Start Your Journey
              </span>
            </Button>
            <Button
              variant='outline'
              className='w-full sm:w-[255px] h-[58px] rounded-[30px] border border-[#337bbfc2] bg-transparent'
            >
              <span className='font-medium text-xl bg-gradient-to-r from-[rgba(51,123,191,1)] to-[rgba(110,164,215,1)] bg-clip-text text-transparent'>
                Learn More
              </span>
              <img
                className='w-[25px] h-[25px] ml-2 object-cover'
                alt='Arrow'
                src='/image-13.png'
              />
            </Button>
          </div>
        </section>

        {/* Banner Image */}
        <div className='w-full max-w-[1066px] h-[300px] md:h-[657px] mt-[40px] mx-auto px-4'>
          <div className='h-full rounded-[25px] bg-[url(/whatsapp-image-2025-03-26-at-15-16-39-e5597558-1.png)] bg-cover bg-center' />
        </div>

        {/* We are ready to help section */}
        <section className='mt-[80px] relative'>
          <img className='w-full' alt='Vector' src='/vector.svg' />
          <div className='w-full [background-image:url(/cardbg.svg)] bg-no-repeat bg-cover py-[60px] md:py-[104px]'>
            <div className='max-w-[1070px] mx-auto px-4'>
              <div className='text-center mb-[40px] md:mb-[60px]'>
                <h2 className='text-3xl md:text-5xl font-normal mb-4'>
                  <span className='font-light text-[#337bbfc2]'>We are </span>
                  <span className='font-light text-[#ead61d]'>ready</span>
                  <span className='font-light text-[#337bbfc2]'> to</span>
                  <span className='font-light text-[#337bbf]'> </span>
                  <span className='font-medium text-[#337bbf]'>help</span>
                </h2>
                <p className='font-extralight text-base md:text-lg text-[#004689]'>
                  Safeena will always be ready to help you whenever and
                  wherever.
                </p>
              </div>

              {/* Improved responsive grid layout for cards */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-0 px-2 lg:px-0'>
                {serviceCards.map((card, index) => (
                  <div
                    key={index}
                    className={`
                      flex justify-center
                      ${
                        index === 0 || index === 2
                          ? 'lg:mb-16 pb-0 lg:-translate-y-4'
                          : ''
                      }
                      ${
                        index === 1 || index === 3
                          ? 'lg:mt-16 pt-0 lg:translate-y-4'
                          : ''
                      }
                    `}
                  >
                    <Card
                      className={`
                        w-full max-w-[280px] 
                        rounded-[10px] 
                        border-[3px] sm:border-[4px] lg:border-[6px] 
                        border-solid 
                        shadow-[4px_4px_4px_#00000040] sm:shadow-[7px_6px_4px_#00000040] 
                        transition-all duration-300
                        ${card.bgColor}
                        ${card.borderColor}
                  
                      `}
                    >
                      <CardContent className='flex flex-col items-center justify-center p-4 sm:p-6 h-[220px] sm:h-[260px] lg:h-[280px]'>
                        <img
                          className='w-[100px] h-[100px] sm:w-[140px] sm:h-[140px] lg:w-[180px] lg:h-[180px] object-contain mb-4'
                          alt={card.title}
                          src={card.image}
                        />
                        <h3
                          className={`font-normal text-lg sm:text-xl lg:text-2xl text-center ${card.textColor}`}
                        >
                          {card.title}
                        </h3>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <img className='w-full' alt='Vector' src='/vector-1.svg' />
        </section>

        {/* Needs Someone to Talk? section */}
        <section className='w-full max-w-[1046px] mx-auto mt-[80px] flex flex-col md:flex-row items-center justify-between gap-8 px-4'>
          <div className='w-full md:w-[397px] h-[300px] md:h-[397px]'>
            <img
              className='w-full h-full object-cover rounded-lg'
              alt='Consultation'
              src='/image-15-1.png'
            />
          </div>
          <div className='max-w-full md:max-w-[512px] text-center md:text-right'>
            <h2 className='font-bold text-3xl md:text-[40px] mb-4'>
              <span className='text-[#337bbf]'>Needs </span>
              <span className='text-[#ffee5a]'>Someone</span>
              <span className='text-[#337bbf]'> to Talk?</span>
            </h2>
            <p className='text-base text-[#337bbf] mb-8'>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <Button className='w-full md:w-[307px] h-[72px] rounded-[15px] bg-gradient-to-r from-[#337bbf] to-[#65b4ff]'>
              <img
                className='w-[31px] h-[31px] mr-2 object-cover'
                alt='Icon'
                src='/arrow.png'
              />
              <span className='font-medium text-xl md:text-2xl text-[#ffee5a]'>
                Book Consultation
              </span>
            </Button>
          </div>
        </section>

        <div className='mt-40'> </div>
        <Box />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
