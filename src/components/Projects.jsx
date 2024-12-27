import React from 'react';

const Projects = ({ profileData }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {profileData.projects.map((project, index) => (
          <div key={index} className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow">
            <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 text-white">{project.name}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <span key={techIndex} className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
