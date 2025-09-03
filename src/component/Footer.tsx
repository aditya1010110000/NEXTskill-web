import React from "react";
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <div className="relative w-full b-0 bg-gradient-to-b from-black/10 to-black text-white mx-auto">
      <footer className="bg-transparent text-gray-400 py-0 px-6 mx-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand / About */}
          <div>
            <h2 className="text-2xl font-bold text-white">MyBrand</h2>
            <p className="mt-4 text-sm leading-relaxed">
              Crafting modern solutions for the digital era. We design, build,
              and ship web products with impact.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Docs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  FAQs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Support
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-5">
              <a href="#" className="hover:text-white transition-colors">
                <Facebook />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Twitter />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin />
              </a>
            </div>
          </div>
        </div>

        {/* Divider + Bottom */}
      </footer>
      <div className="w-full h-0 my-14 pt-6 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} MyBrand. All rights reserved.
      </div>
    </div>
  );
};

export default Footer;