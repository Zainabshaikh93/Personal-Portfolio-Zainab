import React from "react";
import { FaCertificate } from "react-icons/fa"; // Import certification icon
import Image from "next/image"; // Import the Image component for rendering images

const Certifications = () => {
  const certifications = [
    {
      name: "CNC Certification",
      institution: "Institute of Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      icon: <FaCertificate size={40} />,
      description: "Completed a specialized CNC certification program, focusing on the standards and best practices of Cloud Native Computing for building scalable, resilient, and secure cloud applications.",
      color: "bg-gradient-to-r from-yellow-400 to-orange-500",
    },
    {
      name: "Initiative for Artificial Intelligence, Web 3.0 & Metaverse",
      institution: "Institute of Presidential Initiative for Artificial Intelligence & Computing (PIAIC)",
      icon: <FaCertificate size={40} />,
      description: "Completed a certification program on AI, Web 3.0, and Metaverse, focusing on the latest technologies and their applications.",
      color: "bg-gradient-to-r from-blue-500 to-teal-500",
    },
  ];

  return (
    <section className="py-20 text-black">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-16">
          Certifications
        </h2>
        {/* Add the PIAIC logo */}
        <div className="text-center mb-8">
          <Image
            src="/piaic-logo.jpeg" // Path to the image in the public folder
            alt="PIAIC Logo"
            width={130} // Adjust the width
            height={130} // Adjust the height
            className="mx-auto mb-4 rounded-full" // This makes the image rounded
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-12">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className={`flex flex-col items-center p-6 ${cert.color} rounded-lg shadow-lg hover:scale-105 transition-transform duration-300`}
            >
              <div className="mb-4">
                {cert.icon} {/* Render the React Icon */}
              </div>
              <h3 className="text-xl font-semibold">{cert.name}</h3>
              <p className="mt-4 text-center">{cert.description}</p>
              <p className="text-sm text-center mt-2">From: {cert.institution}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
