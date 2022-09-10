import React from 'react';

export default function Miniprofile() {
  return (
    <div className="flex items-center justify-between mt-14 ml-10">
      <img
        className="h-16 rounded-full border p-[2px]"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.QhMtcoJUhbSQUSSG4fVB3wAAAA%26pid%3DApi&f=1"
        alt="user-image"
      />
      <div className="flex-1 ml-4">
        <h2 className="font-bold">hardcodedname</h2>
        <h3 className="text-sm text-gray-400">Welcome to My Verse</h3>
      </div>
      <button className="font-semibold text-blue-400 text-sm">Sign out</button>
    </div>
  );
}
