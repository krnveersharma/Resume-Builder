import Pricing from "@/modules/home/Pricing";
import { UseCase } from "@/modules/home/UseCase";
import Navbar from "@/shared/components/Navbar";
import { GridBackground } from "@/shared/ui/GridBackground";

export default function Home() {
  return (
    <main>
      <section>
        <Navbar/>
        <GridBackground text="Resume Web" />
        <Pricing/>
      </section>
    </main>
  );
}
