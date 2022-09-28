// import Image from 'next/image';
import { useSession, signIn, signOut } from 'next-auth/react';
import { useRecoilState } from 'recoil';
import { modalState } from '../atom/modalAtom';
import { useRouter } from 'next/router';
import {
  MagnifyingGlassIcon,
  PlusCircleIcon,
} from '@heroicons/react/24/outline';

import { HomeIcon } from '@heroicons/react/20/solid';

// import styles from '../styles/App.module.css';

export default function Header() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(modalState);
  const router = useRouter();
  return (
    <div className="shadow-sm border-b sticky top-0 bg-white z-30">
      {/* left side */}
      <div className="flex items-center justify-between max-w-6xl mx-4 xl:mx-auto">
        <div className="">
          <div
            className="logo pt-6 text-3xl text-yellow-700 font-bold cursor-pointer h-24 w-60 relative hidden md:inline-grid"
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
          <h2 className="font-bold text-lg break-normal text-center">
            The Word of God is living and Breathing
          </h2>
          {/* <div className="absolute top-2 left-2">
            <MagnifyingGlassIcon className="h-5 text-gray-500" />
          </div>
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-50 pl-10 border-gray-500 text-sm focus:ring-black focus:border-black rounded-md"
          /> */}
        </div>

        {/* // right///  */}

        <div className="flex space-x-4 items-center">
          <HomeIcon
            onClick={() => router.push('/')}
            className=" hidden md:inline-flex h-6
          cursor-pointer
          hover:scale-125
          transition-transform
          duration-200
          ease-out"
          />
          {session ? (
            <>
              <PlusCircleIcon
                onClick={() => setOpen(true)}
                className="h-6
          cursor-pointer
          hover:scale-125
          transition-transform
          duration-200
          ease-out"
              />
              <p
                onClick={signOut}
                className="font-bold h-10  cursor-pointer sm:pt-2 break-normal"
              >
                sign out
              </p>
              {/* <img
               
                // src={session?.user.image}
                // src="
                https:alt="image" //external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QhMtcoJUhbSQUSSG4fVB3wAAAA%26pid%3DApi&f=1"
                className="h-10 rounded-full cursor-pointer"
              />{' '}
              */}
            </>
          ) : (
            <button onClick={signIn}>Sign In</button>
          )}
        </div>
      </div>
    </div>
  );
}
