"use client";

import { ChevronDown } from "lucide-react";
import Image from "next/image";
import React from "react";

function scrollIcon() {
  const element = document.getElementById("universities");
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  } else {
    console.warn("Scroll target element 'universities' not found");
  }
}

const Hero = () => {
  return (
    // change responsiveness
    <section className="h-[800px] lg:h-[1000px] bg-[#1B263B] flex flex-col items-center justify-center">
      <section className="w-[80%] lg:w-[50%] grid grid-cols-[.75fr_1fr] items-center justify-items-center">
        <div className="flex flex-col w-full h-full text-[#e0e1dd] justify-center pb-20">
          <h1 className="text-4xl lg:text-6xl pb-2">
            This is Mercury Marketplace
          </h1>
          <h3 className="lg:text-xl opacity-75">
            The smarter way for students to shop
          </h3>
        </div>
        <div className="w-full h-full">
          <Image
            src="/assets/astronaut-hero.png"
            alt="Astronaut"
            height={1000}
            width={1000}
          />
        </div>
      </section>
      <ChevronDown
        className="text-[#e0e1dd] animate-bounce cursor-pointer"
        onClick={() => {
          scrollIcon();
          console.log("clicked  ");
        }}
      />
    </section>
  );
};

export default Hero;
