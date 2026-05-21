import React from "react";
import googlePlayStore from "../../../../public/images/play-store-CAdV1BgT.png";
import appleStore from "../../../../public/images/appleStore-Bidn2ck-.png";
import bannerImg from "../../../../public/images/hero.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-[80vh] text-center w-11/12 lg:w-8/12 mx-auto mt-14 flex flex-col items-center">
      
      {/* মেইন হেডিং (বানান ঠিক করা হয়েছে এবং টাইটেল ট্র্যাকিং টাইট করা হয়েছে) */}
      <h1 className="font-black text-4xl md:text-6xl tracking-tight text-gray-950 leading-tight">
        We Build <br /> 
        <span className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent drop-shadow-sm">
          Productive
        </span>{" "}
        Apps
      </h1>
      
      {/* সাবটাইটেল বা প্যারাগ্রাফ টেক্সট */}
      <p className="text-gray-600 max-w-2xl mt-6 text-sm md:text-base font-medium tracking-wide leading-relaxed">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      
      {/* লিকুইড গ্লাস বাটন সেকশন */}
      <div className="flex flex-wrap gap-4 justify-center mt-8">
        
        {/* Google Play Button */}
        <button className="btn bg-white/40 dark:bg-black/10 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:scale-105 shadow-md px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 font-semibold text-gray-800">
          <Image
            src={googlePlayStore}
            alt="download google playstore"
            height={22}
            width={22} // 'weight' থেকে ঠিক করে 'width' করা হলো
          />
          <span className="text-sm tracking-wide">Play Store</span>
        </button>
        
        {/* Apple Store Button */}
        <button className="btn bg-white/40 dark:bg-black/10 backdrop-blur-md border border-gray-300/50 hover:bg-white/60 hover:scale-105 shadow-md px-6 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 font-semibold text-gray-800">
          <Image
            src={appleStore}
            alt="download apple appstore"
            height={22}
            width={22}
          />
          <span className="text-sm tracking-wide">App Store</span>
        </button>
        
      </div>
      
      {/* ব্যানার ইমেজ (নিচে হালকা শ্যাডো ও গ্লাস বেজ এফেক্ট সহ) */}
      <div className="flex justify-center mt-14 relative w-full max-w-3xl hover:scale-[1.01] transition-transform duration-500">
        {/* ইমেজের পেছনে একটি হালকা গ্লো বা লাইট ইফেক্ট (ঐচ্ছিক, দেখতে অসাধারণ লাগবে) */}
        <div className="absolute inset-0 bg-purple-300/20 blur-3xl rounded-full -z-10 w-3/4 h-3/4 mx-auto my-auto" />
        
        <Image 
          src={bannerImg} 
          alt="Hero Banner Image" 
          height={700} 
          width={700}
          className="drop-shadow-2xl object-contain"
          priority // পেজ লোড স্পিড বাড়ানোর জন্য ফার্স্ট প্রায়োরিটি দেওয়া হলো
        />
      </div>

    </div>
  );
};

export default Banner;