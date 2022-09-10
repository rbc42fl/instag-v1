import {
  PlusIcon,
  HeartIcon,
  ChatBubbleBottomCenterTextIcon,
  BookmarkIcon,
} from '@heroicons/react/24/outline';

export default function Post({ img, userImg, caption, username, id }) {
  return (
    <div className="bg-white my-7 border rounded-md">
      {/* Post Header */}

      <div className="flex items-center">
        <img
          className="h-12 rounded-full object-cover border p-1 mr-3"
          src={userImg}
          alt={username}
        />
        <p className="font-bold flex-1 ">{username}</p>
        <PlusIcon className="h-5" />
        <PlusIcon className="h-5" />
        <PlusIcon className="h-5" />
        <p className="mr-4">{caption}</p>
      </div>
      {/* post image */}
      <img className="object-cover max-w-full" src={img} alt="img" />
      {/*Post  Buttons  */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="btn" />
          <ChatBubbleBottomCenterTextIcon className="btn" />
        </div>
        <BookmarkIcon className="btn" />
      </div>
    </div>
  );
}
