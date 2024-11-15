// Library Import
import Image from 'next/image'

// Components Import
import EllipseGradient from '../EllipseGradient'

// Assets Import
import LeftInfo from "@/public/home/LeftInfo.png"
import RightInfo from "@/public/home/RightInfo.png"
import ShowcaseImg from "@/public/home/Showcase.png"

const Showcase = () => {
  return (
    <div className="wrapper w-full text-center flex flex-col items-center justify-center gap-y-12 relative">
      <p className="text-xl text-center">AI-powered multichannel chatbot designed for e-commerce <br/> businesses to enhance customer acquisition and provide seamless 24/7 support.</p>
      <Image 
        src={ShowcaseImg}
        alt="Product Showcase"
        width={450}
        height={450}
      />
      <EllipseGradient 
        className="right-[500px]"
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
  )
}

export default Showcase