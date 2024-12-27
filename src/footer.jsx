import React from 'react';
import { 
  Linkedin, 
  Github, 
  Twitter, 
  Mail 
} from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { 
      icon: <Linkedin />, 
      href: "https://www.linkedin.com/in/om-prakash-sharma", 
      title: "LinkedIn" 
    },
    { 
      icon: <Github />, 
      href: "https://github.com/omprakashsharma", 
      title: "GitHub" 
    },
    { 
      icon: <span className="font-bold text-lg">LC</span>, 
      href: "https://leetcode.com/om-prakash-sharma", 
      title: "LeetCode" 
    },
    { 
      icon: <Twitter />, 
      href: "https://twitter.com/ompsharma", 
      title: "Twitter" 
    },
    { 
      icon: <Mail />, 
      href: "mailto:contact@ompsharma.dev", 
      title: "Email" 
    }
  ];

  return (
    <footer className="bg-gray-800 text-gray-300 py-8 text-center">
      <div className="container mx-auto px-4">
        <div className="mb-4">
          <p className="text-lg font-semibold">Om Prakash Sharma</p>
          <p className="text-sm text-gray-400">Software Engineer</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-4">
          {socialLinks.map((social) => (
            <a
              key={social.title}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center justify-center"
              aria-label={social.title}
            >
              {social.icon && React.cloneElement(
                typeof social.icon === 'object' ? social.icon : <span>{social.icon}</span>, 
                { size: 24 }
              )}
            </a>
          ))}
        </div>
        
        <div className="text-sm text-gray-500">
          <p>© {new Date().getFullYear()} All Rights Reserved</p>
          <p className="mt-1 text-xs">Designed with ❤️ by Om Prakash Sharma</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;