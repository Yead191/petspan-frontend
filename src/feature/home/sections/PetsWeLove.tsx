import { Button } from "antd";
import { Check } from "lucide-react";
import Image from "next/image";
import React from "react";

const features = [
  {
    title: "Expert Longevity Vets",
    description:
      "Petspan vets specialize in the latest pet longevity treatments.",
  },
  {
    title: "Easy to Access",
    description:
      "Convenient, low-stress telemedicine visits for you and your pet.",
  },
  {
    title: "Personalized Treatments",
    description: "Tailored treatments to maximize your pet’s healthy lifespan.",
  },
];

export default async function PetsWeLove() {
  return (
    <section className="bg-[#F7EFDF]">
      <div className="py-16 lg:py-24 md:min-h-screen flex flex-col items-center justify-center container">
        <div className="text-center flex flex-col items-center justify-center pt-10 lg:pt-20">
          <h1 className="text-primary text-4xl 2xl:text-6xl font-medium max-w-[400px] 2xl:max-w-[600px] text-center">
            More time with the{" "}
            <span className="italic font-thin">pets you love</span>
          </h1>
          <Button className="mt-6 lg:mt-12 bg-[#320013]! hover:bg-[#320013]! border-0! text-white! font-medium! h-10! 2xl:h-12! rounded-full! lg:w-[200px]! lg:text-[16px]! tracking-wide!">
            Get Started
          </Button>
        </div>
        <div className="mt-4 lg:mt-10 ">
          <Image
            src="/assets/images/home/pets-love.svg"
            alt="Banner Background"
            width={800}
            height={800}
            draggable={false}
            className="w-full h-fit lg:w-[850px] 2xl:w-full object-contain"
          />
        </div>

        {/* Dynamic Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mt-12 w-full">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-start text-left">
              <div className="bg-primary rounded-full p-2 mb-6 flex items-center justify-center">
                <Check className="text-white w-5 h-5" />
              </div>
              <h3 className="text-primary text-xl lg:text-2xl font-semibold mb-3">
                {feature.title}
              </h3>
              <p className="text-primary/80 text-[15px] lg:text-[16px] leading-relaxed lg:max-w-[300px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
