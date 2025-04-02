import React from "react";
import { FaReact, FaAws, FaDocker, FaPython, FaGit } from "react-icons/fa"; // Import specific icons from react-icons
import Image from 'next/image'; // Import the Image component from Next.js

const Skills = () => {
  const skillSet = [
    // Skills with React Icon components
    { name: "React", icon: <FaReact size={40} />, color: "bg-gradient-to-r from-blue-500 to-indigo-600" },
    { name: "AWS", icon: <FaAws size={40} />, color: "bg-gradient-to-r from-orange-500 to-yellow-600" },
    { name: "Docker", icon: <FaDocker size={40} />, color: "bg-gradient-to-r from-blue-600 to-blue-700" },
    { name: "Python", icon: <FaPython size={40} />, color: "bg-gradient-to-r from-yellow-500 to-orange-600" },
    { name: "Git", icon: <FaGit size={40} />, color: "bg-gradient-to-r from-red-600 to-pink-600" },

    // Skills with SVG Image icons
    { name: "Next.js", icon: "/next.png", color: "bg-gradient-to-r from-teal-400 to-cyan-600" },
    { name: "Tailwind CSS", icon: "/tailwind.png", color: "bg-gradient-to-r from-teal-500 to-green-500" },
    { name: "TypeScript", icon: "/ts.png", color: "bg-gradient-to-r from-blue-400 to-blue-500" },
    { name: "Node.js", icon: "/node.png", color: "bg-gradient-to-r from-purple-600 to-pink-600" },
  ];

  return (
    <section className="py-20 text-black">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Skills & Tools I Use
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {skillSet.map((skill, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 ${skill.color} rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              {/* Render SVG Image or React Icon */}
              <div className="mb-4">
                {typeof skill.icon === "string" ? (
                  <Image
                    src={skill.icon} // The path to the image
                    alt={skill.name}  // Alt text
                    width={64}         // Specify width
                    height={64}        // Specify height
                  />
                ) : (
                  skill.icon // Render the React Icon component
                )}
              </div>
              <h3 className="text-xl font-semibold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
