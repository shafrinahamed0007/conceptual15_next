"use client";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-base-200 flex flex-col items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-9xl font-extrabold text-primary drop-shadow-md animate-bounce">
          404
        </h1>
        {/* DaisyUI Card Component */}
        <div className="card bg-base-100 shadow-xl mt-8">
          <div className="card-body items-center text-center">
            <h2 className="card-title text-2xl font-bold text-base-content">
              পৃষ্ঠাটি খুঁজে পাওয়া যায়নি!
            </h2>
            <p className="text-base-content/70 my-2">
              দুঃখিত, আপনি যে পেজটি খুঁজছেন তা হয়তো মুছে ফেলা হয়েছে অথবা লিংকটি
              ভুল ছিল।
            </p>

            <div className="card-actions justify-center mt-4 gap-2 w-full sm:flex-row flex-col">
              <Link href="/" className="btn btn-primary sm:w-auto w-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-5 h-5 mr-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.505-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
                হোম পেজে ফিরে যান
              </Link>

              <button
                onClick={() =>
                  typeof window !== "undefined" && window.history.back()
                }
                className="btn btn-outline btn-secondary sm:w-auto w-full"
              >
                পূর্ববর্তী পেজ
              </button>
            </div>
          </div>
        </div>

        <div className="mt-8 text-sm opacity-50">
          <p>© {new Date().getFullYear()}</p>
        </div>
      </div>
    </div>
  );
}
