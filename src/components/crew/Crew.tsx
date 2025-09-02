import { useState, useEffect } from "react";
import Header from "../header";
import { CrewMembers as crewMembersRaw } from "./CrewData";

interface CrewMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

const CrewMembers: CrewMember[] = crewMembersRaw;

function Crew() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CrewMembers.length);
    }, 15000);
    return () => clearInterval(interval);
  }, [CrewMembers.length]);

  return (
    <main className="bg-[url('/crew/background-crew-mobile.jpg')] sm:bg-[url('/crew/background-crew-tablet.jpg')] lg:bg-[url('/crew/background-crew-desktop.jpg')] bg-cover bg-center bg-no-repeat pt-10 min-h-screen">
      <Header />
      <div className="lg:w-3/4 mx-auto px-5 ">
        <h2 className=" w-full text-center sm:text-left text-white pt-16 sm:px-28 text-md md:text-lg lg:text-2xl ">
          <span className="text-gray-400">02</span> MEET YOUR CREW
        </h2>
        <div className="w-full flex justify-center items-center">
          <div className="w-full flex justify-center items-center">
            <div className="w-full flex flex-col justify-center items-center lg:flex-row lg:justify-between px-28">
              {" "}
              <div className="w-[327px] sm:w-[512px] lg:w-[529px] space-y-4">
                <p className="text-gray-600 mt-16 text-center lg:text-left text-2xl sm:text-3xl lg:text-4xl">
                  {CrewMembers[activeIndex].role}
                </p>
                <h1 className="text-white text-center lg:text-left text-2xl sm:text-4xl lg:text-5xl">
                  {CrewMembers[activeIndex].name}
                </h1>
                <p className="text-[#D0D6F9] text-center lg:text-justify px-6 sm:px-0">
                  {CrewMembers[activeIndex].bio}
                </p>

                <div className="flex justify-center mt-6 lg:justify-start lg:items-end lg:h-52">
                  {CrewMembers.map((_, index: number) => (
                    <span
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`h-3 w-3 rounded-full mx-4 cursor-pointer inline-block ${
                        index === activeIndex ? "bg-white" : "bg-gray-500"
                      }`}
                    ></span>
                  ))}
                </div>
              </div>
              <div className="w-[250px] sm:w-[350px] lg:w-[450px] mt-5">
                <img
                  src={CrewMembers[activeIndex].image}
                  alt={CrewMembers[activeIndex].id}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Crew;
