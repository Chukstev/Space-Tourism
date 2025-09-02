export interface TechItem {
  id: string;
  title: string;
  description: string;
  imagePortrait: string;
  imageLandscape: string;
}

export const TechData: TechItem[] = [
  {
    id: "1",
    title: "LAUNCH VEHICLE",
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    imagePortrait: "/technology/image-launch-vehicle-portrait.jpg",
    imageLandscape: "/technology/image-launch-vehicle-landscape.jpg",
  },
  {
    id: "2",
    title: "SPACEPORT",
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth's rotation for launch.",
    imagePortrait: "/technology/image-spaceport-portrait.jpg",
    imageLandscape: "/technology/image-spaceport-landscape.jpg",
  },
  {
    id: "3",
    title: "SPACE CAPSULE",
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    imagePortrait: "/technology/image-space-capsule-portrait.jpg",
    imageLandscape: "/technology/image-space-capsule-landscape.jpg",
  }
]