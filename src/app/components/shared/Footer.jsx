import Link from "next/link";

const Footer = () => {
  // লিঙ্কগুলোর ফন্ট সাইজ, ট্র্যাকিং (Letter spacing) এবং কালার আরও আকর্ষণীয় করা হয়েছে
  const links = (
    <>
      <Link href={'/'} className="tracking-wide uppercase text-xs font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200">
        Home
      </Link>
      <Link href={'/apps'} className="tracking-wide uppercase text-xs font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200">
        Apps
      </Link>
      <Link href="/installapps" className="tracking-wide uppercase text-xs font-semibold text-gray-800 hover:text-blue-600 transition-all duration-200">
        App Install
      </Link>
    </>
  );

  return (
    /* ব্যাকগ্রাউন্ড সামান্য গাঢ় (bg-white/40) করা হয়েছে লেখা আরও স্পষ্ট করার জন্য */
    <footer className="footer footer-horizontal mt-[120px] footer-center bg-white/40 backdrop-blur-md border-t border-white/30 rounded-t-3xl p-10 shadow-2xl">
      
      {/* Navigation Links */}
      <nav className="grid grid-flow-col gap-8">
        {links}
      </nav>
      
      {/* Social Icons */}
      <nav className="my-2">
        <div className="grid grid-flow-col gap-6">
          <a className="p-2.5 rounded-full bg-white/50 shadow-sm text-gray-600 hover:text-blue-500 hover:bg-white hover:scale-110 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
            </svg>
          </a>
          <a className="p-2.5 rounded-full bg-white/50 shadow-sm text-gray-600 hover:text-red-500 hover:bg-white hover:scale-110 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
              <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
            </svg>
          </a>
          <a className="p-2.5 rounded-full bg-white/50 shadow-sm text-gray-600 hover:text-blue-700 hover:bg-white hover:scale-110 transition-all cursor-pointer">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" className="fill-current">
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
      </nav>
      
      {/* Copyright Text */}
      <aside className="border-t border-gray-200/50 w-full pt-4 mt-2">
        <p className="text-sm font-medium tracking-wide text-gray-600 drop-shadow-sm">
          Copyright © {new Date().getFullYear()} — <span className="text-gray-800 font-semibold">Shafrin Ahamed</span>
        </p>
      </aside>

    </footer>
  );
};

export default Footer;