// Components Imports
import Hero from "@/components/home/Hero";
import Showcase from "@/components/home/Showcase";
import Transform from "@/components/home/Transform";
import FreeTrial from "@/components/home/FreeTrial";
import ClientSay from "@/components/home/ClientSay";
import SeeInAction from "@/components/home/SeeInAction";
import WhoWeServe from "@/components/home/WhoWeServe";

export default function Home() {
  return (
    <div className="bg-[#1a0730] relative flex flex-col items-center gap-y-16">
      <Hero />
      <Showcase />
      <Transform />
      <FreeTrial />
      <ClientSay />
      {/* <SeeInAction /> */}
      <WhoWeServe />
      <div className="mb-10" />
    </div>
  );
}
