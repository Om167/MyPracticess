import React from 'react';

const About = ({ profileData }) => {
  return (
    <div className="grid md:grid-cols-2 gap-8 items-center">
      <div className="bg-gradient-to-br from-blue-800 to-purple-900 rounded-full w-64 h-64 mx-auto overflow-hidden shadow-lg">
        <img
          src="/api/placeholder/300/300"
          alt={`Profile picture of ${profileData.name}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <h2 className="text-3xl font-bold mb-4 text-white">About Me</h2>
        <p className="text-gray-300 leading-relaxed">
          {profileData.about}
        </p>
        <div className="flex space-x-4 mt-6">
          {[
            { icon: '✉️', link: `mailto:${profileData.contact.email}` },
            { icon: '🔗', link: profileData.contact.linkedin },
            { icon: '💻', link: profileData.contact.github },
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
};

export default About;
