import Image from "next/image";

import { FaStar, FaDownload } from "react-icons/fa";

const TrendingApps = async () => {
  const apps = await fetch(
    "https://conceptual15-next.vercel.app/data.json"
  ).then((res) => res.json());
  
  const trendingApps = apps.slice(0, 8);

  return (
    <div className="w-11/12 lg:w-9/12 mx-auto my-16">
      
   
      <div className="mb-8">
        <span className="text-xs font-bold uppercase tracking-widest text-purple-600 block mb-1">
          Top Rated
        </span>
        <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight text-gray-900">
          Trending Apps
        </h2>
      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {trendingApps.map((app) => (
          <div 
            key={app?.id} 
            className="group bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-5 shadow-lg hover:shadow-2xl hover:bg-white/30 hover:scale-[1.03] transition-all duration-300 flex flex-col justify-between"
          >
          
            <div className="flex justify-center items-center bg-white/40 backdrop-blur-sm rounded-xl p-4 mb-4 border border-white/20 group-hover:bg-white/60 transition-colors">
              <Image
                src={app?.image}
                alt={app?.title || "App Image"}
                width={90}
                height={90}
                className="rounded-2xl object-contain drop-shadow-md"
              />
            </div>

        
            <div className="flex-grow flex flex-col justify-between">
              <div>
                <h3 className="text-lg font-bold tracking-tight text-gray-950 line-clamp-1 mb-0.5">
                  {app?.title}
                </h3>
                <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                  {app?.companyName || "Unknown Developer"}
                </p>

               
                <div className="flex items-center justify-between bg-white/30 backdrop-blur-sm border border-white/20 rounded-xl px-3 py-2 mb-4 text-xs font-bold text-gray-800 shadow-inner">
                  {/* রেটিং পার্ট */}
                  <div className="flex items-center gap-1">
                    <FaStar className="text-amber-500" size={14} />
                    <span>{app?.ratingAvg || "0.0"}</span>
                  </div>
                 
                  <span className="text-gray-300">|</span>
                 
                  <div className="flex items-center gap-1">
                    <FaDownload className="text-purple-600" size={12} />
                    <span>{app?.downloads || "0"} Downloads</span>
                  </div>
                </div>
              </div>

              <div className="w-full">
                <button className="w-full py-2.5 px-4 bg-purple-600/90 hover:bg-purple-600 text-white font-bold text-sm tracking-wide rounded-xl shadow-md transition-all duration-200 hover:shadow-purple-500/20 active:scale-95">
                  See Details
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingApps;