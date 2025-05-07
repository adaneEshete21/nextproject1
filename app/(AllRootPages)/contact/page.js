import React from 'react';

const Contact = () => {
  return (
           
    <div className="flex flex-col lg:flex-row gap-4 mb-6">
   <div className="flex-1 m-5 bg-gradient-dark "  style={{marginTop:'60px',marginLeft:'50px', marginRight:'3px'}}>
  <img className="w-full h-auto rounded-lg shadow-lg" 
  
  style={{width:'100%', height:'90%'}}
    //className="rounded-lg shadow-lg p-3 m-5"
    src="/contact.jpeg" 
    alt="Contact Us" 
    
  />
</div>
    <div className="flex-1">
      

    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-bold text-center mb-6">Contact Us</h1>
      <p className="text-lg text-center mb-10">
        Have questions or need assistance? Feel free to reach out to us. We're here to help!
      </p>

      <div className="max-w-full sm:max-w-3xl mx-auto bg-white shadow-lg rounded-lg p-4 sm:p-8">
        <form >
          {/* Name Field */}
          <div className="flex gap-4 mb-6">
  <div className="flex-1">
    <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
      First Name
    </label>
    <input
      type="text"
      id="firstName"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your first name"
    />
  </div>
  <div className="flex-1">
    <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
      Last Name
    </label>
    <input
      type="text"
      id="lastName"
      className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
      placeholder="Enter your last name"
    />
  </div>
</div>
          
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
            Company name
            </label>
            <input
              type="text"
              id="name"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="the company You owned or you work in "
            />
          </div>

          {/* Email Field */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your email"
            />
          </div>

          {/* Subject Field */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">
              Subject
            </label>
            <input
              type="text"
              id="subject"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter the subject"
            />
          </div>

          {/* Message Field */}
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows="5"
              className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Write your message here"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
    </div>
  </div>













  );
};

export default Contact;