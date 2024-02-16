import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission logic
    console.log(formData);
    // Clear the form data
    setFormData({
      name: '',
      email: '',
      message: ''
    });
    // Show alert
    window.alert('We will contact you soon');
  };

  return (
    <div className="container mx-auto px-4 py-8 mb-8"> {/* Add margin-bottom to the entire contact page */}
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <div className="max-w-md mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <div className="text-center mb-8">
            <button type="submit" className="bg-green-500 text-black px-4 py-2 rounded-md border border-green-800 hover:bg-green-600 focus:outline-none focus:bg-green-600">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
