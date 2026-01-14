import Image from "next/image";
import React from "react";
import ExploreButton from "./ExploreButton";

export default function Banner() {
  return (
    <section
      style={{
        backgroundImage: "url('/assets/images/home/banner-bg.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className=" "
    >
      <div className="container flex items-end justify-center min-h-screen py-24 ">
        <div className="flex-1 overflow-visible">
          <h1 className="text-4xl lg:text-7xl 2xl:text-[100px] font-medium text-white max-w-[700px] tracking-wide">
            A New Leash On <span className="italic font-normal">Life</span>
          </h1>
          <p className="text-white mt-4 lg:text-lg">
            First-Ever Science-Backed Longevity Protocols for Your Furry Friends
          </p>
        </div>
        <div className="overflow-hidden flex-1 relative ">
          <Image
            src="/assets/images/home/banner.svg"
            alt="Banner image"
            width={800}
            height={800}
            draggable={false}
            className="w-full lg:h-[400px] 2xl:h-[600px]  2xl:w-fit object-cover object-right "
          />
          <ExploreButton targetId="pets-love" />
        </div>
      </div>
    </section>
  );
}
