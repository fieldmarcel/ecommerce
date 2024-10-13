import React from 'react';

const Contact = () => {
  return (
    <div className="container mx-auto p-8">
      <div className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow-lg">
        <form action="https://getform.io/f/bejywqka" method="POST" className="space-y-6">
          {/* Username Input */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              type="text"
              name="username"
              placeholder="Enter your username"
              required
              autoComplete="off"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              autoComplete="off"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>

          {/* Message Textarea */}
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">
              Message
            </label>
            <textarea
        name="message"
        cols={30}
              rows={5}
              placeholder="Enter your message"
              required
              autoComplete="off"
              className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <input
              type="submit"
              value="Send"
              className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition duration-300 cursor-pointer"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
