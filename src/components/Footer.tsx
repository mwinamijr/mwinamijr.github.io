import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";

const Footer: React.FC = () => {
  const socialLinks = [
    {
      icon: <Twitter className="w-5 h-5" />,
      href: "https://x.com/mwinami_",
      color: "hover:text-sky-400",
      label: "Twitter",
    },
    {
      icon: <Facebook className="w-5 h-5" />,
      href: "https://facebook.com/mwinamijr",
      color: "hover:text-blue-500",
      label: "Facebook",
    },
    {
      icon: <Instagram className="w-5 h-5" />,
      href: "https://instagram.com/_mwinami",
      color: "hover:text-pink-500",
      label: "Instagram",
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      href: "https://linkedin.com/in/mwinamijr",
      color: "hover:text-blue-400",
      label: "LinkedIn",
    },
    {
      icon: <Github className="w-5 h-5" />,
      href: "https://github.com/mwinamijr",
      color: "hover:text-gray-300",
      label: "GitHub",
    },
  ];

  return (
    <footer className="relative bg-slate-950 text-gray-400 border-t border-orange-800">
      {/* Top Section */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center justify-center space-y-6">
        {/* Logo / Title */}
        <Link
          to="/"
          className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent tracking-wide hover:opacity-90 transition"
        >
          Techdometz
        </Link>

        {/* Social Icons */}
        <div className="flex items-center justify-center gap-5">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className={`p-2 rounded-full bg-gray-800/50 backdrop-blur-sm transition-all hover:scale-110 hover:shadow-lg hover:shadow-blue-500/10 ${link.color}`}
            >
              {link.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-800 to-transparent" />

        {/* Footer Text */}
        <div className="text-center text-sm md:text-base">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()}{" "}
            <span className="text-white font-medium">Techdometz</span>. All
            rights reserved.
          </p>
          <p className="text-gray-500 mt-1">
            Designed & Developed by{" "}
            <span className="text-blue-400 font-semibold">Mwinami Jr</span>.
          </p>
        </div>
      </div>

      {/* Bottom Gradient Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-500" />
    </footer>
  );
};

export default Footer;
