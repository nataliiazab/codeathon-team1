"use client";

import Link from "next/link";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin className="text-white" />,
      link: "https://www.linkedin.com/company/the-big-alliance/",
      label: "LinkedIn",
    },
    {
      icon: <Twitter className="text-white" />,
      link: "https://x.com/TheBIGAlliance",
      label: "Twitter",
    },
    {
      icon: <Instagram className="text-white" />,
      link: "https://www.instagram.com/thebigalliance/",
      label: "Instagram",
    },
  ];

  const navigationLinks = [
    { title: "Home", path: "/" },
    { title: "Become a Donor", path: "/register" },
  ];

  return (
    <footer className="bg-[#059669] text-white py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-1">
          <h2 className="text-2xl font-bold mb-4">The BIG Alliance</h2>
          <p className="text-gray-200 leading-relaxed mb-4">
            Empowering communities through innovation and support. Join us to
            make a real impact.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((social, idx) => (
              <a
                key={idx}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Find Us</h3>
          <address className="not-italic text-gray-300">
            13 Elliott's Place, <br />
            Islington, London <br />
            N1 8HX
          </address>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <nav className="flex flex-col space-y-2">
            {navigationLinks.map((item, idx) => (
              <Link
                key={idx}
                href={item.path}
                className="text-gray-300 hover:text-white transition-colors duration-300 font-medium"
              >
                {item.title}
              </Link>
            ))}
          </nav>
        </div>

        <div className="md:col-span-1">
          <h3 className="text-xl font-semibold mb-4">Important Info</h3>
          <p className="text-gray-300 leading-relaxed">
            BIG Alliance is a project delivered by East London Business Alliance
            (registered charity number 1122173), and founded and funded by
            Islington Giving and Macquarie Group.
          </p>
        </div>
      </div>

      <div className="border-t border-gray-600 mt-10 pt-6">
        <div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
          {/* Copyright and Credits */}
          <p className="text-gray-400 text-sm text-center md:text-left mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} Team 1
          </p>
          <p className="text-gray-400 text-sm text-center md:text-right">
            Developed for 'Code for a Cause Hackathon'
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
