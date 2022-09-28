import { PlusIcon } from '@heroicons/react/20/solid';

export default function Story({ img, username, isUser }) {
  return (
    <div className="relative group cursor-pointer flex items-center space-x-4">
      <img
        className="h-14 rounded-full p-[1.5px] border-red-500 border-2  group-hover:scale-110 transition-transform duration-200 ease-out ml-10"
        src={img}
        // alt={username}
      />
      <p className="font-bold">Your user image</p>
      {/* {isUser && <PlusIcon className="h-10 absolute top-2 left-2 text-black" />} */}
      {/* <p className="text-xs w-14 truncate">{username}</p> */}
    </div>
  );
}
