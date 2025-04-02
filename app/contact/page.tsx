'use client';
import React, { useState, ChangeEvent, FormEvent } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone: "",
  });

  const [formStatus, setFormStatus] = useState("");

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formDataToSubmit = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      message: formData.message,
    };

    try {
      console.log('Submitting form data:', formDataToSubmit); // Log form data
      const response = await fetch('https://script.google.com/macros/s/AKfycbxD6vVebzqaTjyHGGjd7-4S3dxXobGKgvvhiAnRtYATKmFe3HqDzwir9DOVpqoOE6rb/exec', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formDataToSubmit), // Send the form data as JSON
      });

      const result = await response.json();
      console.log('Response from server:', result); // Log server response
      if (result.result === 'success') {
        setFormStatus('Thank you for reaching out! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', message: '', phone: '' });
      } else {
        setFormStatus('Sorry, there was an error. Please try again later.');
      }
    } catch (error) {
      console.error('Error submitting form:', error); // Log error
      setFormStatus('Sorry, there was an error. Please try again later.');
    }
  };

  return (
    <section className="bg-gradient-to-r from-teal-400 to-cyan-600 text-white body-font relative py-20 ">
      <div className="container px-5 mx-auto">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">Contact Us</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-200">
            Reach out to us and we’ll respond as soon as possible!
          </p>
        </div>

        <div className="lg:w-1/2 md:w-2/3 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap -m-2">
              {/* Name Field */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-200">Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-700 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Email Field */}
              <div className="p-2 w-full sm:w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-200">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-700 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Phone Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="phone" className="leading-7 text-sm text-gray-200">Phone</label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-700 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Message Field */}
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-200">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-700 focus:border-yellow-500 focus:bg-white focus:ring-2 focus:ring-yellow-200 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>

              {/* Submit Button */}
              <div className="p-2 w-full">
                <button
                  type="submit"
                  className="flex mx-auto text-black bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 rounded text-lg"
                >
                  Send Message
                </button>
              </div>

              {/* Form Status */}
              {formStatus && (
                <div className="p-2 w-full text-center mt-4 text-green-400">
                  {formStatus}
                </div>
              )}

              {/* Google Form Link */}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <p className="text-white text-xl">Alternatively, you can fill out our <a href="https://docs.google.com/forms/d/e/1FAIpQLSf21yyL4S9kxX-7wEo9FLIgQbdI5AuapCuCNi5OUJTO6PkV4g/viewform?usp=header" target="_blank" className="text-yellow-800 underline">Google Form</a> if you prefer.</p>
              </div>

              {/* Social Media Icons */}
              <div className="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
                <a className="text-white">zeenshaikh93@email.com</a>
                
                {/* Gmail Chat Link */}
                <p className="text-white text-xl">tart a conversation via <a href="https://mail.google.com/mail/u/0/#chat" className="text-yellow-800 underline" target="_blank">Gmail Chat</a></p>

                <div className="flex justify-center space-x-4 mt-4">
                  <a
                    className="text-black p-3 rounded-full bg-white hover:bg-gray-700 transition-all duration-300"
                    href="https://github.com/Zainabshaikh93"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github text-2xl" style={{ color: "#181717" }}></i>
                  </a>
                  <a
                    className="text-black p-3 rounded-full bg-white hover:bg-gray-700 transition-all duration-300"
                    href="https://www.linkedin.com/in/zainabshaikh1993/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin text-2xl" style={{ color: "#0A66C2" }}></i>
                  </a>
                  <a
                    className="text-black p-3 rounded-full bg-white hover:bg-gray-700 transition-all duration-300"
                    href="https://twitter.com/your-username"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter text-2xl" style={{ color: "#1DA1F2" }}></i>
                  </a>
                  <a
                    className="text-black p-3 rounded-full bg-white hover:bg-gray-700 transition-all duration-300"
                    href="https://www.facebook.com/Zainab.shaikh.1993"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-facebook text-2xl" style={{ color: "#1877F2" }}></i>
                  </a>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
