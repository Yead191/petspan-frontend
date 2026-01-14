import { Button } from "antd";
import Image from "next/image";
import React from "react";

export default function CellularLevel() {
  return (
    <section
      id="cellular-level"
      className="py-10 lg:py-16 min-h-screen flex flex-center "
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center container">
        {/* left */}
        <div className="relative w-full  bg-[#E5E7EB] rounded-lg overflow-hidden flex items-center justify-center text-gray-500">
          <Image
            src={"/assets/images/home/cellular-img.webp"}
            alt="cellular-img"
            height={1000}
            width={1000}
            className="object-cover  h-full w-full "
          />
        </div>

        {/* right */}
        <div className="flex flex-col">
          <h2 className="text-primary text-4xl lg:text-5xl 2xl:text-6xl font-medium leading-tight mb-8">
            Pet longevity starts at the{" "}
            <span className="italic font-light">cellular level</span>
          </h2>

          <div className="space-y-6 text-primary/80 text-[16px] lg:text-[18px] leading-relaxed ">
            <p>
              At Petspan, we&apos;re dedicated to bringing cutting-edge
              longevity treatments to pets by addressing aging at its source—the
              cellular level. Petspan&apos;s longevity protocol is designed not
              just to extend the years we have with our pets but to ensure those
              years are healthy and vibrant.
            </p>
            <p>
              By targeting the root causes of aging, we can create more healthy
              years together with our pets, allowing us to make memories that
              last a lifetime.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 mt-12">
            <Button className="bg-[#320013]! hover:bg-[#320013]! border-0! text-white! font-medium! h-12! px-8! rounded-full! text-[16px]! tracking-wide!">
              Get started
            </Button>
            <Button className="bg-transparent! hover:bg-transparent! border-[#320013]! text-primary! font-medium! h-12! px-8! rounded-full! text-[16px]! tracking-wide!">
              Learn more
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
