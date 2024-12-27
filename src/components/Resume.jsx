import React from 'react';

const Resume = ({ profileData }) => {
  return (
    <div>
      <div>
        <h2 className="text-3xl font-bold mb-8 text-center text-white">Education</h2>
        <div className="space-y-6">
          {profileData.education.map((edu, index) => (
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">{edu.institution}</h3>
                <span className="text-sm text-gray-400">{edu.duration}</span>
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
            <div key={index} className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">
                  {exp.role} | {exp.company}
                </h3>
                <span className="text-sm text-gray-400">{exp.duration}</span>
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
    </div>
  );
};

export default Resume;
