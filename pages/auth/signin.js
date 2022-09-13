import Image from 'next/image';
import biblewater from '../../public/images/biblewater.jpg';
import Helmet from '../../public/images/Helmet.jpg';
import { getProviders, signIn } from 'next-auth/react';
import Header from '../../components/Header';

export default function Signin({ providers }) {
  return (
    <>
      <Header />
      <div className="flex justify-center space-x-7 mt-20">
        <div className="hidden md:inline-flex rotate-12 mr-12">
          <Image
            className=" object-cover rounded-lg  "
            src={biblewater}
            alt="waterbible"
            width={200}
            height={100}
          />
        </div>
        <div className="">
          <div className="flex flex-col items-center border md:48">
            {Object.values(providers).map((provider) => (
              <div key={provider.name} className="flex align-center flex-col">
                <Image
                  className="rounded-full object-cover"
                  src={Helmet}
                  alt="helmet"
                  width={100}
                  height={100}
                />
                <h2 className="font-bold ml-16">My verse app</h2>

                <p className="text-sm italic my-10 text-center">
                  This app is created for practice purposes.
                </p>
                <button
                  onClick={() => signIn(provider.id, { callbackUrl: '/' })}
                  className="bg-red-400 rounded-lg p-3 text-white hover:bg-red-500"
                >
                  Sign in with {provider.name}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export async function getServerSideProps(context) {
  const providers = await getProviders();
  return {
    props: { providers },
  };
}
