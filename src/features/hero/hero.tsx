import Link from 'next/link';

export default function Hero() {
  // eslint-disable-next-line react-hooks/rules-of-hooks

  return (
    <div className='isolate '>
      <div className='absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]'>
        <svg
          className='relative left-[calc(50%-11rem)] -z-10 h-[21.1875rem] max-w-none -translate-x-1/2 rotate-[30deg] sm:left-[calc(50%-30rem)] sm:h-[42.375rem]'
          viewBox='0 0 1155 678'
        >
          <path
            fill='url(#45de2b6b-92d5-4d68-a6a0-9b9b2abad533)'
            fillOpacity='.3'
            d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
          />
          <defs>
            <linearGradient
              id='45de2b6b-92d5-4d68-a6a0-9b9b2abad533'
              x1='1155.49'
              x2='-78.208'
              y1='.177'
              y2='474.645'
              gradientUnits='userSpaceOnUse'
            >
              <stop stopColor='#54BB6A' />
              <stop offset={1} stopColor='#FF80B5' />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <main>
        <div
          className='relative h-[90vh] bg-cover px-6 lg:px-8 '
          //   style={{
          //     backgroundImage: "url('/images/grad.jpg')",
          //   }}
        >
          <div className='absolute inset-0 opacity-50'></div>
          <div className='m-auto max-w-7xl '>
            {/* <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative px-3 py-1 text-sm leading-6 text-white rounded-full ring-1 ring-white hover:ring-white">
                New to business? No problem.{' '}
                <a href="#" className="font-semibold text-[#54BB6A]">
                  <span className="absolute inset-0" aria-hidden="true" />
                  Read more <span aria-hidden="true">&rarr;</span>
                </a>
              </div>
            </div> */}
            {/* <div className='grid items-center justify-center h-screen grid-cols-2 gap-4'>
              <div className='text-center'>
                <h1 className='mb-4 text-4xl font-bold'>Anytime, anywhere,</h1>
                <h2 className='mb-4 text-2xl font-semibold'>
                  Take lectures & classes at your own pace.
                </h2>
                <p className='text-lg'>
                  We collaborate with tertiary institutions to produce high-res
                  video lectures to aid students to succeed and become top in
                  their class.
                </p>
              </div>
              <div className='relative h-full'>
                <Image
                  src='/images/grad.jpg'
                  alt='Hero Image'
                  width='100'
                  height='100'
                />
              </div>
            </div> */}

            <section className='body-font relative text-gray-600'>
              <div className='container mx-auto flex flex-col items-center px-2 py-24 md:flex-row'>
                <div className='mb-16 flex flex-col items-center text-center md:mb-0 md:w-1/2 md:items-start md:pr-16 md:text-left lg:flex-grow lg:pr-24'>
                  <h1 className='title-font mb-4 text-3xl font-semibold text-gray-900 sm:text-5xl'>
                    Discover Your Dream University with The University
                    Information Hub.
                  </h1>
                  <p className='mb-8 leading-relaxed'>
                    - Your Ultimate Guide to Higher Education. Discover Your
                    Path to Higher Education and Research with Our Comprehensive
                    University Information Hub
                  </p>
                  <div className='flex justify-center'>
                    <Link href='/login'>
                      <button className='inline-flex rounded border-0 bg-colorPrimary px-10 py-2 text-white hover:bg-colorPrimary hover:opacity-90 focus:outline-none'>
                        Sign up today
                      </button>
                    </Link>
                  </div>
                </div>
                <div className='w-5/6 md:w-1/2 lg:w-full lg:max-w-lg'>
                  <img
                    className='rounded object-cover object-center'
                    alt='hero'
                    src='/images/unilogo.png'
                  />
                </div>
              </div>
            </section>
          </div>
          <div className='absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]'>
            <svg
              className='relative left-[calc(50%+3rem)] h-[21.1875rem] max-w-none -translate-x-1/2 sm:left-[calc(50%+36rem)] sm:h-[42.375rem]'
              viewBox='0 0 1155 678'
            >
              <path
                fill='url(#ecb5b0c9-546c-4772-8c71-4d3f06d544bc)'
                fillOpacity='.3'
                d='M317.219 518.975L203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079z'
              />
              <defs>
                <linearGradient
                  id='ecb5b0c9-546c-4772-8c71-4d3f06d544bc'
                  x1='1155.49'
                  x2='-78.208'
                  y1='.177'
                  y2='474.645'
                  gradientUnits='userSpaceOnUse'
                >
                  <stop stopColor='#54BB6A' />
                  <stop offset={1} stopColor='#FF80B5' />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </div>
  );
}
