import Navigation from "./navigation";
function Header(): React.ReactElement {
  return (
    <header className="flex top-2 sm:top-0 fixed z-1 sm:flex justify-between items-center w-full lg:sticky lg:top-10">
      <img src="/shared/logo.svg" alt="logo" className="ml-5 w-10" />
     <div className="hidden lg:block border-b border-1 border-gray-700 w-[45%] relative left-10 z-10"></div>
     <div className=" lg:w-full"><Navigation /></div>
    </header>
  );
}
export default Header;
