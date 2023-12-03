// import { useState, useEffect } from 'react';

// const CustomerFeedback = () => {
//     const feedbackData = [
//           {
//             text: `"Lorem ipsum dolor sit amet consectetur adipi sicing elit. Dolores, ducimus."`,
//             name: 'Abdul Hakim',
//             title: 'Feed Miller',
//             image: 'https://img.freepik.com/free-photo/awkward-smiling-man-feel-indecisive_176420-18009.jpg?w=996&t=st=1701583573~exp=1701584173~hmac=0034ab6010aedc19e1c2bb3f3a7a37b59c533313a7c7b89ad9c6e06b70c72ed1',
//           },
//           {
//             text: `"Lorem ipsum dolor sit amet consectetur adipi sicing elit. Sed nec ipsum enim."`,
//             name: 'John Doe',
//             title: 'Software Engineer',
//             image: 'https://img.freepik.com/free-photo/smiling-businessman-posing-camera_104881-1708.jpg?w=996&t=st=1701583573~exp=1701584173~hmac=6fbb024700e166579f2475759125a82957734164c53351f36c87796776449d2',
//           },
//           {
//             text: `"Lorem ipsum dolor sit amet consectetur adipi sicing elit. Nullam nec semper libero."`,
//             name: 'Jane Smith',
//             title: 'Product Manager',
//             image: 'https://img.freepik.com/free-photo/beautiful-businesswoman-looking-camera_104881-1710.jpg?w=996&t=st=1701583573~exp=1701584173~hmac=5a699745733e21d18b13676935f229859c79683e291731d1182829730456024',
//           },
//     ];

//     const [currentFeedbackIndex, setCurrentFeedbackIndex] = useState(0);

//     useEffect(() => {
//         const intervalId = setInterval(() => {
//             // Increment the feedback index in a circular manner
//             setCurrentFeedbackIndex((prevIndex) => (prevIndex + 1) % feedbackData.length);
//         }, 5000);

//         return () => clearInterval(intervalId); 

//     }, [currentFeedbackIndex, feedbackData.length]);

//     const currentFeedback = feedbackData[currentFeedbackIndex];

//     return (
//         <div>
//             {/* Your existing JSX for the title */}
//             {/* ... */}

//             <div>
//                 <h1 className='w-[85%] lg:w-[60%] mx-auto px-7 py-4 lg:py-7 rounded-lg bg-zinc-50 shadow-md text-lg text-center'>
//                     <span className='text-5xl font-mono text-sky-700'>"</span>
//                     {currentFeedback.text}
//                     <span className='text-5xl font-mono text-sky-700'>"</span>
//                 </h1>

//                 <div className='flex items-center justify-center gap-x-4'>
//                     <div className='w-[60px] h-[60px] rounded-full' >
//                         <img className='rounded-full h-full w-full' src={currentFeedback.image} alt="" />
//                     </div>

//                     <div className='my-5'>
//                         <p className='font-semibold'>{currentFeedback.name}</p>
//                         <p>{currentFeedback.role}</p>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default CustomerFeedback;
