import React from 'react'
import contactIMG from "../assets/HomeIB.jpg"
import Footer from "../components/Footer"
const Contact = () => {
  return (
    <div>
    <section className="min-h-screen bg-slate-100 flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-6xl bg-white shadow-lg rounded-xl grid grid-cols-1 md:grid-cols-2 overflow-hidden">
        
        <div
  className="text-white flex items-center justify-center p-8 md:p-12 bg-cover bg-center grey-tone"
  style={{ backgroundImage: `url(${contactIMG})` }}
>
  <div className=" bg-opacity-60 p-6 rounded">
    <h2 className="text-3xl md:text-4xl font-bold leading-snug text-center">
      Contact Us
    </h2>
  </div>
</div>
        {/* Right Form Section */}
        <form className="p-8 md:p-12 bg-white space-y-6">
          <div>
            <label htmlFor="name" className="block mb-2 text-slate-700 font-medium">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your name"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-2 text-slate-700 font-medium">Email</label>
            <input
              type="email"
              id="email"
              placeholder="you@example.com"
              className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            />
          </div>

          <div>
            <label htmlFor="message" className="block mb-2 text-slate-700 font-medium">Message</label>
            <textarea
              id="message"
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-slate-300 px-4 py-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
      <Footer/></div>
  );
  
}

export default Contact
