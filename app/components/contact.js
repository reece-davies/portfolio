"use client";
import { useState, useEffect } from "react";

export default function Contact() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null; // prevent SSR/hydration mismatch

  return (
    <section id="contact" className="flex flex-col w-full py-10 gap-6">
      <h1 className="text-4xl sm:text-5xl font-bold pt-10 pb-2">Contact</h1>

      <form className="px-1 sm:px-5 md:px-20" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block">Name</label>
            <div className="mt-2">
              <input
                id="first-name"
                type="text"
                name="first-name"
                autoComplete="given-name"
                placeholder="John Doe"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
              />
            </div>
          </div>

          <div>
            <label htmlFor="company" className="block">Company</label>
            <div className="mt-2">
              <input
                id="company"
                type="text"
                name="company"
                autoComplete="organization"
                placeholder="Corporation Inc."
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="email" className="block">Email</label>
            <div className="mt-2">
              <input
                id="email"
                type="email"
                name="email"
                autoComplete="email"
                placeholder="email@gmail.com"
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
              />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label htmlFor="message" className="block">Message</label>
            <div className="mt-2">
              <textarea
                id="message"
                name="message"
                rows={4}
                defaultValue={""}
                placeholder="Type your message here."
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-sky-600"
              />
            </div>
          </div>
        </div>

        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-sky-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-xs hover:bg-sky-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-600 transition-colors duration-500 ease-in-out"
          >
            Let's talk
          </button>
        </div>
      </form>
    </section>
  );
}
