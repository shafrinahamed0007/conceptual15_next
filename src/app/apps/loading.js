const Loading = () => {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/20 backdrop-blur-xl">
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-5 max-w-xs w-full text-center hover:scale-105 transition-transform duration-300">
        
        {/* Background Glow Effect */}
        <div className="absolute -z-10 w-24 h-24 bg-amber-500/20 blur-2xl rounded-full animate-pulse" />

        {/* Product/Shopping Icon with Animation */}
        <div className="relative flex items-center justify-center w-16 h-16 bg-gradient-to-tr from-amber-500 to-orange-500 rounded-2xl shadow-lg shadow-orange-500/30 animate-bounce duration-1000">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            fill="none" 
            viewBox="0 0 24 24" 
            strokeWidth={2} 
            stroke="currentColor" 
            className="w-8 h-8 text-white"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
          </svg>
          
          {/* Mini Spinner Ring around the Icon */}
          <div className="absolute -inset-1.5 border-2 border-amber-500/30 border-t-amber-500 rounded-2xl animate-spin duration-700"></div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 bg-white/20 h-1.5 rounded-full overflow-hidden relative border border-white/5 mt-2">
          <div className="bg-gradient-to-r from-amber-500 to-orange-500 h-full w-1/2 rounded-full absolute animate-[shimmer_1.5s_infinite] left-0"></div>
        </div>

        {/* Loading Text */}
        <div className="flex flex-col gap-1">
          <p className="text-gray-800 dark:text-gray-200 text-sm font-bold tracking-wider uppercase animate-pulse">
            Loading Product...
          </p>
          <p className="text-gray-500 dark:text-gray-400 text-xs">
            Please wait a moment
          </p>
        </div>

      </div>
    </div>
  );
};

export default Loading;