export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-slate-950/20 backdrop-blur-xl">
      <div className="bg-white/10 dark:bg-black/20 backdrop-blur-md border border-white/20 p-8 rounded-3xl shadow-2xl flex flex-col items-center gap-5 max-w-xs w-full text-center hover:scale-105 transition-transform duration-300">
        <div className="absolute -z-10 w-24 h-24 bg-purple-500/30 blur-2xl rounded-full animate-pulse" />

        <span className="loading loading-spinner w-12 h-12 text-purple-600 drop-shadow-md"></span>

        <div className="w-48 bg-white/20 h-1.5 rounded-full overflow-hidden relative border border-white/5">
          <div className="bg-gradient-to-r from-purple-500 to-indigo-500 h-full w-1/2 rounded-full absolute animate-[shimmer_1.5s_infinite] left-0"></div>
        </div>

        <p className="text-gray-800 dark:text-gray-200 text-sm font-semibold tracking-wide uppercase animate-pulse">
          Loading AppStore...
        </p>
      </div>
    </div>
  );
}
