import React from "react";
import { Link } from "react-router-dom";
import { Twitter, Facebook, Instagram, Linkedin, Github } from "lucide-react";
import { companyName, companyUrl, name } from "../screens/constants";

const socialLinks = [
  { icon: Twitter, href: "https://x.com/mwinami_", label: "Twitter" },
  { icon: Facebook, href: "https://facebook.com/mwinamijr", label: "Facebook" },
  { icon: Instagram, href: "https://instagram.com/_mwinami", label: "Instagram" },
  { icon: Linkedin, href: "https://linkedin.com/in/mwinamijr", label: "LinkedIn" },
  { icon: Github, href: "https://github.com/mwinamijr", label: "GitHub" },
];

const Footer: React.FC = () => (
  <footer className="relative bg-slate-950 text-gray-400 border-t border-slate-800">
    <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center space-y-6">
      <Link
        to="/"
        className="text-2xl font-bold bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400 bg-clip-text text-transparent"
      >
        {name}
      </Link>

      <div className="flex items-center gap-4">
        {socialLinks.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            className="p-2 rounded-full bg-slate-800/60 hover:text-cyan-300 hover:scale-110 transition"
          >
            <Icon className="w-5 h-5" />
          </a>
        ))}
      </div>

      <div className="w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />

      <div className="text-center text-sm md:text-base">
        <p>
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-white font-medium">{name}</span>. All rights reserved.
        </p>
        <p className="text-gray-500 mt-1">
          Founder &amp; CEO of{" "}
          <a
            href={companyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-cyan-300 font-semibold hover:underline"
          >
            {companyName}
          </a>
        </p>
      </div>
    </div>
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-violet-500 to-cyan-400" />
  </footer>
);

export default Footer;
