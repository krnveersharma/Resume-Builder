import { UseCase } from "@/modules/home/UseCase";
import { GridBackground } from "@/shared/ui/GridBackground";

export default function Home() {
  return (
    <section className="h-full w-full md:pt-44 mt-[-70px] relative flex items-center justify-center flex-col ">
      <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#161616_1px,transparent_1px),linear-gradient(to_bottom,#161616_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)] -z-10" />
      <p className="text-center">Make your own Resume Website</p>
      <div className="bg-[radial-gradient(732px_at_96.2%_89.9%,_rgb(70,66,159)_0%,_rgb(187,43,107)_92%)] text-transparent bg-clip-text relative">
        <h1 className="text-9xl font-bold text-center md:text-[150px]">
          Resume Website Builder
        </h1>
      </div>
      
    </section>
  );
}
