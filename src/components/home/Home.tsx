import { Link } from "react-router-dom";
import Header from "../header";

function Home(): React.ReactElement {
  return (
    <main className="bg-[url('/home/background-home-mobile.jpg')] sm:bg-[url('/home/background-home-tablet.jpg')] lg:bg-[url('/home/background-home-desktop.jpg')] bg-cover bg-center bg-no-repeat min-h-screen  ">
      <Header />
      <div className="flex justify-center py-28 items-center sm:py-64 px-6 lg:w-3/4 mx-auto">
        {" "}
        <div className="flex flex-col gap-20 items-center w-full lg:flex-row sm:justify-around">
          <div className="w-full text-justify sm:w-[512px] lg:w-96 line-height-[32px] space-y-6">
            {" "}
            <p className="text-gray-300">SO, YOU WANT TO TRAVEL TO</p>
            <h1 className="text-white text-8xl">SPACE</h1>
            <p className="text-gray-300">
              Let's face it, if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax, because we'll give you a truly out
              of this world experience!
            </p>
          </div>
          <div className="h-[auto] flex justify-center items-center">
            <div className="w-[220px] h-[220px] border-2 rounded-full flex justify-center items-center text-center bg-white">
              <Link to={"/destination"}>EXPLORE</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default Home;
