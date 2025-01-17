/* eslint-disable no-unused-vars */
import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const links = [
  { href: "https://github.com/Chiagozielam", icon: <FaGithub /> },
  { href: "https://twitter.com/iamdanieldon", icon: <FaTwitter /> },
  { href: "https://linkedin.com/in/iamdanieldon", icon: <FaLinkedin /> },
  { href: "https://instagram.com/thatdanieldon", icon: <FaInstagram /> },
];
const Footer = () => {
  return (
    <footer className="w-screen bg-violet-300 py-4 text-black">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row">
        <p className="text-center text-sm md:text-left">
          &copy; Daniel Don 2025. All rights reserved
        </p>
        <div className="flex justify-center gap-4 md:justify-start">
          {links.map((link, index) => (
            <a
              href={link.href}
              key={index}
              target="_blank"
              rel="noopener noreferrer"
              className="text-black transition-colors duration-500 ease-in-out hover:text-white"
            >
              {link.icon}
            </a>
          ))}
        </div>
        <a href="#privacy-policy" className="text-center text-sm hover:underline md:text-right">Privacy Policy</a>
      </div>
    </footer>
  );
};

export default Footer;
