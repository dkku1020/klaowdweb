import { Navbar } from "../components/Navbar";
import Hero from "../components/Hero";
import Catalogue from "@/src/components/Catalogue";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-white flex flex-col items-center text-black">
      <div>
        <Navbar />
        <Hero />
        <Catalogue />
      </div>
    </div>
  );
}
