import { Dialog } from '@headlessui/react';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';

/**
 * A utility function for concatenating class names with a space separator.
 *
 * @param {...string} classes - An array of class names.
 * @returns {string} - A string of class names concatenated with a space separator.
 */

// eslint-disable-next-line unused-imports/no-unused-vars
function classNames(...classes: string[]): string {
  return classes.filter(Boolean).join(' ');
}

const TopNav = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className='sticky top-0 z-20 bg-white bg-opacity-25 backdrop-blur-lg backdrop-saturate-150'>
      <header className='sticky top-0 z-20 bg-white bg-opacity-25 backdrop-blur-lg backdrop-saturate-150'>
        <nav
          className='mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8'
          aria-label='Global'
        >
          <div className='flex lg:flex-1'>
            <Link href='/' className='-m-1.5 flex p-1.5'>
              <span className='sr-only '>Unihub</span>
              <span className='text-2xl font-bold '>
                Uni<span className='text-colorPrimary'>hub..</span>
              </span>
              {/* <Image src='/images/logo.png' alt='logo' width='50' height='50' /> */}
            </Link>
          </div>
          <div className='flex lg:hidden'>
            <button
              type='button'
              className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className='sr-only'>Open main menu</span>
              <Bars3Icon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>

          <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
            <Link
              href='/login'
              className='text-sm font-semibold leading-6 text-gray-900'
            >
              Login <span aria-hidden='true'>&rarr;</span>
            </Link>
          </div>
        </nav>
        <Dialog
          as='div'
          className='lg:hidden'
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          <div className='fixed inset-0 z-50' />
          <Dialog.Panel
            // onFocus={true}
            className='fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'
          >
            <div className='flex items-center justify-between'>
              <Link href='/' className='-m-1.5 p-1.5'>
                <span className='sr-only'>uniHub</span>
                {/* <img
                  className="w-auto h-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
                  alt=""
                /> */}
              </Link>
              <button
                type='button'
                className='-m-2.5 rounded-md p-2.5 text-gray-700'
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className='sr-only'>Close menu</span>
                <XMarkIcon className='h-6 w-6' aria-hidden='true' />
              </button>
            </div>
            <div className='mt-6 flow-root '>
              <div className='-my-6 divide-y divide-gray-500/10'>
                <div className='py-6'>
                  <Link
                    href='/login'
                    className='-mx-3 block rounded-lg py-2.5 px-3 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    Login
                  </Link>
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
    </div>
  );
};

export default TopNav;
