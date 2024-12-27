// import React from 'react';
// import PortfolioWebsite from './protofolio';
// import Footer from './footer';
// // import Portfolio from './Portfolio';
// // import Resume from './Resume';


// function App() {
//   return (
//     <div className="bg-gray-900 text-white min-h-screen">
     
//       <PortfolioWebsite/>
      
//       <Footer/>
//     </div>
    
//   );
// }

// export default App;
import React, { useState } from 'react';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import profileData from './data/profileData';

const App = () => {
  const [activeSection, setActiveSection] = useState('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <About profileData={profileData} />;
      case 'resume':
        return <Resume profileData={profileData} />;
      case 'projects':
        return <Projects profileData={profileData} />;
      default:
        return <About profileData={profileData} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar activeSection={activeSection} setActiveSection={setActiveSection} />
      <main className="container mx-auto px-4 py-12">{renderSection()}</main>
    </div>
  );
};

export default App;
