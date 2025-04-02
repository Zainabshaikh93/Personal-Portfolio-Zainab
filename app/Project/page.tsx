import React from "react";
import Image from "next/image"; // Import Image from next/image

const Projects = () => {
  const projects = [
    {
      title: "Project One",
      description: "A beautiful portfolio website with custom animations and design using Next.js.",
      image: "/portfolio-dummy.jpeg", // Replace with your project image path
      link: "https://github.com/your-username/project-one", // Replace with your project link
    },
    {
      title: "Project Two",
      description: "A full-stack application using Node.js and MongoDB for the back-end and React for the front-end.",
      image: "/A full-stack-application.png", // Replace with your project image path
      link: "https://github.com/your-username/project-two", // Replace with your project link
    },
    {
      title: "Project Three",
      description: "A web application built with React and Next.js, showcasing my skills in front-end development.",
      image: "/dmes-pic.jpeg", // Replace with your project image path
      link: "https://github.com/your-username/project-three", // Replace with your project link
    },
  ];

  return (
    <section className="bg-white py-20 text-black">
      <div className="container mx-auto px-8 lg:px-16">
        <h2 className="text-4xl font-extrabold text-center mb-16">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project, index) => (
            <div key={index} className="bg-gradient-to-r from-teal-400 to-cyan-600 rounded-lg shadow-lg p-6">
              <Image
                src={project.image}
                alt={project.title}
                width={500} // Specify width for optimization
                height={300} // Specify height for optimization
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p className="text-lg font-light mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-yellow-400 text-black font-semibold py-2 px-6 rounded-lg text-lg transition-all duration-300 hover:bg-yellow-500"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
