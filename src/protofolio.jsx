import React, { useState } from 'react';

const PortfolioWebsite = () => {
  const [activeSection, setActiveSection] = useState('about');

  const profileData = {
    name: "Om Prakash Sharma",
    title: "Software Engineer",
    about: "Passionate software engineer with expertise in Java, Python, and JavaScript. Skilled in MERN stack and data-driven solutions.",
    contact: {
      email: "op809034@gmail.com",
      phone: "+91 8090 349760",
      linkedin: "https://linkedin.com/in/om-sharma",
      github: "https://github.com/OmSharma167"
    },
    // ... (rest of the profileData remains the same)
  };

  const renderSection = () => {
    switch(activeSection) {
      case 'about':         
  return (           
    <div className="grid md:grid-cols-2 gap-8 items-center">             
      <div className="bg-gradient-to-br from-blue-800 to-purple-900 rounded-full w-64 h-64 mx-auto overflow-hidden shadow-lg">               
        <img                 
          src="/api/placeholder/300/300"                 
          alt="Profile picture of Om Prakash Sharma"                 
          className="w-full h-full object-cover"               
        />             
      </div>             
      <div>               
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>               
        <p className="text-gray-300 leading-relaxed">                 
          Hello! I'm <span className="font-bold text-blue-400">Om Prakash Sharma</span>, a 3rd-year Computer Science Engineering student specializing in Data Science. I’m passionate about web development and love building innovative applications that solve real-world problems. As a full-stack developer proficient in the MERN stack, I thrive on creating seamless user experiences and robust backend solutions. My journey is fueled by a strong foundation in Data Structures and Algorithms (DSA) and a commitment to continuous learning and collaboration. Let's innovate together!
        </p>               
        <div className="flex space-x-4 mt-6">                 
          {[                   
            { icon: "✉️", link: `mailto:${profileData.contact.email}` },                   
            { icon: "🔗", link: profileData.contact.linkedin },                   
            { icon: "💻", link: profileData.contact.github }                 
          ].map((social, index) => (                   
            <a                     
              key={index}                     
              href={social.link}                     
              target="_blank"                     
              rel="noopener noreferrer"                     
              className="text-3xl hover:scale-110 transition-transform text-white"                   
            >                     
              {social.icon}                   
            </a>                 
          ))}               
        </div>             
      </div>           
    </div>         
  );

      case 'resume':
        return (
          <div>
            <div>
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
              <div className="space-y-6">
                {profileData.education.map((edu, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {edu.institution}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {edu.duration}
                      </span>
                    </div>
                    <p className="text-gray-300 mb-2">{edu.degree}</p>
                    <p className="text-gray-400">
                      <span className="font-medium">Location:</span> {edu.location}
                    </p>
                    {edu.grade && (
                      <p className="text-gray-400">
                        <span className="font-medium">Grade:</span> {edu.grade}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Experience</h2>
              <div className="space-y-6">
                {profileData.experience.map((exp, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <h3 className="text-xl font-semibold text-white">
                        {exp.role} | {exp.company}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {exp.duration}
                      </span>
                    </div>
                    <p className="text-gray-400 mb-2">
                      <span className="font-medium">Location:</span> {exp.location}
                    </p>
                    <ul className="list-disc list-inside text-gray-300 space-y-2">
                      {exp.highlights.map((highlight, highlightIndex) => (
                        <li key={highlightIndex}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-3xl font-bold mb-8 text-center text-white">Skills</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {profileData.skills.map((skill, index) => (
                  <div 
                    key={index} 
                    className="bg-gray-800 rounded-lg shadow-md p-4"
                  >
                    <div className="flex justify-between items-center">
                      <span className="font-medium text-white">{skill.name}</span>
                      <span className="text-sm text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 mt-2">
                      <div 
                        className="bg-blue-600 h-2 rounded-full" 
                        style={{width: `${skill.level}%`}}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      case 'projects':
        return (
          <div>
            <h2 className="text-3xl font-bold mb-8 text-center text-white">Projects</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {profileData.projects.map((project, index) => (
                <div 
                  key={index} 
                  className="bg-gray-800 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow"
                >
                  <img 
                    src={project.image} 
                    alt={project.name} 
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 text-white">
                      {project.name}
                    </h3>
                    <p className="text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="bg-blue-900 text-blue-200 text-xs px-2 py-1 rounded-full"
                        >
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
      default:
        return renderSection()['about'];
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <nav className="bg-gray-800 shadow-md sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
          {['About', 'Resume', 'Projects'].map((section) => {
            const sectionKey = section.toLowerCase();
            return (
              <button
                key={sectionKey}
                onClick={() => setActiveSection(sectionKey)}
                className={`
                  px-4 py-2 rounded-full text-md font-medium transition-colors
                  ${activeSection === sectionKey 
                    ? 'bg-blue-600 text-white' 
                    : 'text-gray-300 hover:bg-gray-700'}
                `}
              >
                {section}
              </button>
            );
          })}
        </div>
      </nav>

      <main className="container mx-auto px-4 py-12">
        {renderSection()}
      </main>


    </div>
  );
};

export default PortfolioWebsite;