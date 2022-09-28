// import minifaker from 'minifaker';
// import 'minifaker/locales/en';
// import { useEffect, useState } from 'react';

// export default function Suggestions() {
//   const [suggestions, setSuggestions] = useState([]);
//   useEffect(() => {
//     const suggestions = minifaker.array(5, (i) => ({
//       username: minifaker.username({ locale: 'en' }).toLowerCase(),
//       jobTitle: minifaker.jobTitle(),
//       id: i,
//     }));
//     setSuggestions(suggestions);
//   }, []);
//   //   return (
//   //     <div className="mt-4 ml-10">
//   //       <div className="flex justify-between mb-5 text-sm">
//   //         <h3 className="font-bold text-gray-400">Suggestion for you</h3>
//   //         <button className="text-gray-600 font-semibold">See all</button>
//   //       </div>
//   //     </div>
//   //   );
// }
