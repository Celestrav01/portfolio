import React from "react";

const Footer = () => {
  return (
    <footer className="border-t border-white/10 mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6 flex flex-col sm:flex-row items-center justify-between text-sm text-[#ADB7BE]">
        
        {/* LEFT */}
        <p>
          © {new Date().getFullYear()} Rohit. All rights reserved.
        </p>

        {/* RIGHT */}
        <p className="mt-2 sm:mt-0">
          Built with <span className="text-white">Next.js</span> &{" "}
          <span className="text-white">Tailwind CSS</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
