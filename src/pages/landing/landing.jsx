import Header from "@/components/header/header";

const HeroSection = () => {
  return (
    <div
      className={`w-full h-screen overflow-hidden bg-[url('/hero_image.png')] bg-[length:140%] bg-top bg-no-repeat sm:bg-cover sm:bg-[center_top_20%]`}
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
          </div>
        </div>
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
