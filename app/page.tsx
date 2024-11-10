import Image from "next/image";
import RobotPad from "@/public/home/RobotPad.png"
import EllipseGradient from "@/public/EllipseGradient.png"
import Showcase from "@/public/home/Showcase.png"
import LeftInfo from "@/public/home/LeftInfo.png"
import RightInfo from "@/public/home/RightInfo.png"
import { transformWithPurpleBoxData, whoWeServeData } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { customerTestimonialsData } from '@/lib/constants'
import Dummy from '@/public/Purple-Box-Logo.png'

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-y-16">
      
      {/* HERO */}
      <div className="wrapper mt-[120px] w-full text-center h-[500px] flex flex-col items-center justify-center gap-y-4 relative">
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
      <div className="wrapper w-full text-center flex flex-col items-center justify-center gap-y-12 relative">
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
          alt="Right Info"
          className="absolute translate-x-[250px] w-[250px] translate-y-[-10px]"
        />
        <Image 
          src={LeftInfo}
          alt="Left Info"
          className="absolute translate-x-[-250px] w-[250px] translate-y-[100px]"
        />
      </div>

      {/* TRANSOFRM ECOMMERCE */}
      <div className="wrapper w-full text-center flex flex-col items-center justify-center gap-y-12 relative">
        <h5 className="font-gotham text-4xl font-bold">Transform <span className="text-gradient">Your E-Commerce</span> With Purple Box</h5>
        <ul className="flex flex-wrap justify-center gap-8">
          {transformWithPurpleBoxData.map((item, index) => {
            const Icon = item.image

            return (
              <li key={index} className="max-w-[350px] border-2 border-white rounded-[25px] p-4 flex flex-col items-center gap-y-4">
                <Icon className="w-8 h-8" />
                <div className="flex flex-col items-center gap-y-2">
                  <p className="text-xl">{item.title}</p>
                  <p>{item.description}</p>
                </div>
              </li> 
            )
          })}
        </ul>
      </div>

      {/* FREE TRIAL */}
      <div className="wrapper w-full flex flex-col items-center gap-y-12 my-36">
        <h5 className="font-gotham text-4xl font-bold">Take the Next Step with <span className="text-gradient">Purple Box</span></h5>
          <div className="flex items-center justify-center gap-x-8 font-gotham">
            <Button variant={"default"} className="background-gradient">
              Get Started
            </Button>
            <Button variant={"outline"} className="border-purple-400 text-purple-400">
              Schedule A Demo
            </Button>
            <Button variant={"secondary"}>
              Learn More
            </Button>
          </div>
      </div>

      {/* CLIENT SAY */}
      <div className="flex flex-col items-center gap-y-12 py-24 bg-Royal-Purple/50 w-full h-full shadow-lg">
          <h5 className="font-gotham text-4xl font-bold">What Our Clients Say</h5>
          <ul className="max-w-7xl w-full flex justify-between gap-8">
            {customerTestimonialsData.map((item, index) => {
              return (
                <div key={index} className="p-4 border-white border-2 rounded-xl flex flex-col items-start gap-y-4">
                  <div className="flex gap-x-2 items-center">
                    <Image 
                      src={Dummy}
                      alt={item.name}
                      className="w-[50px] h-[50px] object-cover"
                    />
                    <div className="text-start">
                      <p className="font-bold">{item.name}</p>
                      <p className="text-sm text-white/50">{item.position} @ {item.company}</p>
                    </div>
                  </div>
                  <p className="text-white text-center">&quot;{item.quote}&quot;</p>
                </div>
              )
            })}
          </ul>
      </div>

      {/* SEE IN ACTION */}
      <div className="flex flex-col items-center gap-y-12">
        <h5 className="font-gotham text-4xl font-bold">See <span className="text-gradient">Purple-Box</span> in Action</h5>
        <div>
          <Image 
            src={RobotPad}
            alt="RobotPad"
            width={500}
            height={500}
          />
        </div>
      </div>

      {/* WHO WE SERVE */}
      <div className="flex flex-col items-center gap-y-12">
        <h5 className="font-gotham text-4xl font-bold text-gradient">Who We Serve</h5>
        <ul className="max-w-7xl w-full flex justify-between gap-8">
            {whoWeServeData.map((item, index) => {
              return (
                <div key={index} className="p-4 border-white border-2 rounded-xl flex flex-col items-start gap-y-4 text-white">
                  <p>{item.profile}</p>
                  <p>{item.description}</p>
                </div>
              )
            })}
          </ul>
      </div>

      <div className="mb-20" />
    </div>
  );
}
