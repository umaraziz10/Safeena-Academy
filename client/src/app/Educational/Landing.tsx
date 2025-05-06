import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Footer } from '../Component/Footer';
import Link from 'next/link';

export const Landing = (): JSX.Element => {
  const courses = [
    { id: 1, title: 'Anxiety Disorders', image: '/image-2.png', highlighted: false },
    { id: 2, title: 'Depression', image: '/image-3.png', highlighted: false },
    { id: 3, title: 'Help Friends and Family', image: '/image-4.png', highlighted: false },
    { id: 4, title: 'Sleep Better', image: '/image-5.png', highlighted: false },
    { id: 5, title: 'Panic Attack', image: '/image-6.png', highlighted: false },
    { id: 6, title: 'OCD', image: '/image-7.png', highlighted: false },
  ];

  const benefits = [
    {
      id: 1,
      icon: '/image-52.png',
      text: (
        <>
          Access to <span className='font-semibold'>Quality</span> Materials
        </>
      ),
    },
    {
      id: 2,
      icon: '/image-9.png',
      text: (
        <>
          <span className='font-semibold'>Flexible</span> Learning
        </>
      ),
    },
    {
      id: 3,
      icon: '/image-10.png',
      text: (
        <>
          <span className='font-semibold'>Expert-Led </span>Workshops
        </>
      ),
    },
    {
      id: 4,
      icon: '/image-11.png',
      text: (
        <>
          Enhanced <span className='font-semibold'>Self-Awareness</span>
        </>
      ),
    },
    {
      id: 5,
      icon: '/image-14.png',
      text: (
        <>
          Comprehensive <span className='font-semibold'>Curriculum</span>
        </>
      ),
    },
  ];


  return (
    <div className='relative min-h-screen overflow-hidden'>
      <div
        className='fixed top-0 left-0 w-full h-full -z-10'
        style={{
          background:
            'linear-gradient(140.63deg, #FFFFFF 0%, #AABFD3 40%, #337BBF 100%)',
        }}
      />

      <div className='flex flex-col min-h-screen'>
        <main className='relative flex-grow'>
          {/* Benefits Section */}
          <section className='flex flex-col lg:flex-row justify-between pt-28 md:mt-4 sm:mt-4 px-4 md:px-[60px] lg:px-[200px] w-full max-w-[1440px] mx-auto mb-[50px] md:mb-[100px] gap-8 lg:gap-0'>
            <div className='max-w-full lg:max-w-[566px]'>
              <h1 className='font-extrabold text-3xl md:text-4xl lg:text-5xl mb-[30px] md:mb-[53px] text-center lg:text-left animate-fade-in'>
                <span className='text-[#337bbf]'>Benefits of </span>
                <span className='text-[#edd500]'>Learning</span>
                <span className='text-[#337bbf]'> at Safeena </span>
                <span className='text-[#edd500]'>Academy</span>
                <span className='text-[#337bbf]'>.</span>
              </h1>
              <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-x-[39px] md:gap-y-[25px]'>
                {benefits.map((benefit) => (
                  <div
                    key={benefit.id}
                    className='flex items-center p-4 rounded-lg transition-all duration-300 hover:bg-white/50 hover:shadow-lg'
                  >
                    <img
                      className='w-8 h-8 md:w-10 md:h-10 object-cover'
                      alt='Benefit icon'
                      src={benefit.icon || '/placeholder.svg'}
                    />
                    <div className='ml-[15px] md:ml-[20px] font-normal text-sm md:text-base text-[#337bbf]'>
                      {benefit.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className='relative flex w-full max-w-[373px] mx-auto lg:mx-0'>
              <img
                className='w-full absolute bottom-0 left-0'
                alt='Rectangle'
                src='/rectangle-56.svg'
              />
              <img
                className='relative bottom-0 w-[250px] lg:w-[299px] h-auto z-10 mx-auto transition-transform duration-500 hover:scale-105'
                alt='Student with laptop'
                src='/image-8.png'
              />
            </div>
          </section>

          {/* Courses Section + Wave Divider */}
          <section
            className='relative z-10 w-full overflow-hidden bg-top bg-cover'
            style={{
              backgroundImage: 'url("./test.svg")',
              backgroundRepeat: 'no-repeat',
              backgroundSize: 'cover',
              backgroundPosition: 'top',
            }}
          >
            {/* Content container */}
            <div className='relative z-10 pt-[320px] pb-[100px] px-2 md:px-[40px] lg:px-[80px] max-w-[1440px] mx-auto'>
              <h2 className='font-medium text-3xl md:text-4xl lg:text-5xl text-[#ffee5a] mb-[40px] md:mb-[91px] animate-fade-in'>
                Courses List
              </h2>

              {/* Search & Filter Row */}
              {/* <div className='flex flex-col md:flex-row items-start md:items-center gap-4 mb-[30px]'>
                <div className='relative w-full md:w-[436px]'>
                  <Input
                    className='h-[50px] md:h-[70px] bg-[#ffffffa6] rounded-[20px] pl-[23px] text-lg md:text-xl text-[#0000004f] font-normal transition-all duration-300 focus:bg-white focus:shadow-lg'
                    placeholder='Search Course'
                  />
                </div>

                <div className='flex gap-4 w-full md:w-auto'>
                  <Button className='h-[42px] bg-[#337bbf] rounded-[10px] text-[14px] md:text-[15px] font-medium text-[#edd500] transition-all duration-300 hover:bg-[#2868a3] hover:shadow-lg'>
                    <img
                      className='w-5 h-5 md:w-6 md:h-6 mr-2'
                      alt='Filter icon'
                      src='/image-1.png'
                    />
                    Filter
                  </Button>

                  <Button className='h-[42px] bg-transparent rounded-[10px] text-[14px] md:text-[15px] font-bold text-[#edd500] border border-[#edd500] ml-auto transition-all duration-300 hover:bg-[#edd500] hover:text-white'>
                    <img
                      className='w-6 h-6 md:w-7 md:h-7 mr-2'
                      alt='Sort icon'
                      src='/image-48.png'
                    />
                    Sort by
                  </Button>
                </div>
              </div> */}

              {/* List Courses */}
              <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-[14px]'>
                {courses.map((course) => (
                  <Link
                    key={course.id}
                    href={`/Educational/Courses/${course.id}`}  // dynamic href based on course.id
                  >
                    <Card
                      className={`
                        group w-full max-w-[345px] mx-auto h-auto aspect-[345/347] rounded-[15px] 
                        bg-white shadow-[4px_7px_4px_#00000040] transition-all duration-300 
                        hover:bg-[#337bbf] hover:scale-105 hover:shadow-xl cursor-pointer
                      `}
                    >
                      <CardContent className='p-0 flex flex-col items-center h-full'>
                        <img
                          className='w-[80%] mt-[21px] mb-auto transition-transform duration-500 group-hover:scale-110'
                          alt={course.title}
                          src={course.image || '/placeholder.svg'}
                        />
                        <div
                          className={`w-full px-4 h-24 font-bold text-xl md:text-2xl text-center flex items-center justify-center 
                            ${course.highlighted ? 'text-white' : 'text-[#337bbf]'}
                            transition-colors duration-300 group-hover:text-white`}
                        >
                          {course.title}
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>

            {/* Footer */}
            <Footer />
          </section>
        </main>
      </div>
    </div>
  );
};

export default Landing;
