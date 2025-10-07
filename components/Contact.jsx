'use client'
import React, { useState } from 'react'
import './Contact.css'

const Contact = ({ isDarkMode }) => {
  const [result, setResult] = useState("")

  const onSubmit = async (event) => {
    event.preventDefault()
    setResult("Sending....")
    const formData = new FormData(event.target)
    formData.append("access_key", "a6b4db5c-3425-4898-8811-8d04884d9fb1")

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    })

    const data = await response.json()

    if (data.success) {
      setResult("✅ Form Submitted Successfully!")
      event.target.reset()
    } else {
      console.log("Error", data)
      setResult("❌ " + data.message)
    }
  }

  return (
    <div
      className="footer w-full px-[12%] py-16 scroll-mt-20 bg-no-repeat bg-center bg-[length:90%_auto] 
      dark:bg-none relative"
      id="contact"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-blue-100/40 via-transparent to-transparent dark:from-white/5 pointer-events-none"></div>

      {/* Heading */}
      <div className="relative text-center">
        <h4 className="mb-2 text-lg text-blue-600 font-semibold dark:text-blue-400">
          Connect with Me
        </h4>
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white drop-shadow-sm">
          Get in Touch
        </h2>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-300 text-base leading-relaxed">
          I’d love to hear from you! If you have any questions, comments, or
          feedback, feel free to reach out below.
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={onSubmit}
        className="relative max-w-2xl mx-auto mt-12 bg-white/70 dark:bg-darkHover/40 backdrop-blur-md 
        shadow-xl rounded-2xl p-8 border border-gray-200 dark:border-gray-700"
      >
        <div className="grid md:grid-cols-2 gap-6">
          <input
            name="name"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-darkHover/60 focus:ring-2 focus:ring-blue-500 outline-none 
            transition-all duration-300"
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            className="w-full p-4 rounded-xl border border-gray-300 dark:border-gray-600 
            bg-white dark:bg-darkHover/60 focus:ring-2 focus:ring-blue-500 outline-none 
            transition-all duration-300"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>

        <textarea
          name="message"
          className="w-full mt-6 p-4 rounded-xl border border-gray-300 dark:border-gray-600 
          bg-white dark:bg-darkHover/60 focus:ring-2 focus:ring-blue-500 outline-none 
          transition-all duration-300 resize-none"
          rows="6"
          placeholder="Your Message"
          required
        ></textarea>

        <button
          type="submit"
          className="mt-8 py-3 px-8 flex items-center justify-center gap-2 bg-gradient-to-r 
          from-blue-600 to-indigo-600 text-white font-medium rounded-full mx-auto 
          hover:scale-105 shadow-lg hover:shadow-blue-500/30 transition-all duration-500 
          dark:from-blue-500 dark:to-purple-500"
        >
          ✉️ Submit Now
        </button>

        <p
          className={`mt-6 text-center font-medium ${
            result.includes("✅")
              ? "text-green-600 dark:text-green-400"
              : result.includes("❌")
              ? "text-red-600 dark:text-red-400"
              : "text-gray-700 dark:text-gray-300"
          }`}
        >
          {result}
        </p>
      </form>
    </div>
  )
}

export default Contact
