"use client";

import { useState, useEffect } from "react";
import { PaperPlaneIcon } from "@radix-ui/react-icons";
import FadeContent from "./reactbits/FadeContent";

export default function Contact() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      company: e.target.company.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (res.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Error sending message.");
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="w-full py-14 px-2"
    >
      <FadeContent
        blur={false}
        duration={1800}
        easing="ease-out"
        initialOpacity={0}
        delay={200}
      >
        <div className="max-w-7xl mx-auto mb-3">

          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            Contact
          </h1>

          <p className="mt-5 max-w-2xl text-lg leading-8 text-zinc-400">
            Whether you have a software opportunity, a project you'd like to discuss, or simply want to connect, I'd love to hear from you.
          </p>

        </div>
      </FadeContent>

      <div
        className="
          max-w-7xl
          mx-auto
          rounded-3xl
          border
          border-zinc-700
          bg-zinc-900/40
          backdrop-blur-md
          p-8
          md:p-10
        "
      >

        <form
          onSubmit={handleSubmit}
          className="grid gap-6"
        >

          <div className="grid gap-6 md:grid-cols-2">

            <div>

              <label className="block mb-2 text-sm font-medium">
                Name
              </label>

              <input
                id="name"
                name="name"
                type="text"
                placeholder="John Doe"
                autoComplete="given-name"
                required
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-700
                  bg-zinc-950/40
                  px-4
                  py-3
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                  transition
                  focus:border-sky-500
                "
              />

            </div>

            <div>

              <label className="block mb-2 text-sm font-medium">
                Company
              </label>

              <input
                id="company"
                name="company"
                type="text"
                placeholder="Company Ltd."
                autoComplete="organization"
                className="
                  w-full
                  rounded-xl
                  border
                  border-zinc-700
                  bg-zinc-950/40
                  px-4
                  py-3
                  text-white
                  placeholder:text-zinc-500
                  outline-none
                  transition
                  focus:border-sky-500
                "
              />

            </div>

          </div>

          <div>

            <label className="block mb-2 text-sm font-medium">
              Email
            </label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@email.com"
              autoComplete="email"
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-700
                bg-zinc-950/40
                px-4
                py-3
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                focus:border-sky-500
              "
            />

          </div>

          <div>

            <label className="block mb-2 text-sm font-medium">
              Message
            </label>

            <textarea
              id="message"
              name="message"
              rows={7}
              placeholder="Tell me about your project..."
              required
              className="
                w-full
                rounded-xl
                border
                border-zinc-700
                bg-zinc-950/40
                px-4
                py-3
                text-white
                placeholder:text-zinc-500
                outline-none
                transition
                resize-none
                focus:border-sky-500
              "
            />

          </div>

          <div className="flex justify-end pt-2">

            <button
              type="submit"
              disabled={loading}
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-sky-600
                px-6
                py-3
                font-medium
                transition-all
                duration-300
                hover:bg-sky-500
                hover:scale-[1.02]
                disabled:opacity-60
                cursor-pointer
              "
            >
              <PaperPlaneIcon />

              {loading ? "Sending..." : "Let's Talk"}

            </button>

          </div>

        </form>

      </div>
    </section>
  );
}