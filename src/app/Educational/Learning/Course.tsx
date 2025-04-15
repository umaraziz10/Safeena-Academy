'use client';

import { useRef, useState } from 'react';
import ReactPlayer from 'react-player';
import { Button } from '@/app/Component/button';
import { Card, CardContent } from '@/app/Component/card';
import { Footer } from '@/app/Component/Footer';

export const CoursePage = (): JSX.Element => {
  const [playing, setPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const playerRef = useRef<ReactPlayer>(null);

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

  const youtubeUrl = 'https://youtu.be/IXSaQDIuWsA?feature=shared';

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
            {/* Course Title */}
            <header className='space-y-2'>
              <h1 className='text-3xl sm:text-4xl lg:text-5xl font-outfit tracking-tight'>
                <span className='font-bold text-[#334fb4]'>Course 3:</span>
                <span className='text-[#65b4ff] ml-2 font-semibold'>
                  How to control your stress?
                </span>
              </h1>
            </header>

            {/* Video Player Card */}
            <Card className='overflow-hidden rounded-xl shadow-lg border-none bg-white/80 backdrop-blur-sm'>
              <CardContent className='p-0'>
                <div className='relative aspect-video'>
                  <ReactPlayer
                    ref={playerRef}
                    url={youtubeUrl}
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
              <h2 className='text-2xl sm:text-3xl lg:text-4xl font-bold text-[#334fb4] font-outfit'>
                How to control your stress?
              </h2>
              <div className='prose prose-lg max-w-none'>
                <p className='text-base sm:text-lg text-[#120000] font-outfit leading-relaxed'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p className='text-base sm:text-lg text-[#120000] font-outfit leading-relaxed mt-4'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                  eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                  enim ad minim veniam, quis nostrud exercitation ullamco laboris
                  nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                  in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                  nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                  sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
              </div>
            </section>
          </div>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default CoursePage;