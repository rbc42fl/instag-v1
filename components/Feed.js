import { useRecoilState } from 'recoil';
//import { userState } from '../atom/userAtom';
import { useSession } from 'next-auth/react';
import Miniprofile from './Miniprofile';
import Posts from './Posts';
import Stories from './Stories';
import Suggestions from './Suggestions';

export default function Feed() {
  const { data: session } = useSession();
  return (
    <main
      className={`grid ${
        session
          ? 'grid-cols-1 md:grid-cols-3 md:max-w-6xl mx-auto'
          : 'grid-cols-1 md:grid-cols-2 md:max-w-3xl mx-auto'
      }`}
    >
      <section className="md:col-span-2">
        {/* Stories */}
        <Stories />
        {/* posts */}
        <Posts />
      </section>

      <section className="hidden md:inline-grid md:col-span-1">
        <div className="fixed w-[380px]">
          {/* Mimi Profiles */}
          <Miniprofile />
          {/* Suggestions */}
          <Suggestions />
        </div>
      </section>
    </main>
  );
}
