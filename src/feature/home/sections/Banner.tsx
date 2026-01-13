import { Button } from "antd";
import Image from "next/image";
import React from "react";

export default async function Banner() {
  return (
    <section className="bg-[#F7EFDF]">
      <div
        id="banner"
        className="py-12  md:min-h-screen flex flex-col items-center justify-center  container"
      >
        <div className="">
          <Image
            src="/assets/images/home/banner-bg.svg"
            alt="Banner Background"
            width={800}
            height={800}
            className="w-full h-fit lg:w-[850px]"
          />
          <div className="text-center flex flex-col items-center justify-center">
            <h1 className="text-primary text-3xl lg:text-4xl 2xl:text-6xl font-medium max-w-[400px] 2xl:max-w-[600px] text-center">
              More time with the{" "}
              <span className="italic font-thin">pets you love</span>
            </h1>
            <Button className="mt-6 bg-[#320013]! hover:bg-[#320013]! border-0! text-white! font-medium! h-10! 2xl:h-12! rounded-full! lg:w-[200px]! lg:text-[16px]! tracking-wide!">
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
