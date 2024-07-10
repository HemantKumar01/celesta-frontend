import { images } from "@/constants";

const Header = () => {
  return (
    <div className="w-full bg-transparent px-6 py-2">
      <img
        src={images.logo}
        alt="Celesta"
        height={40}
        className="h-[40px] w-auto"
      />
    </div>
  );
};

export default Header;
