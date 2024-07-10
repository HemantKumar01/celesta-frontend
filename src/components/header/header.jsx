import { images } from "@/constants";

const Header = () => {
  return (
    <div className="absolute top-0 left-0 w-full bg-transparent px-6 py-2 h-[60px]">
      <img src={images.logo} alt="Celesta" className="h-[40px] w-auto" />
    </div>
  );
};

export default Header;
