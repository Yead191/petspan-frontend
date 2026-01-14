import React from "react";
import PetsWeLove from "./sections/PetsWeLove";
import Banner from "./sections/banner/Banner";
import CellularLevel from "./sections/CellularLevel";

export default async function HomePage() {
  return (
    <section>
      <Banner />
      <CellularLevel />
      <PetsWeLove />
    </section>
  );
}
