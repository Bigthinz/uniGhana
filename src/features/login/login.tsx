import Image from 'next/image';
import { ImGoogle } from 'react-icons/im';

export default function Login() {
  return (
    <>
      <div className='flex min-h-[100vh] flex-1'>
        <div className='flex flex-1 flex-col justify-center px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24'>
          <div className='mx-auto w-full max-w-sm lg:w-96'>
            <div>
              <Image
                className='h-10 w-auto'
                src='/images/logo.png'
                alt='Your Company'
                width='50'
                height='50'
              />
              <h2 className='mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900'>
                Sign in to your account
              </h2>
              <p className='mt-2 text-sm leading-6 text-gray-500'>
                Not a member?{' '}
                <a
                  href='#'
                  className='font-semibold text-[#AA3A44] hover:text-[#AA3A44]'
                >
                  Sign up here
                </a>
              </p>
            </div>

            <div className='mt-10'>
              <div>
                <form action='#' method='POST' className='space-y-6'>
                  <div>
                    <label
                      htmlFor='email'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Email address
                    </label>
                    <div className='mt-2'>
                      <input
                        id='email'
                        name='email'
                        type='email'
                        autoComplete='email'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor='password'
                      className='block text-sm font-medium leading-6 text-gray-900'
                    >
                      Password
                    </label>
                    <div className='mt-2'>
                      <input
                        id='password'
                        name='password'
                        type='password'
                        autoComplete='current-password'
                        required
                        className='block w-full rounded-md border-0 py-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
                      />
                    </div>
                  </div>

                  <div className='flex items-center justify-between'>
                    <div className='flex items-center'>
                      <input
                        id='remember-me'
                        name='remember-me'
                        type='checkbox'
                        className='h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600'
                      />
                      <label
                        htmlFor='remember-me'
                        className='ml-3 block text-sm leading-6 text-gray-700'
                      >
                        Remember me
                      </label>
                    </div>

                    <div className='text-sm leading-6'>
                      <a
                        href='#'
                        className='font-semibold text-[#AA3A44] hover:text-[#AA3A44]'
                      >
                        Forgot password?
                      </a>
                    </div>
                  </div>

                  <div>
                    <button className='flex w-full justify-center rounded-md bg-[#9B2035] px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-[#9b2034ea] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'>
                      Sign in
                    </button>
                  </div>
                </form>
              </div>

              <div className='mt-10'>
                <div className='relative'>
                  <div
                    className='absolute inset-0 flex items-center'
                    aria-hidden='true'
                  >
                    <div className='w-full border-t border-gray-200' />
                  </div>
                  <div className='relative flex justify-center text-sm font-medium leading-6'>
                    <span className='bg-white px-6 text-gray-900'>
                      Or continue with
                    </span>
                  </div>
                </div>

                <div className='mt-6 grid grid-cols-1 gap-4'>
                  <a
                    href='#'
                    className='flex w-full items-center justify-center gap-3 rounded-md border bg-gray-50 px-3 py-1.5 text-gray-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1D9BF0]'
                  >
                    <ImGoogle />
                    <span className='text-sm font-semibold leading-6'>
                      Continue with Google
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='relative hidden w-0 flex-1 lg:block'>
          <div
            className='absolute inset-0 z-[-1] bg-cover bg-center'
            style={{
              backgroundImage: `url('/images/front.jpg')`,
              backgroundSize: 'cover',
              //   backgroundPosition: 'top center',
            }}
          ></div>
        </div>
      </div>
    </>
  );
}