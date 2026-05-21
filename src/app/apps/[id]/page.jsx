import Image from "next/image";
import { AiFillLike } from "react-icons/ai";
import { FaDownload, FaArrowLeft } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";

const AppDetail = async ({ params }) => {
  const { id } = await params;

  const apps = await fetch(
    "https://conceptual15-next.vercel.app/data.json",
  ).then((res) => res.json());

  const appDetail = apps.find((p) => p.id == id);

  if (!appDetail) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center text-center p-6">
        <h2 className="text-xl font-bold text-gray-800">App Not Found</h2>
        <Link
          href="/"
          className="mt-4 text-purple-600 font-medium hover:underline"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50/60 py-12 px-4 sm:px-6 lg:px-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-2xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-purple-600 mb-6 transition-colors uppercase tracking-wider group"
        >
          <FaArrowLeft className="group-hover:-translate-x-0.5 transition-transform" />{" "}
          Back to Explore
        </Link>

        <div className="bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl p-6 md:p-8 shadow-lg space-y-6">
          <div className="flex flex-col sm:flex-row gap-6 items-center sm:items-start text-center sm:text-left">
            <div className="flex justify-center items-center bg-white/40 backdrop-blur-sm rounded-xl p-4 border border-white/20 shadow-sm flex-shrink-0 w-[120px] h-[120px]">
              <Image
                src={appDetail?.image}
                alt={appDetail?.title || "App Image"}
                width={90}
                height={90}
                className="rounded-2xl object-contain drop-shadow-md"
              />
            </div>

            <div className="flex-grow space-y-1.5 pt-1 w-full">
              <h1 className="text-2xl md:text-3xl font-bold tracking-tight text-gray-950">
                {appDetail?.title}
              </h1>
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                {appDetail?.companyName || "Unknown Developer"}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-3 border-y border-gray-200/30 py-4 text-center bg-white/10 backdrop-blur-sm rounded-xl px-2">
            <div className="border-r border-gray-200/30 flex flex-col justify-center items-center">
              <p className="text-base font-bold text-gray-950 flex items-center gap-1">
                {appDetail?.ratingAvg || "0.0"}{" "}
                <IoIosStar className="text-amber-500" size={15} />
              </p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                Rating
              </p>
            </div>

            <div className="border-r border-gray-200/30 flex flex-col justify-center items-center">
              <p className="text-base font-bold text-gray-950 flex items-center gap-1">
                {appDetail?.downloads || "0"}{" "}
                <FaDownload className="text-purple-600" size={12} />
              </p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                Downloads
              </p>
            </div>

            <div className="flex flex-col justify-center items-center">
              <p className="text-base font-bold text-gray-950 flex items-center gap-1">
                {appDetail?.reviews || "0"}{" "}
                <AiFillLike className="text-blue-500" size={14} />
              </p>
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider mt-0.5">
                Total Reviews
              </p>
            </div>
          </div>

          <div className="w-full">
            <button className="w-full py-3 px-4 bg-purple-600/90 hover:bg-purple-600 text-white font-bold text-sm tracking-widest rounded-xl shadow-md transition-all duration-200 hover:shadow-purple-500/20 active:scale-95 uppercase">
              Install Now {appDetail?.size ? `(${appDetail.size} MB)` : ""}
            </button>
          </div>

          <div className="border-t border-gray-200/20 pt-4 space-y-2">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-400">
              Description
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed font-medium">
              {appDetail?.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppDetail;
