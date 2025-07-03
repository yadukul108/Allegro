import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

const statsData = [
  { number: 150, label: 'Projects Completed' },
  { number: 200, label: 'Clients Served' },
  { number: 10, label: 'Years of Experience' }
];

const Stats = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,      // run only once
    threshold: 0.5,         // % of component visible before triggering
  });

  return (
    <div className="bg-slate-100">

    <div ref={ref} className="w-11/12 mx-auto py-12 bg-slate-100">
      <h1 className="text-3xl text-slate-700 mb-10 ">Key Statistics</h1>
      <div className="flex flex-wrap w-3/4 mx-auto justify-between gap-10">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center w-full sm:w-auto">
            <h2 className="text-3xl font-medium text-slate-700">
              {inView ? (
                <CountUp end={stat.number} duration={3} />
              ) : (
                0
              )}
              <span className="text-red-600">+</span>
            </h2>
            <p className="mt-2 text-lg text-slate-600">{stat.label}</p>
          </div>
        ))}
      </div>
    </div></div>
  );
};

export default Stats;
