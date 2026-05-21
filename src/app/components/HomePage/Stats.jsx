import React from "react";

const Stats = () => {
  return (
    // মেইন কন্টেইনারে একটি সুন্দর পার্পল-ব্লু মডার্ন গ্রেডিয়েন্ট ব্যাকগ্রাউন্ড দেওয়া হয়েছে
    <div className="mt-[-85px] lg:mt-0 bg-gradient-to-br from-indigo-950 via-purple-900 to-slate-900 min-h-[60vh] lg:min-h-[50vh] text-center text-white py-12 flex flex-col justify-center items-center">
      
      {/* হেডার সেকশন: সুন্দর টেক্সট স্পেসিং সহ */}
      <div className="w-11/12 mx-auto mb-10">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-300 drop-shadow-md block mb-2">
          Our Achievements
        </span>
        <h2 className="text-2xl lg:text-4xl font-extrabold tracking-tight drop-shadow-sm">
          Trusted by Millions, Built for You
        </h2>
      </div>

      {/*৩টি স্ট্যাটসের জন্য ৩টি Liquid Glass Card */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 w-10/12 lg:w-9/12 mx-auto">
        
        {/* কার্ড ১: Total Downloads */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
            Total Downloads
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md mb-2">
            29.6M
          </h2>
          <p className="text-xs font-medium text-emerald-400 bg-emerald-500/10 inline-block px-2.5 py-1 rounded-full border border-emerald-500/20">
            ↑ 21% more than last month
          </p>
        </div>

        {/* কার্ড ২: Total Reviews */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02]">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
            Total Reviews
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md mb-2">
            906K
          </h2>
          <p className="text-xs font-medium text-emerald-400 bg-emerald-500/10 inline-block px-2.5 py-1 rounded-full border border-emerald-500/20">
            ↑ 46% more than last month
          </p>
        </div>

        {/* কার্ড ৩: Active Apps */}
        {/* md:col-span-2 lg:col-span-1 দেওয়ার কারণে রেসপনসিভনেস আরও সুন্দর দেখাবে */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl shadow-xl hover:bg-white/15 transition-all duration-300 hover:scale-[1.02] md:col-span-2 lg:col-span-1">
          <p className="text-xs font-bold uppercase tracking-wider text-purple-200 mb-2">
            Active Apps
          </p>
          <h2 className="text-4xl lg:text-5xl font-black text-white tracking-tight drop-shadow-md mb-2">
            132+
          </h2>
          <p className="text-xs font-medium text-sky-300 bg-sky-500/10 inline-block px-2.5 py-1 rounded-full border border-sky-500/20">
            ⏳ 31 more will Launch
          </p>
        </div>
        
      </div>
    </div>
  );
};

export default Stats;