import "./landing.css";
import Header from "@/components/header/header";
import SkewButton from "@/components/SkewButton";

const HeroButtons = () => {
  return (
    <div className="relative margin-auto w-[300px] sm:w-[550px] h-min max-w-[95vw] ">
      <SkewButton
        className="absolute left-0 top-0 w-[300px] hover:w-[331px]"
        style={{
          background: "linear-gradient(90deg, #FFB405 -7.98%, #E655CA 122.26%)",
        }}
      >
        Login
      </SkewButton>
      <SkewButton
        className="absolute left-0 sm:left-auto sm:right-0 top-[70px] sm:top-0 w-[300px] hover:w-[331px]"
        style={{
          background: "linear-gradient(90deg, #E655CA 0%, #5090FD 100%)",
        }}
      >
        Register
      </SkewButton>
    </div>
  );
};

const HeroSection = () => {
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
      <div className="scrollDown absolute bottom-10 left-[50%] translate-x-[-50%] w-10 h-16 border-2 border-white rounded-full p-2">
        <div className="ball w-full aspect-square bg-white rounded-full"></div>
      </div>
    </div>
  );
};

const LandingPage = () => {
  return (
    <>
      <Header></Header>
      <HeroSection></HeroSection>
    </>
  );
};

export default LandingPage;
