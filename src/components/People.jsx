import React, { useState } from "react";
import Person from "../assets/Person.jpeg"
const teamMembers = [
  {
    name: "Aditya Yadav",
    designation: "Software Engineer",
    education: "B.Tech in Computer Science",
    description: "Aditya believes in tech for good and community building.",
    image: Person,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Riya Sharma",
    designation: "Product Manager",
    education: "MBA, IIM Ahmedabad",
    description: "Creating bridges between users and tech.",
    image: Person,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Rahul Mehta",
    designation: "Data Analyst",
    education: "M.Sc in Data Science",
    description: "Bringing insights to life with numbers.",
    image: Person,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sneha Verma",
    designation: "UI/UX Designer",
    education: "B.Des in Communication Design",
    description: "Designing intuitive and delightful user experiences.",
    image: Person,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Rahul Mehta",
    designation: "Data Analyst",
    education: "M.Sc in Data Science",
    description: "Bringing insights to life with numbers.",
    image: Person,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
  {
    name: "Sneha Verma",
    designation: "UI/UX Designer",
    education: "B.Des in Communication Design",
    description: "Designing intuitive and delightful user experiences.",
    image: Person,
    socials: {
      linkedin: "#",
      twitter: "#",
      github: "#",
    },
  },
];

const People = () => {
  const [selectedMember, setSelectedMember] = useState(null);

  return (
    <div className=" min-h-screen bg-slate-100 py-16 px-4 md:px-16">
      <h1 className="text-4xl font-bold  mb-12 text-slate-600">Our People</h1>

      {/* Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {teamMembers.map((member, index) => (
         <div
  key={index}
  className="bg-slate-50 shadow-md rounded-xl p-4 text-center transition transform hover:scale-105 hover:shadow-xl cursor-pointer"
  onClick={() => setSelectedMember(member)}
>
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-48 object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold text-black">{member.name}</h3>
            <p className="text-sm text-gray-500">{member.designation}</p>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedMember && (
        <div className="fixed inset-0 bg-slate-100 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-lg relative text-center">
            <button
              onClick={() => setSelectedMember(null)}
              className="absolute top-2 right-4 text-2xl text-red-500 font-bold"
            >
              ×
            </button>
            <img
              src={selectedMember.image}
              alt={selectedMember.name}
              className="w-full h-56 object-cover rounded-md mb-4"
            />
            <div className="flex justify-center space-x-4 mb-4">
              <a href={selectedMember.socials.linkedin} target="_blank" rel="noreferrer" className="text-blue-600">
                LinkedIn
              </a>
              <a href={selectedMember.socials.twitter} target="_blank" rel="noreferrer" className="text-sky-500">
                Twitter
              </a>
              <a href={selectedMember.socials.github} target="_blank" rel="noreferrer" className="text-gray-800">
                GitHub
              </a>
            </div>
            <h2 className="text-2xl font-bold">{selectedMember.name}</h2>
            <p className="text-red-500">{selectedMember.designation}</p>
            <p className="italic text-sm text-gray-500">{selectedMember.education}</p>
            <p className="mt-4 text-gray-700">{selectedMember.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default People;
