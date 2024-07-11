import { images } from "@/constants";

const Header = () => {
  return (
    <div className="fixed top-0 left-0 w-full bg-transparent px-6 py-2 h-[60px] flex justify-between">
      <img
        src={images.logo}
        alt="Celesta"
        className="h-[40px] w-auto cursor-pointer"
      />
      <div className="flex justify-evenly min-w-[50%] items-center font-medium">
        <a href="/" className="cursor-pointer">
          Home
        </a>
        <a href="/">The Fest</a>
        <a href="/events" className="cursor-pointer">
          Events
        </a>
        <button  className="cursor-pointer px-8 py-[3px] border-white border-solid border-[1px] rounded-md">
          Login
        </button>
        <button  className="bg-white text-black cursor-pointer px-8 py-[3px] border-white border-solid border-[1px] rounded-md ">
          Register
        </button>
      </div>
    </div>
  );
};

export default Header;
