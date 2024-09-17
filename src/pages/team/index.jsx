import Footer from "@/components/footer/footer";
import Navbar from "@/components/Navbar/Navbar";
import Team_template from "@/components/team/team";
import images from "@/constants/images";

export default function Team() {
	return (
		<div className="w-full h-screen text-[#D9D9D9] relative">
			<Navbar />
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
		<div>
			<Team_template team_name="Fest Coordinators" coordsarray={images.fest_CoordsImages} />
			<Team_template team_name="Advisory" coordsarray={images.advisory_CoordsImages} />
			<Team_template team_name="Flagship Events" coordsarray={images.flagship_CoordsImages} />
			<Team_template team_name="Events Team" coordsarray={images.events_CoordsImages} />
			<Team_template team_name="Development Team" coordsarray={images.dev_CoordsImages} />
			<Team_template team_name="Marketing and Sponsorship" coordsarray={images.spons_CoordsImages} />
			<Team_template team_name="Media and Public Relations" coordsarray={images.mpr_CoordsImages} />
			<Team_template team_name="Creatives And Designs" coordsarray={images.cnd_CoordsImages} />
			<Team_template team_name="Workshop Committee" coordsarray={images.workshop_CoordsImages} />
			<Team_template team_name="GLE Committee" coordsarray={images.gle_CoordsImages} />
			<Team_template team_name="RSP Committee" coordsarray={images.rsp_CoordsImages} />
			<Team_template team_name="Hospitality Committee" coordsarray={images.hospi_CoordsImages} />
		</div>
	);
}
