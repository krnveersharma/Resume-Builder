import React from "react";

export function GridBackground({text}:{text:string}) {
  return (
    <div className="h-[30rem] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-[linear-gradient(109.6deg,_rgb(229,_68,_121)_11.2%,_rgb(157,_55,_206)_91.2%)] py-8">
        {text}
      </p>
    </div>
  );
}
