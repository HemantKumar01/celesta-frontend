import "./landing.css";
import Header from "@/components/header/header";
import SkewButton from "@/components/SkewButton";
import { Quote } from "lucide-react";

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
    <div className="EpochDescription bg-[#2F0C39] p-5 md:p-20 pt-20  text-[1.65rem] leading-[1.6] w-full">
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
      <div className="h-screen w-screen bg-[#FAE5C3]"></div>
    </>
  );
};
const ModernEpoch = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#FFE8FF]"></div>
    </>
  );
};
const FutureEpoch = () => {
  return (
    <>
      <div className="h-screen w-screen bg-[#85A9BF]"></div>
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
      <ModernEpoch></ModernEpoch>
      <FutureEpoch></FutureEpoch>
    </>
  );
};

export default LandingPage;
