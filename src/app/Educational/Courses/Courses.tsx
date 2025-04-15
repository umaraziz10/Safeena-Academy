'use client';
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/app//Component/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/app/Component/navbar';
import { Footer } from '@/app/Component/Footer';

// Course content data
const weekData = [
  {
    week: 1,
    status: 'completed',
    videos: 'All Videos Completed',
    readings: 'All Readings Completed',
    assessments: 'All Assessment Completed',
  },
  {
    week: 2,
    status: 'completed',
    videos: 'All Videos Completed',
    readings: 'All Readings Completed',
    assessments: 'All Assessment Completed',
  },
  {
    week: 3,
    status: 'in-progress',
    videos: '24 min of Videos left',
    readings: '2 min of Readings left',
    assessments: '1 Assessment left',
    content: [
      {
        title: 'How is your nervous system?',
        type: 'Video',
        duration: '17 min',
        icon: '/video-logo.png',
      },
      {
        title: 'Anxiety Skills',
        type: 'Reading',
        duration: '2 min',
        icon: '/reading-logo.png',
      },
      {
        title: 'Anxiety Hacks : Handle you emotion like a calm water #1',
        type: 'Video',
        duration: '9 min',
        icon: '/video-logo.png',
      },
      {
        title: 'Anxiety Hacks : Handle you emotion like a calm water #2',
        type: 'Video',
        duration: '13 min',
        icon: '/video-logo.png',
      },
      {
        title: 'Week 3 Quiz',
        type: 'Not Graded',
        duration: '30 min',
        icon: '/assassement-logo.png',
      },
    ],
  },
  {
    week: 4,
    status: 'upcoming',
    videos: '62 min of Videos left',
    readings: '5 min of Reading left',
    assessments: '2 Assessment left',
  },
];

export const CoursePage = (): JSX.Element => {
  return (
    <div className='relative min-h-screen w-full flex flex-col'>
      {/* Gradient Background */}
      <div
        className='absolute -left-[7px] top-0 -z-10 w-full h-full'
        style={{
          background:
            'linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 72.78%, #337BBF 96.96%)',
        }}
      />

      <Navbar />

      <main className='flex-grow'>
        <div className='max-w-[1440px] mx-auto px-14 md:px-20 lg:px-20 py-20 md:py-20 lg:py-32'>
          {/* Course Title and Description */}
          <section className='mb-6 md:mb-8 lg:mb-10'>
            <h1 className='font-bold text-5xl sm:text-4xl md:text-4xl lg:text-5xl text-[#334fb4] mb-4 md:mb-6'>
              Anxiety Disorders
            </h1>
            <div className='text-lg sm:text-base md:text-lg space-y-3 md:space-y-4 lg:space-y-6'>
              <p className='leading-relaxed'>
                Anxiety disorders are mental health conditions marked by
                excessive and persistent feelings of worry, fear, or nervousness
                that can interfere with daily activities. Unlike normal
                anxiety—which is a temporary response to stress—these disorders
                involve intense emotions that may arise without a clear cause
                and last for extended periods. Common types include generalized
                anxiety disorder, panic disorder, social anxiety disorder, and
                specific phobias. Symptoms may be emotional, such as constant
                worry or fear, as well as physical, like a racing heart, muscle
                tension, or difficulty sleeping.
              </p>
              <p className='leading-relaxed'>
                The causes of anxiety disorders are complex and can involve a
                mix of genetic, psychological, and environmental factors,
                including trauma or chronic stress. Although these conditions
                can be challenging, they are treatable. Many individuals find
                relief through therapy, medication, lifestyle changes, or a
                combination of approaches. Early recognition and proper support
                can greatly improve quality of life and help individuals manage
                their symptoms effectively.
              </p>
            </div>
          </section>

          {/* Course Content */}
          <section>
            <Card className='border border-[#337bbf] rounded-[10px] overflow-hidden'>
              <CardContent className='p-0'>
                <Accordion type='single' collapsible className='w-full'>
                  {weekData.map((week, index) => (
                    <AccordionItem
                      key={index}
                      value={`week-${week.week}`}
                      className='border-b border-[#337bbf] last:border-b-0'
                    >
                      <AccordionTrigger className='px-3 sm:px-4 md:px-6 py-3 sm:py-4 md:py-5 hover:no-underline'>
                        <div className='flex flex-col items-start w-full'>
                          <h3 className='font-bold text-lg sm:text-xl md:text-2xl text-[#337bbf]'>
                            Week {week.week}
                          </h3>
                          <div className='flex flex-wrap items-center gap-2 sm:gap-3 md:gap-4 mt-2 text-[10px] sm:text-xs font-medium text-[#337bbf]'>
                            <div className='flex items-center'>
                              <img
                                className='w-4 h-4 sm:w-5 sm:h-5 mr-1'
                                alt='Video icon'
                                src='/video-logo.png'
                              />
                              <span>{week.videos}</span>
                            </div>
                            <div className='flex items-center'>
                              <img
                                className='w-4 h-4 sm:w-5 sm:h-5 mr-1'
                                alt='Reading icon'
                                src='/reading-logo.png'
                              />
                              <span>{week.readings}</span>
                            </div>
                            <div className='flex items-center'>
                              <img
                                className='w-4 h-4 sm:w-5 sm:h-5 mr-1'
                                alt='Assessment icon'
                                src='/assassement-logo.png'
                              />
                              <span>{week.assessments}</span>
                            </div>
                          </div>
                        </div>
                      </AccordionTrigger>

                      <AccordionContent className='px-3 sm:px-4 md:px-6 pb-4 sm:pb-5 md:pb-6'>
                        {week.content && (
                          <div className='space-y-3 sm:space-y-4 mt-2'>
                            {week.content.map((item, itemIndex) => (
                              <div
                                key={itemIndex}
                                className='flex items-start gap-2 sm:gap-3 md:gap-4'
                              >
                                <img
                                  className='w-5 h-5 sm:w-6 sm:h-6 md:w-[30px] md:h-[30px] object-cover'
                                  alt={`${item.type} icon`}
                                  src={item.icon}
                                />
                                <div>
                                  <h4 className='font-extrabold text-xs sm:text-sm text-[#337bbf]'>
                                    {item.title}
                                  </h4>
                                  <p className='font-normal text-[10px] sm:text-xs text-[#337bbf]'>
                                    {item.type}&nbsp;&nbsp;•&nbsp;&nbsp;
                                    {item.duration}
                                  </p>
                                </div>
                              </div>
                            ))}
                          </div>
                        )}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CoursePage;
