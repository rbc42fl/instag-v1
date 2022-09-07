import Image from 'next/image';
import React from 'react';
import { useRouter } from 'next/router';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
export default function Header() {
  const router = useRouter();
  return (
    // left////
    <div className="flex items-center justify-between max-w-6xl">
      <div className="">
        <div
          className="logo text-3xl text-yellow-700 font-bold cursor-pointer h-24 w-60 relative hidden md:inline-grid"
          onClick={() => router.push('/')}
        >
          Man Of God
        </div>
        <div
          className="logo text-1xl text-yellow-700 font-bold cursor-pointer h-24 w-60 relative sm:inline-grid md:hidden"
          onClick={() => router.push('/')}
        >
          Man Of God
        </div>
        {/* <Image
            src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.brandinglosangeles.com%2Fwp-content%2Fuploads%2FInstagram_logo.svg.png&f=1&nofb=1"
            layout="fill"
            className="object-contain"
            onClick={() => router.push('/')}
          /> */}
      </div>

      {/*  // middle//// */}
      <div className="relative mt-1">
        <div className="absolute top-2 left-2">
          <MagnifyingGlassIcon className="h-5 text-gray-500" />
        </div>
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
        />
      </div>

      {/* // right///  */}

      <h1>right side</h1>
    </div>
  );
}
