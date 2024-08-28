import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import images from "@/constants/images";

export default function Sponsors() {
  return (
    <div className="w-full h-screen text-[#D9D9D9] relative">
      <Header />
      <div className="w-full h-screen bg-[url('/SponsBG.jpeg')] bg-cover bg-center bg-no-repeat fixed z-[-1] top-0 left-0"></div>
      <div className="mb-12 container min-h-screen h-auto pt-[80px] md:pb-0` pb-[50px] flex md:flex-row md:justify-around md:items-start flex-col justify-start items-center gap-[20px]">
        <SponsorsMain />
      </div>
      <Footer />
    </div>
  );
}

function SponsorsMain() {
  return (
    <div className="flex flex-col w-full gap-8 lg:items-start items-center">
      <p className="lg:text-[80px] text-[50px] font-[500]">Sponsors</p>
      <div className="flex flex-wrap justify-center">
        {images.SponsorsImages.map((e, index) => {
          return (
            <div
              key={index}
              className="md:w-1/4 flex flex-col items-center m-3 mb-5 lg:m-5 lg:mb-8"
            >
              <div className="overflow-hidden lg:h-[200px] lg:w-[200px] w-[120px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center">
                <a href={e.href} target="#">
                  <img
                    src={e.image}
                    alt={`Sponsor ${index + 1}`}
                    className="w-[200px] rounded-lg"
                  />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
