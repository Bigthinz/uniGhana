import React from 'react';
import Hero from './hero';
import Link from 'next/link';
import Image from 'next/image';

const HomePage = () => {
  const images = [
    {
      id: 1,
      src: '/images/grad.jpg',
      alt: 'Image 1',
      width: 400,
      height: 400,
      span: 2, // width span of the image in the grid
      desc: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 2,
      src: '/images/lady-with-book.jpg',
      alt: 'Image 2',
      width: 400,
      height: 300,
      span: 1,
      desc: 'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
    },
    {
      id: 3,
      src: '/images/grad.jpg',
      alt: 'Image 3',
      width: 400,
      height: 300,
      span: 1,
      desc: 'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
    },
    {
      id: 4,
      src: '/images/grad.jpg',
      alt: 'Image 4',
      width: 400,
      height: 400,
      span: 2,
      desc: 'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
    },
    {
      id: 5,
      src: '/images/grad.jpg',
      alt: 'Image 5',
      width: 400,
      height: 500,
      span: 2,
      desc: 'Lorem ipsum dolor sit amet consectetur',
    },
    {
      id: 6,
      src: '/images/grad.jpg',
      alt: 'Image 6',
      width: 400,
      height: 400,
      span: 1,
      desc: 'Lorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consecteturLorem ipsum dolor sit amet consectetur',
    },
  ];

  return (
    <div className='mx-auto max-w-7xl'>
      <Hero />
      <div className='mt-60 sm:mt-52'>
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
                <div className='bg-gray-200 p-4'>
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    layout='responsive'
                  />
                </div>
                <p className=''>{image.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
