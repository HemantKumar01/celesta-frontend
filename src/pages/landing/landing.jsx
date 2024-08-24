import "./landing.css";
import Header from "@/components/header/header";
import SkewButton from "@/components/SkewButton";
import { Quote } from "lucide-react";

const Triangle = ({ style }) => {
  return (
    <div
      className="triangle absolute left-0 bottom-[-2px]  w-[100px] h-[100px] bg-[#301C08]"
      style={{ ...style, clipPath: "polygon(0% 0%, 0% 100%, 100% 100%)" }}
    ></div>
  );
};

const HeroButtons = () => {
  return (
    <div className="relative margin-auto w-[300px] sm:w-[550px] h-min max-w-[95vw] ">
      <SkewButton
        className="absolute left-0 top-0 w-[300px] hover:w-[335px]"
        style={{
          background: "linear-gradient(90deg, #FFB405 -7.98%, #E655CA 122.26%)",
        }}
      >
        Login
      </SkewButton>
      <SkewButton
        className="absolute left-0 sm:left-auto sm:right-0 top-[70px] sm:top-0 w-[300px] hover:w-[335px]"
        style={{
          background: "linear-gradient(90deg, #E655CA 0%, #5090FD 100%)",
        }}
      >
        Register
      </SkewButton>
    </div>
  );
};

const HeroSection = ({ children }) => {
  return (
    <div
      className={`relative w-full h-screen overflow-hidden bg-[url('/hero_image.png')] bg-cover bg-top bg-no-repeat sm:bg-cover sm:bg-[center_top_20%]`}
    >
      <div
        className="w-full h-full relative bg-contain"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.00) 49.8%, rgba(23, 6, 28, 0.00) 90%, #2F0C39 100%), rgba(0, 0, 0, 0.25)",
        }}
      >
        <div className="main-content w-full max-w-[90vw] absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[-50%]">
          <div className="text flexbox flex-col">
            <div className="celesta font-medium text-l md:text-3xl tracking-[0.8ch] text-white text-center">
              CELESTA
            </div>
            <div
              className="theme gradient-text text-5xl md:text-8xl font-bold text-center min-h-[1.1em]"
              style={{
                backgroundImage:
                  "linear-gradient( 90deg, #ffac88 1.08%, #d197ff 47.47%,#8c8aff 94.79% )",
              }}
            >
              Exploring The Epochs
            </div>
            <HeroButtons></HeroButtons>
          </div>
        </div>
      </div>
      <div
        className="scrollDown cursor-pointer absolute bottom-10 left-[50%] translate-x-[-50%] w-10 h-16 border-2 border-white rounded-full p-2"
        onClick={() => {
          document.querySelector(".EpochDescription").scrollIntoView();
        }}
      >
        <div className="ball w-full aspect-square bg-white rounded-full"></div>
      </div>
      {children}
    </div>
  );
};
const EpochsDescription = () => {
  return (
    <div className="EpochDescription bg-[#2F0C39] p-5 md:p-20 py-40  text-[1.65rem] leading-[1.6] w-full">
      <blockquote className="relative bg-[rgba(204,94,255,0.08)] border-l-[20px] border-[#CC5EFF] p-5 md:p-10 pl-[calc(30px+2.5rem) text-[#E073FF] max-w-[1400px] m-auto py-10 md:py-16">
        <Quote
          className="rotate-180 absolute left-2 md:left-10 top-10 md:top-16"
          size={75}
          strokeWidth={0.5}
        ></Quote>
        <p className="mt-20 ml-3 md:ml-20 md:mt-7">
          An epoch is a historical period defined by significant technological
          advancements. Exploring these epochs enhances understanding of past
          and present developments, societal shifts, and cultural influences,
          informing future endeavors.
        </p>
      </blockquote>
    </div>
  );
};
const AncientEpoch = () => {
  return (
    <>
      <div className="hidden md:block min-h-[min(120vh,100vw)] w-screen bg-[#FAE5C3] p-10 py-20 relative overflow-hidden z-10">
        <div className="background absolute right-0 bottom-0 z-10 h-min  w-screen overflow-hidden ">
          <img
            src="/past_bg.png"
            alt="castle from past"
            className="w-screen h-auto object-cover object-right-bottom"
          />
        </div>
        <div className="planet absolute bottom-0 left-0 z-30">
          <img
            src="/planet_past.png"
            alt="planet from past"
            className="w-[400px]"
          />
        </div>
        <div className="content p-5 max-w-[700px] relative z-50 mt-20 lg:max-w-[50vw]">
          <div
            className="spaceship absolute right-0 top-0"
            style={{ transform: "translate(30%, -40%)" }}
          >
            <img
              src="/spaceship_past.png"
              alt="Spaceship from Past"
              className="w-[400px]"
            />
          </div>
          <h1
            className="font-extrabold text-[#301C08] pl-5 rounded-lg py-3 text-wipe-in-parts"
            style={{
              fontFamily: "Lato, Poppins, sans-serif",
              borderLeft: "10px solid #301C08",
              fontSize: "max(3.4vw, 3rem)",
            }}
          >
            Ancient Epoch
          </h1>
          <p
            className="text-[#301C08] font-regular mt-10 text-wipe-in-parts"
            style={{ lineHeight: "1.5", fontSize: "max(1.7vw, 1.5rem)" }}
          >
            This is the vintage era of technological advancement. These
            gear-driven robots, composed of gears themselves, have mastered and
            enthusiastically experiment with every new concept they discover.
          </p>
        </div>
      </div>
    </>
  );
};

