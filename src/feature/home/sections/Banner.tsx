import { Button } from "antd";
import Image from "next/image";
import React from "react";

export default async function Banner() {
  return (
    <section className="bg-[#F7EFDF]">
      <div
        id="banner"
        className="pt-12 md:pt-0  md:min-h-screen flex flex-col items-center justify-center  container"
      >
        <div className="">
          <Image
            src="/assets/images/home/banner-bg.svg"
            alt="Banner Background"
            width={800}
            height={800}
            className="w-full h-fit"
          />
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-primary text-3xl lg:text-4xl 2xl:text-6xl font-medium max-w-[600px] text-center">
              More time with the{" "}
              <span className="italic font-thin">pets you love</span>
            </h1>
            <Button className="mt-6 bg-[#320013]! hover:bg-[#320013]! text-white! font-medium! h-10! lg:h-12! rounded-full! 2xl:w-[200px]! lg:text-[16px]! tracking-wide!">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
