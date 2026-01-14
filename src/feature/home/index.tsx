import React from "react";
import PetsWeLove from "./sections/PetsWeLove";
import Banner from "./sections/banner/Banner";

export default async function HomePage() {
  return (
    <section>
      <Banner />
      <PetsWeLove />
    </section>
  );
}
