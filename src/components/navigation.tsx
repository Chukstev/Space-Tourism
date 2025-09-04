import { NavLink } from "react-router-dom";
import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

function Navigation() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div>
      {/* desktop navigation */}
      <nav className="hidden sm:flex  bg-gradient-to-r from-gray-900/15 to-blue-500/10 backdrop-blur-xl py-8 px-10 lg:pl-20 relative z-0">
        <ul className="flex  flex-nowrap gap-4 md:gap-6 lg:gap-10 text-white">
          <li>
            <NavLink
              to={"/"}
              className={({ isActive }: { isActive: boolean }) =>
                `text-base cursor-pointer py-8 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              <span className="font-semibold">00</span>{" "}
              <span className="font-thin">HOME</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/destination"}
              className={({ isActive }: { isActive: boolean }) =>
                `text-base cursor-pointer py-8 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              <span className="font-semibold">01</span>{" "}
              <span className="font-thin">DESTINATION</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/crew"}
              className={({ isActive }: { isActive: boolean }) =>
                `text-base cursor-pointer py-8 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              <span className="font-semibold">02</span>{" "}
              <span className="font-thin">CREW</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to={"/technology"}
              className={({ isActive }: { isActive: boolean }) =>
                `text-base cursor-pointer py-8 ${
                  isActive ? "border-b-2 border-white" : ""
                }`
              }
            >
              <span className="font-semibold">03</span>{" "}
              <span className="font-thin">TECHNOLOGY</span>
            </NavLink>
          </li>
        </ul>
      </nav>
      {/* Mobile menu button */}
      <div className="sm:hidden flex justify-end p-6">
        <button onClick={() => setIsOpen(true)}>
          <FiMenu className="text-white text-3xl" />
        </button>
      </div>
      {/* Mobile slide-in Menu */}

      
        <div className={`fixed top-0 right-0 w-2/3 h-full bg-gray-900/40 backdrop-blur-lg text-white transform transition-transform duration-500 ease-in-out z-50 ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          {/* close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="mr-6 mt-8 float-right"
          >
            <FiX className="text-white text-3xl" />
          </button>

          <ul className="flex flex-col items-stretch gap-6 mt-20 pl-5 pt-5 w-full text-white">
            <li className="flex-1">
              <NavLink
                to={"/"}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-base md:text-sm lg:text-base cursor-pointer py-1 block ${
                    isActive ? "border-r-2 border-white" : ""
                  }`
                }
              >
                <span className="font-semibold">00</span>{" "}
                <span className="font-thin">HOME</span>
              </NavLink>
            </li>
            <li className="flex-1">
              <NavLink
                to={"/destination"}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-base cursor-pointer block py-1 ${
                    isActive ? "border-r-2 border-white" : ""
                  }`
                }
              >
                <span className="font-semibold">01</span>{" "}
                <span className="font-thin">DESTINATION</span>
              </NavLink>
            </li>
            <li className="flex-1">
              <NavLink
                to={"/crew"}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-base md:text-sm lg:text-base cursor-pointer py-1 block ${
                    isActive ? "border-r-2 border-white" : ""
                  }`
                }
              >
                <span className="font-semibold">02</span>{" "}
                <span className="font-thin">CREW</span>
              </NavLink>
            </li>
            <li className="flex-1">
              <NavLink
                to={"/technology"}
                className={({ isActive }: { isActive: boolean }) =>
                  `text-base md:text-sm lg:text-base cursor-pointer py-1 block ${
                    isActive ? "border-r-2 border-white" : ""
                  }`
                }
              >
                <span className="font-semibold">03</span>{" "}
                <span className="font-thin">TECHNOLOGY</span>
              </NavLink>
            </li>
          </ul>
        </div>
      
    </div>
  );
}
export default Navigation;
