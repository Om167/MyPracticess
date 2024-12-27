import React from 'react';

const Navbar = ({ activeSection, setActiveSection }) => {
  const sections = ['About', 'Resume', 'Projects'];

  return (
    <nav className="bg-gray-800 shadow-md sticky top-0 z-10">
      <div className="container mx-auto px-4 py-4 flex justify-center space-x-8">
        {sections.map((section) => {
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
  );
};

export default Navbar;
