import Image from "next/image";
import React from "react";

export default async function Banner() {
  return (
    <div
      id="banner"
      style={{
        backgroundImage: "url('/assets/images/home/banner_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="pt-32 md:pt-0  md:min-h-screen flex flex-col items-center justify-end"
    >
      <div className="lg:max-w-[700px]  2xl:max-w-[900px] mx-auto text-center lg:mt-40 2xl:mt-[260px] px-4 lg:px-5"></div>
    </div>
  );
}
