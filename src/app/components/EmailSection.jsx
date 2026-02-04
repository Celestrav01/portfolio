"use client";

import React, { useState, useRef } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import EmailIcon from "../../../public/email.png";
import LeetCodeIcon from "../../../public/leetcode.svg";
import CodeChefIcon from "../../../public/codechef_logo_icon.svg";
import Link from "next/link";
import Image from "next/image";
import emailjs from "@emailjs/browser";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setEmailSubmitted(true);
        setTimeout(() => {
          setEmailSubmitted(false);
          form.current.reset();
        }, 4000);
      })
      .catch((error) => console.log("error", error.text));
  };

  return (
    <section id="email" className="mt-24 mb-16">
      <div className="max-w-5xl mx-auto bg-[#181818] border border-white/10 rounded-2xl p-8 sm:p-12">
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-3xl font-bold text-white mb-3">
              Let’s Connect
            </h2>

            <p className="text-[#ADB7BE] mb-6 max-w-md">
              I’m actively looking for full-time roles and opportunities.
              If you’d like to discuss backend development, DSA, or projects,
              feel free to reach out.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex items-center gap-4 mt-4 flex-wrap">
              <Link
                href="https://github.com/Celestrav01"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={GithubIcon} alt="GitHub" width={32} height={32} />
              </Link>

              <Link
                href="https://www.linkedin.com/in/rohit-kumar-bharti-2b1263237/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image src={LinkedinIcon} alt="LinkedIn" width={32} height={32} />
              </Link>

              {/* LeetCode */}
              <Link
                href="https://leetcode.com/u/CelestialTravlr01/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={LeetCodeIcon}
                  alt="LeetCode"
                  width={32}
                  height={32}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </Link>

              {/* CodeChef */}
              <Link
                href="https://www.codechef.com/users/celestial45"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={CodeChefIcon}
                  alt="CodeChef"
                  width={32}
                  height={32}
                  className="opacity-80 hover:opacity-100 transition"
                />
              </Link>

              {/* Email */}
              <Link
                href="mailto:divinerohitkr@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={EmailIcon}
                  alt="Email"
                  width={32}
                  height={32}
                  className="object-contain"
                />
              </Link>
            </div>
          </div>

          {/* CONTACT FORM */}
          <form
            ref={form}
            onSubmit={handleSubmit}
            className="flex flex-col gap-5"
          >
            <div>
              <label className="block text-sm text-white mb-1">
                Your Name
              </label>
              <input
                name="from_name"
                type="text"
                required
                className="w-full rounded-lg bg-[#121212] border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">
                Your Email
              </label>
              <input
                type="email"
                name="from_email"
                required
                className="w-full rounded-lg bg-[#121212] border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:border-primary-500"
              />
            </div>

            <div>
              <label className="block text-sm text-white mb-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                className="w-full rounded-lg bg-[#121212] border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:border-primary-500"
                placeholder="Let’s talk about..."
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-lg bg-primary-500 hover:bg-primary-600 text-white py-2.5 font-medium"
            >
              Send Message
            </button>

            {emailSubmitted && (
              <p className="text-green-500 text-sm text-center">
                Message sent successfully!
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
