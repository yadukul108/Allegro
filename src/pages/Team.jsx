import React from "react";
import People from "../components/People";
import Footer from "../components/Footer"
const OurPeople = () => {
  return (
    <div>
    <div className="bg-slate-100 pt-[3rem] px-6 md:px-16 ">
      {/* New Introduction Section */}
      <div className="text-left max-w-4xl pt-[6rem]"  >
        <h3 className="text-slate-400 text-sm uppercase tracking-wider">Our Team</h3>
        <h1 className="text-5xl font-bold text-slate-600 mt-5">Meet Our Team</h1>
        <h1 className="text-4xl font-semibold text-slate-600 mt-2">
          Passionate. Proactive. Expert.
        </h1>
        <h3 className="text-slate-400 text-base mt-4">
          At Allegro Advisors, our strength lies in the synergy of our people.
          Every member brings depth, energy, and a relentless pursuit of
          excellence to ensure our clients thrive.
        </h3>
      </div>

      {/* Team Cards Section */}
      <div className="mt-12">
        <People />
      </div>
    </div>
      <Footer/>
    </div>
  );
};

export default OurPeople;
