import React from "react";
import googlePlayStore from "../../../../public/images/play-store-CAdV1BgT.png";
import appleStore from "../../../../public/images/appleStore-Bidn2ck-.png";
import bannerImg from "../../../../public/images/hero.png";
import Image from "next/image";

const Banner = () => {
  return (
    <div className="min-h-[80vh] text-center w-11/12 lg:w-9/12 mx-auto mt-10">
      <h2 className="font-bold text-5xl">
        We Builld <br /> <span className="text-purple-500">Productive </span>
        Apps
      </h2>
      <p className="text-gray-600 mt-5">
        At HERO.IO, we craft innovative apps designed to make everyday life
        simpler, smarter, and more exciting. Our goal is to turn your ideas into
        digital experiences that truly make an impact.
      </p>
      <div className="flex gap-4 justify-center mt-5">
        <button className="btn">
          <Image
            src={googlePlayStore}
            alt="download google playstore"
            height={20}
            weight={20}
          />
          Download
        </button>
        <button className="btn">
          <Image
            src={appleStore}
            alt="download google playstore"
            height={20}
            weight={20}
          />
          Download
        </button>
      </div>
      <div className="flex justify-center mt-10">
        <Image src={bannerImg} alt="banner Image" height={700} width={700} />
      </div>
    </div>
  );
};

export default Banner;
