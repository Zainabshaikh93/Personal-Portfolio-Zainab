'use client'; // Marks this component as a client-side component in Next.js

import React from "react";
import Typewriter from "typewriter-effect";
import Image from 'next/image'; // Importing Image component from Next.js

const Hero = () => {
  // Function to generate a random color
  const getRandomColor = () => {
    const colors = ['text-red-500', 'text-blue-500', 'text-green-500', 'text-yellow-500', 'text-purple-500'];
    return colors[Math.floor(Math.random() * colors.length)];
  };

  const colorStrings = [
    { text: "I am a teacher", color: getRandomColor() },
    { text: "I am a developer", color: getRandomColor() },
    { text: "I am a problem solver", color: getRandomColor() },
    { text: "I am a designer", color: getRandomColor() },
    { text: "Associate Engineer in Computer Information Technology", color: getRandomColor() },
  ];

  return (
    <div>
      {/* Main Content */}
      <div className="p-8">
        <h1 className="bg-gradient-to-r from-teal-400 to-cyan-600 text-center text-white py-6 text-4xl font-extrabold">
          Welcome to Zainab Shaikh Portfolio
        </h1>

        {/* Typewriter Effect for Two Lines of Text */}
        <div className="text-center mt-8">
          <h2 className="text-4xl text-black font-semibold mb-4">
            <Typewriter
              options={{
                strings: colorStrings.map(
                  (item) => `<span class="${item.color}">${item.text}</span>` // Apply the color classes dynamically to the strings
                ),
                autoStart: true,
                loop: true,
                delay: 75, // Optional: speed up or slow down the typing effect
                wrapperClassName: "inline-block", // Ensures that the typewriter effect works within the span
                cursor: "_", // Adds a cursor effect for the typewriter
              }}
            />
          </h2>
        </div>
      </div>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 to-cyan-600 text-white mx-8">
        {/* Container with margin added for extra space on the left and right */}
        <div className="container mx-auto px-8 lg:px-16 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0 lg:space-x-16 pt-8">
          {/* Left Content with extra padding */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0 px-4 lg:px-8">
            <h2 className="text-3xl lg:text-4xl font-extrabold mb-4">
              Building Easy-to-Use Websites
            </h2>
            <p className="text-lg lg:text-xl font-light mb-8">
              Hi, I am Zainab Shaikh, a passionate web developer specializing in creating clean, responsive, and user-friendly websites. With a strong foundation in front-end development and a keen eye for design, I build intuitive digital experiences. Explore my work below and feel free to reach out for collaboration opportunities!
            </p>
            {/* The "Let's Talk" button now opens the Google Form in a new tab */}
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSf21yyL4S9kxX-7wEo9FLIgQbdI5AuapCuCNi5OUJTO6PkV4g/viewform?usp=header" // Link to Google Form
              target="_blank" // Opens in a new tab
              rel="noopener noreferrer" // Ensures security when opening a new tab
              className="inline-block bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg text-lg transition-all duration-300 hover:bg-yellow-500"
            >
              Let us Talk
            </a>
          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <Image
              src="/dummy1.png" // Make sure your image is inside the "public" directory
              alt="Hero Image"
              width={500} // Set a fixed width (adjust as needed)
              height={500} // Set a fixed height (adjust as needed)
              className="w-3/4 h-auto rounded-lg shadow-lg object-cover" // Apply styles as needed
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
