'use client';

import { useRef } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@/app/Component/button';
import { Card, CardContent } from '@/app/Component/card';
import { Footer } from '@/app/Component/Footer';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { fetchWithToken } from '@/lib/fetchWithToken';
import { motion } from 'framer-motion';
import { fadeIn } from '@/app/variant';
import { set } from 'react-hook-form';


export const CoursePage = (): JSX.Element => {
  const { id } = useParams();
  
  const [courseID, setCourseID] = useState('');
  const [courseTitle, setCourseTitle] = useState('');
  const [materialTitle, setMaterialTitle] = useState('');
  const [materialDesc, setMaterialDesc] = useState('');
  const [materialVideo, setMaterialVideo] = useState('');
  const [materialWeek, setMaterialWeek] = useState(0);
  const [loading, setLoading] = useState(true);

  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
      setLoading(true);
      fetchWithToken(`/materials/${id}`)
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setMaterialTitle(data.materials_title);
          setMaterialDesc(data.materials_desc);
          setCourseID(data.course.id);
          setCourseTitle(data.course.title);
          setMaterialVideo(data.materials_video);
          setMaterialWeek(data.week);
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 1000);
        });
      }, []);
  
  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/loading.gif" alt="Loading..." className="w-48 h-48 animate-spin" />
      </div>
    );
  }
  const handlePlayPause = () => {
    setPlaying(!playing);
  };

  const handleProgress = (state: { played: number; playedSeconds: number }) => {
    setProgress(state.playedSeconds);
  };

  const handleDuration = (duration: number) => {
    setDuration(duration);
  };

  const skipSeconds = (seconds: number) => {
    const player = playerRef.current;
    if (player) {
      const currentTime = player.getCurrentTime();
      player.seekTo(currentTime + seconds);
    }
  };

  const formatTime = (seconds: number) => {
    const pad = (num: number) => num.toString().padStart(2, '0');
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${pad(minutes)}:${pad(remainingSeconds)}`;
  };

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

      <div className='min-h-screen bg-[#ffffff33]'>
        <main className='container mx-auto px-4 sm:px-6 lg:px-10 py-24 sm:pt-12 md:pt-24 lg:pt-32'>
          <div className='max-w-5xl mx-auto space-y-10 sm:space-y-12'>
            <motion.div 
            variants={fadeIn('right', 0.1)}
            initial='hidden'
            whileInView={'show'}
            viewport={{once: false, amount: 0.7}}
            className="text-sm sm:text-base font-medium space-x-1">
              <a href={`/Educational/Courses/${courseID}`}>
                <span className="text-[#337bbf] hover:underline">{courseTitle}</span>
              </a>
              <span className="text-black">&gt;</span>
              <a href={`/Educational/Courses/${courseID}`}>
                <span className="text-[#337bbf] hover:underline">Minggu ke-{materialWeek}</span>
              </a>
              <span className="text-black">&gt;</span>
              <a href={`/Educational/Learning/${id}`}>
                <span className="text-[#337bbf] hover:underline">{materialTitle}</span>
              </a>
            </motion.div>
            {/* Course Title */}
            <header className='space-y-2'>
              <motion.h1 
              variants={fadeIn('left', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-3xl sm:text-4xl lg:text-5xl font-outfit tracking-tight'>
                <span className='font-bold text-[#334fb4]'>{courseTitle} : </span>
                <span className='text-[#65b4ff] ml-2 font-semibold'>
                  {materialTitle}
                </span>
              </motion.h1>
            </header>

            {/* Video Player Card */}
            <Card className='overflow-hidden rounded-xl shadow-lg border-none bg-white/80 backdrop-blur-sm'>
              <CardContent className='p-0'>
                <div className='relative aspect-video'>
                  <ReactPlayer
                    ref={playerRef}
                    url={materialVideo}
                    width='100%'
                    height='100%'
                    playing={playing}
                    onProgress={handleProgress}
                    onDuration={handleDuration}
                    controls={false}
                    className='absolute top-0 left-0'
                  />

                  {/* Custom Video Controls */}
                  <div className='absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent py-3 px-4'>
                    <div className='flex items-center gap-4 text-white'>
                      <Button
                        variant='ghost'
                        size='icon'
                        className='text-white hover:text-white/80 transition-colors'
                        onClick={handlePlayPause}
                      >
                        {playing ? '⏸️' : '▶️'}
                      </Button>

                      <span className='text-sm font-medium'>
                        {formatTime(progress)} / {formatTime(duration)}
                      </span>

                      {/* Progress Bar */}
                      <div className='relative flex-1 h-1.5 bg-white/20 rounded-full overflow-hidden'>
                        <div
                          className='absolute inset-y-0 left-0 bg-blue-500 rounded-full transition-all duration-150'
                          style={{ width: `${(progress / duration) * 100}%` }}
                          onClick={(e) => {
                            const bounds = e.currentTarget.getBoundingClientRect();
                            const percent = (e.clientX - bounds.left) / bounds.width;
                            playerRef.current?.seekTo(percent);
                          }}
                        />
                      </div>

                      <Button
                        variant='ghost'
                        className='text-white hover:text-white/80 text-sm font-medium'
                        onClick={() => skipSeconds(-10)}
                      >
                        -10s
                      </Button>
                      <Button
                        variant='ghost'
                        className='text-white hover:text-white/80 text-sm font-medium'
                        onClick={() => skipSeconds(10)}
                      >
                        +10s
                      </Button>
                    </div>
                  </div>

                  {/* Play Overlay */}
                  {!playing && (
                    <div
                      className='absolute inset-0 flex items-center justify-center bg-black/20 cursor-pointer transition-opacity duration-200 hover:bg-black/30'
                      onClick={handlePlayPause}
                    >
                      <div className='h-20 w-20 sm:h-24 sm:w-24 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center transition-transform duration-200 hover:scale-110'>
                        <div className='text-4xl sm:text-5xl text-white'>▶️</div>
                      </div>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Course Content */}
            <section className='space-y-6 bg-white/20 backdrop-blur-sm rounded-xl p-6 sm:p-8'>
              <motion.h2 
              variants={fadeIn('left', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#334fb4] font-outfit'>
                {materialTitle}
              </motion.h2>
              <motion.div 
              variants={fadeIn('right', 0.1)}
              initial='hidden'
              whileInView={'show'}
              viewport={{once: false, amount: 0.7}}
              className='prose prose-lg max-w-none'>
                <p className='text-base sm:text-lg text-[#120000] font-outfit leading-relaxed'>
                  {materialDesc}
                </p>
              </motion.div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CoursePage;