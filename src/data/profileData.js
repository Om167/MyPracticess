const profileData = {
  name: "Om Prakash Sharma",
  title: "Software Engineer",
  about:
    "Passionate software engineer with expertise in Java, Python, and JavaScript. Skilled in MERN stack and data-driven solutions. Driven by a passion for innovation and a deep curiosity for technology, I am dedicated to creating impactful solutions that bridge the gap between complex challenges and intuitive designs.",
  contact: {
    email: "op809034@gmail.com",
    phone: "+91 8090 349760",
    linkedin: "https://linkedin.com/in/om-sharma",
    github: "https://github.com/OmSharma167",
  },
  education: [
    {
      institution: "ABC Institute of Technology",
      degree: "Bachelor of Technology in Computer Science and Engineering",
      duration: "2022 - Present",
      location: "Sonbhadra, India",
      grade: "CGPA: 8.5/10",
    },
    {
      institution: "XYZ Senior Secondary School",
      degree: "Higher Secondary Education (Science)",
      duration: "2020 - 2022",
      location: "Varanasi, India",
      grade: "Percentage: 90%",
    },
  ],
  experience: [
    {
      role: "Data Analysis Intern",
      company: "Uttar Pradesh Forest Corporation (UPFC)",
      duration: "May 2023 - July 2023",
      location: "Sonbhadra, India",
      highlights: [
        "Utilized Python libraries like NumPy, Pandas, and Matplotlib to analyze and interpret large datasets related to forest data.",
        "Developed visual representations of annual forest data, including charts and graphs, for stakeholders.",
        "Contributed insights to environmental policy decisions through detailed reports and presentations.",
      ],
    },
  ],
  projects: [
    {
      name: "Healthcare Connect",
      description:
        "A healthcare platform connecting users with doctors for online consultations, chat, video calls, and emergency bookings.",
      technologies: ["React", "Node.js", "Express", "MongoDB"],
      image: "/images/healthcare-connect.jpg",
    },
    {
      name: "Beauty & Wellness Platform",
      description:
        "A comprehensive website offering salon, spa, and wedding makeup bookings with features like face AI analysis.",
      technologies: ["React", "Tailwind CSS", "Node.js", "MongoDB"],
      image: "/images/beauty-wellness.jpg",
    },
  ],
  skills: [
    { name: "Java", level: 85 },
    { name: "Python", level: 90 },
    { name: "JavaScript", level: 80 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "MongoDB", level: 75 },
    { name: "Data Structures & Algorithms", level: 85 },
    { name: "Tailwind CSS", level: 80 },
  ],
};

export default profileData;
