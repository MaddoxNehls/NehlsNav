import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer mt-auto">
      <div className="footer-content flex flex-col items-center text-black font-semibold text-lg">
        <p>
          Made with <span className="text-red-500">❤️</span> by Maddox
          <span className="ml-2">&copy; {currentYear}</span>
        </p>
        <div className="social-icons flex space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/maddox-nehls" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-2xl">
            <i className="fab fa-linkedin-in"></i>
          </a>
          <a href="https://www.github.com/MaddoxNehls" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-2xl">
            <i className="fab fa-github"></i>
          </a>
          <a href="https://maddoxnehls.vercel.app/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500 transition-colors text-2xl">
            <i className="fas fa-link"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
