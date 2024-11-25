"use client";
import Head from 'next/head';
import Image from 'next/image';

import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

const About = () => {
  return (
    <>
 <Head>
  <title>About Me | My Portfolio</title>
   <meta name="description" content="Learn more about me and my journey as a developer." />
</Head>
 <main className="min-h-screen bg-slate-900 py-12 px-6 ">
<div className="max-w-5xl mx-auto ">
   < BackgroundBeams/>
  {/* Header Section */}
 <div className="text-center mb-12 ">
  <h1 className="text-5xl font-extrabold text-blue-900 mb-4 p-4 m-11">
     About Me
  </h1>
 <p className="text-lg text-gray-400">
     Discover my journey, skills, and what drives my passion for development.
   </p>
 </div>

{/* Main Content */}
<div className="flex flex-col md:flex-row items-center md:items-start gap-8 bg-gray-900 shadow-lg rounded-lg p-8">
   {/* Profile Image */}
  <div className="w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden shadow-xl border-4 border-blue-400">
    <Image
         src="/my.jpg" width={500} height={500}// Replace with your profile image path
            alt="Profile"
           className="w-full h-full object-cover"
            />
           
  </div>

            {/* Text Content */}
  <div className="flex-1">
            <h2 className="text-3xl font-semibold text-blue-300 mb-4">
                Hi, I am Arisha Saleem
            </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
                I am a passionate developer dedicated to building innovative web applications that deliver seamless user experiences. With a focus on AI, I bring ideas to life through clean, efficient, and scalable code.
         </p>
          <p className="text-gray-400 leading-relaxed mb-4">
                My journey into development began with how the world fastly moving to Ai. Over the years,
          </p>
           <p className="text-gray-400 leading-relaxed mb-4">
                Beyond coding, I enjoy exploring nature, learning about new tech, or engaging in creative hobbies.
          </p>

              {/* Buttons */}
  <div className="flex flex-wrap gap-4 mt-6">
             <button> 
             <a
                  href="/contact"
                  className="border border-blue-500 text-blue-500 px-6 py-3 rounded-lg shadow-md
                   hover:bg-blue-500 hover:text-white transition"
              >
                  Contact Me
            </a>
            </button>  
  </div>
                 {/* Skills Section */}
  <div className="mt-16 ">
            <h2 className="text-4xl font-semibold text-blue-900 text-center mb-8 ">
              Skills
            </h2>
   <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
              {/* Skill Badges */}
              {[
                'HTML',
                'CSS',
                'JavaScript',
                'React',
                'Next.js',
                'Tailwind CSS',
                'Node.js',
                'Git',
                'TypeScript',
                'Python',
                'Figma',
              ].map((skill) => (
  <div
                  key={skill}
                  className="bg-gray-800 text-blue-300 text-center py-3 rounded-lg shadow-md hover:bg-gray-700 transition"
                >
                  {skill}
      </div>
              ))}
       </div>
           
       </div>
         </div>
            
      </div>
     </div>
</main>
    </>
  );
};

export default About;
