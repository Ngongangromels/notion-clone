"use client";
import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex items-center">
      <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
        <Image
          src="/Documents-pana.png"
          fill
          className="object-contain"
          alt="Documents"
        />
      </div>
      <div className="relative h-[400px] w-[400px] hidden md:block">
        <Image 
           src="/reading.png"
           fill
           className="object-content"
           alt="reading"
        />
      </div>
    </div>
  );
};
