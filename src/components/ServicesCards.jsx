import React from 'react';
import { Link } from 'react-router-dom'; 
import PrivateIB from '../assets/PrivateBanking.jpeg';
import CorporateFinance from "../assets/CorporateIB.jpeg";
import FamilyIB from "../assets/FamilyIB.jpeg";

const cards = [
  {
    image: CorporateFinance,
    heading: "Corporate Finance",
    description:
      "We provide strategic advisory services, including mergers and acquisitions, capital raising, and financial restructuring.",
    link: "/about",
  },
  {
    image: PrivateIB,
    heading: "Private Banking",
    description:
      "Our private banking services offer personalized wealth management, investment advice, and financial planning for high-net-worth individuals.",
    link: "/about",
  },
  {
    image: FamilyIB,
    heading: "Family Offices",
    description:
      "We cater to the unique needs of affluent families, providing comprehensive wealth management, estate planning, and philanthropic advisory.",
    link: "/about",
  },
];

const ServicesCards = () => {
  return (
    <section className="py-12 bg-slate-100">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl text-slate-700 mb-10">Our Core Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {cards.map((card, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-transform transform hover:scale-105 overflow-hidden duration-300"
            >
              {/* Image remains unchanged */}
              <img
                src={card.image}
                alt={card.heading}
                loading="lazy"
                className="w-full h-40 object-cover grey-tone"
              />

           {/* Text section gets gradient on hover */}
<div className="p-6 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-red-500 group-hover:to-red-700">
  <h3 className="text-xl font-semibold mb-2 text-slate-600 group-hover:text-white">
    {card.heading}
  </h3>
  <p className="text-sm mb-4 text-slate-500 group-hover:text-white">
    {card.description}
  </p>
  <Link
    to={card.link}
    className="text-red-600 group-hover:text-white hover:underline text-sm font-medium"
  >
    Learn More →
  </Link>
</div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesCards;
