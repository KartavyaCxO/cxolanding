import Image from "next/image";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import CarouselSection from "./components/CarouselSection";
export default function Home() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col bg-[#f5f5f5]">
      <Navbar/>
    <HeroMap/>
    <CarouselSection/>
    <Footer/>
    </main>
  );
}



const HeroMap = () => {
return(
  <>
  <div className="overflow-hidden w-[100cvw] h-[90vh] relative bg-gradient-to-t from-[#FDF3D9] to-[#FFFFFF] z-[2] flex items-center justify-center flex-col">
      <Image src="/images/cross.svg" width={100} height={100} alt="cross" className="absolute top-40 right-0"  />
      <Image src="/images/hero1circle.svg" width={100} height={100} alt="circle 1" className="absolute top-0 left-0"  />
      <Image src="/images/hero1circle2.svg" width={200} height={200} alt="circle 2" className="absolute bottom-[-40px] right-1/2 transform translate-x-1/2"  />
      
      <span className="bg-gradient-to-r from-[#065D75] to-[#065D75]/85 bg-clip-text text-transparent font-semibold text-[5rem] leading-tight text-center z-[10]">
      Skip the suits! Access <br/>Consulting at $30/hour 
      </span>
      <span className="z-[10] text-center pt-8 text-2xl">
      Your CxO Online is a new-age global platform that provides on-demand online<br/> consulting services tailored to your business needs to help you succeed.<br/>
      Are you ready to unlock your business potential?
      </span>
      <div className="flex items-center gap-4 mt-8 text-2xl">
      <button className="bg-gradient-to-r from-[#065D75] to-[#065D75]/85 rounded-full px-8 py-4 text-white">Schedule a meeting</button>
      <button className="border-[#EBC43D] border-2 rounded-full px-8 py-4  text-[#065D75] ">Explore our services
      </button>
      </div>
  </div>
  <div className="w-[100cvw] h-[24vh] bg-white relative">
      <Image src="/images/businesses.svg" className="object-contain w-[80vw] h-auto" fill alt="businesses"  />
      </div>
  </>
)
}
