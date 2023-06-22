import React from "react";
import Hero from "./(components)/Hero";
import Stepper from "./(components)/Stepper";
import PopularProducts from "./(components)/PopularProducts";
import WhatWeOffer from "./(components)/WhatWeOffer";
import FAQ from "./(components)/FAQ";

const Home = () => {
  return (
    <main className="lg:mt-10 ">
      <Hero />
      <Stepper />
      <PopularProducts />
      <WhatWeOffer />
      <FAQ />
    </main>
  );
};

export default Home;
