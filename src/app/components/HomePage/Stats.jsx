import React from "react";

const Stats = () => {
  return (
    <div className="mt-[-225px] lg:mt-0 bg-purple-500 h-[50vh] font-bold  text-center text-white">
      <div className="flex items-center justify-center">
        <h2 className="mt-20 text-2xl lg:text-3xl">Trusted by Millions, Build for You</h2>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 lg:mt-10 mb-10 gap-5 w-9/12 mx-auto ">
        <div>
          <p>Total Downloads</p>
          <h2 className="text-5xl font-bold">29.6M</h2>
          <p>21% more than last month</p>
        </div>
        <div>
          <p>Total Reviews</p>
          <h2 className="text-5xl font-bold">906K</h2>
          <p>46% more than last month</p>
        </div>
        <div>
          <p>Active Apps</p>
          <h2 className="text-5xl font-bold">132+</h2>
          <p>31 more will Launch</p>
        </div>
        
      </div>
    </div>
  );
};

export default Stats;
