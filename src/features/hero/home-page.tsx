import React from 'react';
import Hero from './hero';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRightIcon } from '@heroicons/react/24/outline';

const HomePage = () => {
  const images = [
    {
      id: 1,
      src: '/images/grad.jpg',
      alt: 'Image 1',
      width: 400,
      height: 400,
      span: 2, // width span of the image in the grid
      title: 'Breaking Down the Barriers',
      desc: 'How UniHub is Bridging the Gap Between Students and Higher Education": UniHub is committed to making higher education accessible to all. In this post, we explore how UniHub is working to break down barriers and connect students with the information and resources they need to succeed',
    },
    {
      id: 2,
      src: '/images/lady-with-book.jpg',
      alt: 'Image 2',
      width: 400,
      height: 300,
      span: 1,
      title:
        'How UniHub is Revolutionizing the Way Students Research Universities',
      desc: ' Discover how UniHubs comprehensive platform is changing the game for prospective students by providing reliable and up-to-date information on universities and academic programs from around the world.',
    },
    {
      id: 3,
      src: '/images/stud.jpg',
      alt: 'Image 3',
      width: 400,
      height: 300,
      span: 1,
      title: 'From Research to Results',
      desc: ' UniHub isnt just a resource for researching universities – its a valuable tool for students throughout their academic journey. Learn how UniHub can help you make the most of your university experience.',
    },
    {
      id: 4,
      src: '/images/front.jpg',
      alt: 'Image 4',
      width: 400,
      height: 400,
      span: 2,
      title: 'Beyond the Basics',
      desc: 'How UniHub Helps Students Discover Research and Career Opportunities": UniHub isnt just a source for basic university information – its a comprehensive platform for exploring research and career opportunities. Find out how UniHub can help you take your academic and professional goals to the next level.',
    },
    {
      id: 5,
      src: '/images/guy.jpg',
      alt: 'Image 5',
      width: 400,
      height: 500,
      span: 2,
      title: 'How UniHub is Changing the Game for Prospective Students',
      desc: 'UniHub is revolutionizing the way that prospective students research universities and academic programs.',
    },
    {
      id: 6,
      src: '/images/women.jpeg',
      alt: 'Image 6',
      width: 400,
      height: 400,
      span: 1,
      title: 'Breaking Down the Barriers',
      desc: 'By providing comprehensive and reliable information in one easy-to-use platform, UniHub is making it easier than ever before for students to find the right university and program for their needs. With UniHub, students can compare universities and programs from around the world, read reviews from current and former students, and access valuable resources to help them succeed in their academic journey',
    },
  ];

  return (
    <div className='mx-auto max-w-7xl'>
      <Hero />
      <div className='mt-60 px-4 sm:mt-52'>
        <div className='px-4 md:px-8 lg:px-12'>
          <h1 className='mb-8 max-w-xl text-4xl font-bold md:mb-10 md:text-5xl'>
            Explore What We Have For You
          </h1>
          <div className='flex flex-col justify-between md:flex-row'>
            <p className='mb-8 w-full md:mb-0 md:w-2/5'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ratione reprehenderit adipisci recusandae dolorem itaque, aliquam
              distinctio nesciunt praesentium nisi magnam ipsa quae suscipit
              iste minima tempore laboriosam tempora. Architecto?
            </p>
            <p className='w-full text-right md:w-2/5'>lorem</p>
          </div>
        </div>

        <div className='mt-32'>
          {/* <div>
            <div>image</div>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
              ratione reprehenderit adipisci recusandae dolorem itaque, aliquam
            </p>
            <Link href='#'>learn more</Link>
          </div> */}

          {/* <div className='grid grid-cols-2 gap-32'>
            <div className='h-32 bg-red-500'></div>
            <div className='h-48 bg-green-500'></div>
            <div className='h-24 bg-blue-500'></div>
            <div className='h-40 bg-yellow-500'></div>
            <div className='h-56 bg-purple-500'></div>
            <div className='h-32 bg-pink-500'></div>
          </div> */}

          <div className='grid grid-cols-1 gap-x-24 gap-y-16 md:grid-cols-2 lg:grid-cols-2'>
            {images.map((image) => (
              <div
                key={image.id}
                className={`flex h-full flex-col justify-end col-span-${image.span}`}
              >
                <div
                  className='h-[400px] bg-gray-200 p-4'
                  style={{
                    backgroundImage: `url('${image.src}')`,
                    backgroundSize: 'cover',
                  }}
                >
                  {/* <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    layout='responsive'
                  /> */}
                </div>
                <p className='mt-5 text-lg font-semibold'>{image.title}</p>
                <p className='mt-5'>{image.desc}</p>
                <Link href='#' className='mt-10 flex items-center underline'>
                  <span>Learn more</span>{' '}
                  <ArrowRightIcon className='ml-2 h-3 w-4' />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
