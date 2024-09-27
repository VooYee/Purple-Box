import Image from "next/image";
import RobotPad from "@/public/home/RobotPad.png"
import EllipseGradient from "@/public/EllipseGradient.png"

export default function Home() {
  return (
    <div className="wrapper flex flex-col items-center gap-y-4">
      
      {/* HERO */}
      <div className="mt-[80px] w-full text-center h-[500px] flex flex-col items-center justify-center gap-y-4 relative">
        <h3 className="text-4xl font-bold font-gotham">Grow <span className="text-gradient">Smart</span>, Sell More</h3>
        <h5 className="text-xl">Unlock the power of AI with Purple-Box, the multichannel chatbot <br/> designed for e-commerce growth.</h5>
        <Image 
          src={RobotPad}
          alt="RobotPad"
          width={450}
          height={450}
        />
        <Image 
          src={EllipseGradient}
          alt="Ellipse Gradient"
          className="absolute -z-20"
        />
      </div>
    </div>
  );
}
