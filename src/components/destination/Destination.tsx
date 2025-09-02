import Header from "../header";
import { useState, useEffect } from "react";
import { DestinationData as destinationDataRaw } from "./DestinationData";

interface DestinationItem {
  id: string;
  title: string;
  description: string;
  image: string;
  distance: string;
  travel: string;
}

const DestinationData: DestinationItem[] = destinationDataRaw;

function Destination(): React.ReactElement {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % DestinationData.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [DestinationData.length]);
  return (
    <main className="bg-[url('/destination/background-destination-mobile.jpg')] sm:bg-[url('/destination/background-destination-tablet.jpg')] lg:bg-[url('/destination/background-destination-desktop.jpg')] bg-cover bg-center bg-no-repeat pt-10 min-h-screen">
      <Header />
      <div className="lg:w-3/4 mx-auto ">
        <h2 className="text-center sm:text-left text-white pt-16 sm:px-28 text-md md:text-lg lg:text-2xl">
          <span className="text-gray-400">01</span> PICK YOUR DESTINATION
        </h2>
        <div className="w-full lg:py-10">
          <div className="flex flex-col gap-20 justify-center items-center lg:flex-row sm:justify-evenly pt-10 px-6">
            <div>
              <img
                src={DestinationData[activeIndex].image}
                alt={DestinationData[activeIndex].id}
                className="w-52 sm:w-80 lg:w-96"
              />
            </div>
            <div className="w-80 sm:w-[512px] lg:w-96 pb-10">
              <div>
                <ul className="flex justify-center gap-6 items-center">
                  {DestinationData.map((dest: DestinationItem, index: number) => (
                    <li
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`uppercase tracking-wider ${
                        index === activeIndex
                          ? "border-b-2 border-white text-white"
                          : ""
                      } pb-2 text-[#D0D6F9]`}
                    >
                      {dest.title}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h1 className="text-7xl py-3 text-white text-center">
                  {DestinationData[activeIndex].title}
                </h1>
                <p className="text-[#D0D6F9] text-center lg:text-left px-5 sm:px-0">
                  {DestinationData[activeIndex].description}
                </p>
                <hr className="mt-10" />
                <div className="flex flex-col gap-10 justify-center items-center sm:flex-row sm:justify-around lg:gap-20 mt-10">
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] text-sm text-center sm:text-left">AVG. DISTANCE</p>
                    <h2 className="text-white text-2xl">
                      {DestinationData[activeIndex].distance}
                    </h2>
                  </div>
                  <div className="space-y-2">
                    <p className="text-[#D0D6F9] text-sm text-center sm:text-left">EST. TRAVEL TIME</p>
                    <h2 className="text-white text-2xl">
                      {DestinationData[activeIndex].travel}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Destination;
