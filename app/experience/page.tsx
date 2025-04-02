import React from "react";
import Image from "next/image"; // Import Image from next/image

const TeachingExperience = () => {
  const experiences = [
    {
      name: "Computer Teacher at Usman Public School System",
      institution: "Usman Public School System",
      icon: (
        <Image
          src="/upss-logo.jpeg"
          alt="upss Logo"
          width={80}
          height={80}
          className="rounded-full" // Use a specific width and height for Next.js Image
        />
      ),
      description:
        "Taught computer science concepts and programming languages to students, helping them build strong technical foundations.",
      color: "bg-gradient-to-r from-blue-500 to-indigo-600",
    },
    {
      name: "Teacher at Governor House Karachi",
      institution: "Governor House Karachi",
      icon: (
        <Image
          src="/gi-logo.jpeg"
          alt="GIAIC Logo"
          width={80}
          height={80}
          className="rounded-full" // Use a specific width and height for Next.js Image
        />
      ),
      description:
        "Taught courses on development, focusing on Artificial Intelligence, Web 3.0, and Metaverse technologies to aspiring students at the Governor House, Karachi.",
      color: "bg-gradient-to-r from-green-400 to-teal-500",
    },
  ];

  return (
    <section className="py-20 text-black">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Teaching Experience
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {experiences.map((experience, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 ${experience.color} rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <div className="mb-4">{experience.icon}</div>
              <h3 className="text-xl font-semibold">{experience.name}</h3>
              <p className="mt-4 text-center">{experience.description}</p>
              <p className="text-sm text-center mt-2">At: {experience.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeachingExperience;
