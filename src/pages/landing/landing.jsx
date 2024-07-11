import Header from "@/components/header/header";
import { images } from "@/constants";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen overflow-hidden"
      style={{
        background: `url(${images.hero_image})`,
        backgroundSize: "cover",
        backgroundPosition: " 50% 30%",
      }}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.00) 49.8%, rgba(23, 6, 28, 0.00) 90%, #2F0C39 100%), rgba(0, 0, 0, 0.25)",
        }}
      ></div>
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
