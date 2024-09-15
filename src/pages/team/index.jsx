import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import images from "@/constants/images";

export default function Team() {
	return (
		<div className="w-full h-screen text-[#D9D9D9] relative">
			<Header />
			<div className="w-full h-screen bg-[url('/SponsBG.jpeg')] bg-cover bg-center bg-no-repeat fixed z-[-1] top-0 left-0"></div>
			<div className="mb-12 container min-h-screen h-auto pt-[80px] md:pb-0` pb-[50px] flex md:flex-row md:justify-around md:items-start flex-col justify-start items-center gap-[20px]">
				<TeamMain />
			</div>
			<Footer />
		</div>
	);
}

function TeamMain() {
	return (
        <div className="flex flex-col">
		<div className="flex flex-col w-full gap-8 lg:items-start items-center">
			<p className="lg:text-[60px] text-[40px] font-[500]">Coordinators</p>
			<div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center w-[100%]">
				{images.CoordsImages.map((e, index) => {
					return (
						<div key={index} className="md:w-1/4 flex flex-col gap-3 items-center m-3 mb-5 lg:m-5 lg:mb-8">
							<div className="overflow-hidden lg:h-[250px] lg:w-[240px] w-[120px] h-[120px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center"
                            style={{backgroundImage: `url(${e.image})`, backgroundSize: 'cover'}}>
							</div>
							<div className="overflow-hidden lg:h-[50px] lg:w-[200px] min-w-[120px] text-nowrap min-h-[40px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center">
								<p>{e.name}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
        <div className="flex flex-col w-full gap-8 lg:items-start items-center">
        <p className="lg:text-[60px] text-[40px] font-[500]">Sub-Coordinators</p>
        <div className="grid lg:grid-cols-3 grid-cols-2 justify-items-center w-[100%]">
            {images.SubCoordsImages.map((e, index) => {
                return (
                    <div key={index} className="md:w-1/4 flex flex-col gap-3 items-center m-3 mb-5 lg:m-5 lg:mb-8">
                        <div className="overflow-hidden lg:h-[250px] lg:w-[240px] w-[120px] h-[120px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center"
                        style={{backgroundImage: `url(${e.image})`, backgroundSize: 'cover'}}>
                        </div>
                        <div className="overflow-hidden lg:h-[50px] lg:w-[200px] min-w-[120px] text-nowrap min-h-[40px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center">
                            <p>{e.name}</p>
                        </div>
                    </div>
                );
            })}
        </div>
    </div>
    </div>
	);
}