const AncientMobile = () => {
  return (
    <>
      <div className="block md:hidden  w-screen bg-[#FAE5C3]  pt-20 relative">
        <h1
          className="font-extrabold py-3 bg-clip-text text-center relative text-wipe-in-parts"
          style={{
            fontFamily: "Lato, Poppins, sans-serif",
            fontSize: "max(3vw, 2.3rem)",
            background:
              "linear-gradient(271deg, #2F1C0B 0.46%, #B27632 99.47%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Ancient Epoch
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[5px] bg-[#301C08] rounded-lg"></div>
        </h1>
        <div className="max-w-full w-full h-auto overflow-hidden mt-10 relative">
          <img src="/ancient-mobile.png" alt="" className="w-full" />
          <Triangle style={{ background: "#301C08" }}></Triangle>
        </div>
        <div className="content w-full p-10 py-20 bg-[#301C08] text-center text-[#F5E2C1] text-lg relative text-wipe-in-parts">
          This is the vintage era of technological advancement. These
          gear-driven robots, composed of gears themselves, have mastered and
          enthusiastically experiment with every new concept they discover.
          <Triangle style={{ background: "#512667" }}></Triangle>
        </div>
      </div>
    </>
  );
};

const ModernEpoch = () => {
  return (
    <>
      <div className="hidden md:block min-h-[min(120vh,100vw)] w-screen bg-[#FFE8FF] p-10 py-20 relative overflow-hidden z-100">
        <div className="background absolute right-0 bottom-0 z-20 h-min  w-screen overflow-hidden">
          <img
            src="/modern_bg.png"
            alt="modern robot"
            className="w-screen h-auto object-cover object-right-bottom"
          />
        </div>
        <div className="planet absolute bottom-0 right-0 z-30">
          <img
            src="/planet_modern.png"
            alt="modern planet"
            className="w-[500px]"
          />
        </div>
        <div className="content p-5 max-w-[700px] float-end relative z-90 mt-20 lg:max-w-[50vw] text-right">
          <div
            className="spaceship absolute left-0 top-0"
            style={{ transform: "translate(-10%, -40%)" }}
          >
            <img
              src="/spaceship_modern.png"
              alt="Spaceship from modern"
              className="w-[300px]"
            />
          </div>
          <h1
            className="font-extrabold text-[#2E1B08] pr-5 rounded-lg py-3 text-wipe-in-parts"
            style={{
              fontFamily: "Lato, Poppins, sans-serif",
              borderRight: "10px solid #2E1B08",
              fontSize: "max(3.4vw, 3rem)",
            }}
          >
            Modern Epoch
          </h1>
          <p
            className="text-[#2E1B08] font-regular mt-10 text-wipe-in-parts"
            style={{ lineHeight: "1.5", fontSize: "max(1.7vw, 1.5rem)" }}
          >
            {" "}
            In this modern era, robots look more human-like and use advanced
            technologies such as drones, hyperloops, and A.I.
          </p>
        </div>
      </div>
    </>
  );
};
const ModernMobile = () => {
  return (
    <>
      <div className="block md:hidden w-screen bg-[#512667] pt-20 relative">
        <h1
          className="font-extrabold py-3 bg-clip-text text-center relative text-wipe-in-parts"
          style={{
            fontFamily: "Lato, Poppins, sans-serif",
            fontSize: "max(3vw, 2.3rem)",
            background:
              "linear-gradient(271deg, #FF8383 0.46%, #CC5EFF 99.47%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Modern Epoch
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[5px] bg-[#CC5EFF] rounded-lg"></div>
        </h1>
        <div className="max-w-full w-full h-auto overflow-hidden mt-10 relative">
          <img src="/modern-mobile.png" alt="" className="w-full" />
          <Triangle style={{ background: "#512667" }}></Triangle>
        </div>
        <div className="content w-full p-10 py-20 bg-[#512667] text-center text-[#E299FF] text-lg relative text-wipe-in-parts">
          In this modern era, robots look more human-like and use advanced
          technologies such as drones, hyperloops, and A.I.
          <Triangle style={{ background: "#183C8C" }}></Triangle>
        </div>
      </div>
    </>
  );
};
const FutureEpoch = () => {
  return (
    <>
      <div className="hidden md:block min-h-[min(120vh,100vw)] w-screen bg-[#85A9BF] p-10 py-20 relative overflow-hidden z-30">
        <div className="background absolute right-0 bottom-0 z-10 h-min  w-screen overflow-hidden">
          <img
            src="/future_bg.png"
            alt="robot from future"
            className="w-screen h-auto object-cover object-right-bottom"
          />
        </div>
        <div className="planet absolute bottom-0 left-0 z-30">
          <img
            src="/planet_future.png"
            alt="planet from future"
            className="w-[400px]"
          />
        </div>
        <div className="content p-5 max-w-[700px] relative z-50 mt-20 lg:max-w-[50vw]">
          <div
            className="spaceship absolute right-0 top-0"
            style={{ transform: "translate(10%, -40%)" }}
          >
            <img
              src="/spaceship_future.png"
              alt="Spaceship from future"
              className="w-[500px]"
            />
          </div>
          <h1
            className="font-extrabold text-[#183C8C] pl-5 rounded-lg py-3 text-wipe-in-parts"
            style={{
              fontFamily: "Lato, Poppins, sans-serif",
              borderLeft: "10px solid #183C8C",
              fontSize: "max(3.4vw, 3rem)",
            }}
          >
            Future Epoch
          </h1>
          <p
            className="text-[#183C8C] font-regular mt-10 text-wipe-in-parts"
            style={{ lineHeight: "1.5", fontSize: "max(1.7vw, 1.5rem)" }}
          >
            This future era of technological advancement features A.I. robots
            utilizing artificial intelligence in all aspects of daily life,
            equipped with holographic technology and teleportation.
          </p>
        </div>
      </div>
    </>
  );
};
const FutureMobile = () => {
  return (
    <>
      <div className="block md:hidden w-screen bg-[#183C8C] pt-20 relative">
        <h1
          className="font-extrabold py-3 bg-clip-text text-center relative text-wipe-in-parts"
          style={{
            fontFamily: "Lato, Poppins, sans-serif",
            fontSize: "max(3vw, 2.3rem)",
            background:
              "linear-gradient(271deg, #87A9FF 0.46%, #47FFC8 99.47%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Future Epoch
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[5px] bg-[#87A9FF] rounded-lg"></div>
        </h1>
        <div className="max-w-full w-full h-auto overflow-hidden mt-10 relative">
          <img src="/future-mobile.png" alt="" className="w-full" />
          <Triangle style={{ background: "#183C8C" }}></Triangle>
        </div>
        <div className="content w-full p-10 py-20 bg-[#183C8C] text-center text-[#5DC5E9] text-lg relative text-wipe-in-parts">
          This future era of technological advancement features A.I. robots
          utilizing artificial intelligence in all aspects of daily life,
          equipped with holographic technology and teleportation.
        </div>
      </div>
    </>
  );
};
const LandingPage = () => {
  return (
    <>
      <HeroSection>
        <Header></Header>
      </HeroSection>
      <EpochsDescription></EpochsDescription>
      <AncientEpoch></AncientEpoch>
      <AncientMobile></AncientMobile>

      <ModernEpoch></ModernEpoch>
      <ModernMobile></ModernMobile>

      <FutureEpoch></FutureEpoch>
      <FutureMobile></FutureMobile>
    </>
  );
};

export default LandingPage;
