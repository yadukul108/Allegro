import React from 'react';
import { ChartNoAxesCombined, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-100 text-slate-500 pt-12">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Column 1: Logo / Icon */}
        <div className="md:col-span-1 flex flex-col items-start">
          <div className="mb-4">
            <ChartNoAxesCombined size={50} className="text-slate-700" />
          </div>
          <p className="text-sm text-slate-600">Empowering futures through strategic investment insights.</p>
        </div>

        {/* Column 2 */}
        <div>
          <h3 className="text-slate-700 font-semibold text-lg mb-4">Our Services</h3>
          <ul className="space-y-2 text-sm">
            {["Investment Banking", "Asset Management", "Wealth Advisory", "Risk Solutions"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-slate-600 hover:text-red-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h3 className="text-slate-700 font-semibold text-lg mb-4">Insights</h3>
          <ul className="space-y-2 text-sm">
            {["Reports & Publications", "Investor Relations", "Newsroom", "Events"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-slate-600 hover:text-red-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h3 className="text-slate-700 font-semibold text-lg mb-4">Connect</h3>
          <ul className="space-y-2 text-sm">
            {["Contact Us", "Support", "Locations", "Privacy Policy"].map((item, i) => (
              <li key={i}>
                <a
                  href="#"
                  className="text-slate-600 hover:text-red-600 transition"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Bottom Footer Text */}
      <div className="mt-10 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Allegro Advisors. All rights reserved.
      </div>

      {/* Social Media Section */}
      <div className=" py-3 mt-6">
        <div className="flex justify-center space-x-6">
          {[Facebook, Twitter, Linkedin, Instagram].map((Icon, i) => (
            <a href="#" key={i} className="text-red-600">
              <Icon size={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
