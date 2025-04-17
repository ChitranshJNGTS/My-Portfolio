import React from 'react'

const Contact = () => {
  return (
    <>
       <section id="contact" className="py-20 bg-gray-800 text-white text-center">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <h2 className="text-4xl font-bold mb-6 text-yellow-400">Contact Me</h2>
          <p className="text-lg mb-8 text-gray-300">Feel free to reach out to me for any project or collaboration.</p>
          <form className="bg-gray-900 p-8 rounded-lg shadow-lg max-w-3xl mx-auto">
            <div className="mb-4">
              <label className="block text-yellow-400 text-left mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
            </div>
            <div className="mb-4">
              <label className="block text-yellow-400 text-left mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required />
            </div>
            <div className="mb-4">
              <label className="block text-yellow-400 text-left mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-400" required></textarea>
            </div>
            <button type="submit" className="px-6 py-3 text-lg font-semibold bg-yellow-400 hover:bg-yellow-500 text-black rounded-lg shadow-xl transition duration-300">Send Message</button>
          </form>
        </div>
      </section> 
    </>
  )
}

export default Contact
