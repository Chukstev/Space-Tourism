import { useState, useEffect } from "react";
import Header from "../header";
import { TechData as techDataRaw } from "./TechnologyData";

interface TechItem {
  id: number | string;
  title: string;
  description: string;
  imageLandscape: string;
  imagePortrait: string;
}

const TechData: TechItem[] = techDataRaw;

function Technology() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TechData.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [TechData.length]);
  return (
    <main className="bg-[url('/technology/background-technology-mobile.jpg')] sm:bg-[url('/technology/background-technology-tablet.jpg')] lg:bg-[url('/technology/background-technology-desktop.jpg')] bg-cover bg-center bg-no-repeat pt-10 min-h-screen">
      <Header />
      <div className="w-full">
        <h2 className=" w-full text-center sm:text-left text-white pt-16 sm:px-28 lg:pl-60 text-md md:text-lg lg:text-2xl ">
          <span className="text-gray-400">03</span> SPACER LAUNCH 101
        </h2>
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex flex-col lg:flex-row lg:justify-evenly  items-center space-y-4 lg:pl-60">
            <div className="w-auto flex gap-5 justify-center items-center lg:flex-col order-2 lg:order-1 my-6">
              {TechData.map((tech: TechItem, index: number) => (
                <span
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-10 w-10 sm:w-12 sm:h-12 lg:w-20 lg:h-20 rounded-full text-center flex justify-center border items-center ${
                    index === activeIndex ? "bg-white" : "text-white"
                  }`}
                >
                  {tech.id}
                </span>
              ))}
            </div>
            <div className="order-3 lg:order-2 w-full sm:w-[600px] lg:w-[491px] mx-auto space-y-4">
              <h2 className="text-gray-400 text-center lg:text-left text-2xl lg:text-3xl">THE TERMINOLOGY...</h2>
              <h1 className="text-white text-center lg:text-left text-3xl lg:text-5xl">{TechData[activeIndex].title}</h1>
              <p className="text-[#D0D6F9] text-center text-lg lg:text-left p-4 space-y-3 lg:p-0">
                {TechData[activeIndex].description}
              </p>
            </div>
            <div className="w-full lg:w-auto order-1 lg:order-3">
                <img src={TechData[activeIndex].imageLandscape} alt={TechData[activeIndex].title} className="lg:hidden w-full" />
                <img src={TechData[activeIndex].imagePortrait} alt={TechData[activeIndex].title} className="hidden lg:block" />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Technology;
