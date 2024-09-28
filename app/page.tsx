import Image from "next/image";
import RobotPad from "@/public/home/RobotPad.png"
import EllipseGradient from "@/public/EllipseGradient.png"
import Showcase from "@/public/home/Showcase.png"
import LeftInfo from "@/public/home/LeftInfo.png"
import RightInfo from "@/public/home/RightInfo.png"

export default function Home() {
  return (
    <div className="wrapper flex flex-col items-center gap-y-16">
      
      {/* HERO */}
      <div className="mt-[80px] w-full text-center h-[500px] flex flex-col items-center justify-center gap-y-4 relative">
        <h3 className="text-4xl font-bold font-gotham">Grow <span className="text-gradient">Smart</span>, Sell More</h3>
        <h5 className="text-xl">Unlock the power of AI with Purple-Box, the multichannel chatbot <br/> designed for e-commerce growth.</h5>
        <Image 
          src={RobotPad}
          alt="RobotPad"
          width={500}
          height={500}
        />
        <Image 
          src={EllipseGradient}
          alt="Ellipse Gradient"
          className="absolute -z-20"
        />
        <div className="w-full max-w-md rounded-full background-gradient shadow-royal-purple h-[4px] my-4" />
      </div>

      {/* SHOWCASE */}
      <div className="w-full text-center flex flex-col items-center justify-center gap-y-12 relative">
        <p className="text-xl text-center">AI-powered multichannel chatbot designed for e-commerce <br/> businesses to enhance customer acquisition and provide seamless 24/7 support.</p>
        <Image 
          src={Showcase}
          alt="Product Showcase"
          width={450}
          height={450}
        />
        <Image 
          src={EllipseGradient}
          alt="Ellipse Gradient"
          className="absolute left-[500px] -z-20"
        />
        <Image 
          src={RightInfo}
          alt="Left Info"
          className="absolute translate-x-[250px] w-[225px] translate-y-[-25px]"
        />
      </div>

      {/* TRANSOFRM ECOMMERCE */}
      <div className="w-full text-center flex flex-col items-center justify-center gap-y-12 relative">
        <h5 className="font-gotham text-4xl font-bold">Transform <span className="text-gradient">Your E-Commerce</span> With Purple Box</h5>
      </div>

    </div>
  );
}
