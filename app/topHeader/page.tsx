import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome CSS

function TopHeader() {
  return (
    <div className="bg-white text-black py-2">
      <div className="container mx-auto flex justify-center items-center px-4">
        {/* Social Media Icons and Contact Number for Desktop */}
        <div className="hidden lg:flex flex-col items-center space-y-4">
          {/* Social Media Icons */}
          <div className="flex space-x-4">
            <a
              href="https://github.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-gray-700 p-2 rounded-full transition-all duration-300"
            >
              <i className="fab fa-github text-2xl" style={{ color: '#181717' }}></i>
            </a>
            <a
              href="https://www.linkedin.com/in/zainabshaikh1993/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-700 p-2 rounded-full transition-all duration-300"
            >
              <i className="fab fa-linkedin text-2xl" style={{ color: '#0A66C2' }}></i>
            </a>
            <a
              href="https://twitter.com/your-username"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-500 p-2 rounded-full transition-all duration-300"
            >
              <i className="fab fa-twitter text-2xl" style={{ color: '#1DA1F2' }}></i>
            </a>
            <a
              href="https://www.facebook.com/Zainab.shaikh.1993"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-blue-600 p-2 rounded-full transition-all duration-300"
            >
              <i className="fab fa-facebook text-2xl" style={{ color: '#1877F2' }}></i>
            </a>
            <div className="flex items-center mt-2">
            <i className="fas fa-phone-alt mr-2"></i>
            <a href="tel:+1234567890" className="text-black">
              +923442841486
            </a>
          </div>
          </div>

          {/* Contact Number */}
          
        </div>
      </div>

      {/* Mobile View Adjustment */}
      <div className="lg:hidden mt-2 text-center">
        {/* Social Media Icons for Mobile */}
        <div className="flex justify-center space-x-4 mb-2">
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-gray-700 p-2 rounded-full transition-all duration-300"
          >
            <i className="fab fa-github text-xl" style={{ color: '#181717' }}></i>
          </a>
          <a
            href="https://www.linkedin.com/in/zainabshaikh1993/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-700 p-2 rounded-full transition-all duration-300"
          >
            <i className="fab fa-linkedin text-xl" style={{ color: '#0A66C2' }}></i>
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-500 p-2 rounded-full transition-all duration-300"
          >
            <i className="fab fa-twitter text-xl" style={{ color: '#1DA1F2' }}></i>
          </a>
          <a
            href="https://www.facebook.com/Zainab.shaikh.1993"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-600 p-2 rounded-full transition-all duration-300"
          >
            <i className="fab fa-facebook text-xl" style={{ color: '#1877F2' }}></i>
          </a>
        </div>

        {/* Contact Number for Mobile */}
        <div className="flex justify-center items-center mt-2">
          <i className="fas fa-phone-alt mr-2"></i>
          <a href="tel:+923442841486" className="text-black">
            +923442841486
          </a>
        </div>
      </div>
    </div>
  );
}

export default TopHeader;
