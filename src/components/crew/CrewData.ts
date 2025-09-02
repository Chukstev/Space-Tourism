export interface CrewMember {
  id: string;
  role: string;
  name: string;
  bio: string;
  image: string;
}

export const CrewMembers: CrewMember[] = [
  {
    id: "douglas-hurley",
    role: "COMMANDER",
    name: "DOUGLAS HURLEY",
    bio: "Douglas Gerald Hurley is an American engineer, retired Marine Corps officer and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    image: "/crew/image-douglas-hurley.png",
  },
  {
    id: "mark-shuttleworth",
    role: "MISSION SPECIALIST",
    name: "MARK SHUTTLEWORTH",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    image: "/crew/image-mark-shuttleworth.png",
  },
  {
    id: "victor-glover",
    role: "PILOT",
    name: "VICTOR GLOVER",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    image: "/crew/image-victor-glover.png",
  },
  {
    id: "anousheh-ansari",
    role: "FLIGHT ENGINEER",
    name: "ANOUSHEH ANSARI",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    image: "/crew/image-anousheh-ansari.png",
  },
];
