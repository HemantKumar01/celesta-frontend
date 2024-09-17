export default function Team_template({ team_name, coordsarray }) {
	return (
		<div className="flex flex-col mb-[100px]">
			<p className="lg:text-[50px] text-[30px] text-center font-bold mb-[25px]">{team_name}</p>
			<div className="flex flex-wrap gap-[30px] justify-center w-[100%]">
				{coordsarray.map((e, index) => {
					return (
						<div key={index} className="flex flex-col gap-3 items-center m-1 mb-8 lg:m-5 lg:mb-10">
							<div
								className="overflow-hidden lg:h-[200px] lg:w-[190px] w-[120px] h-[120px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center"
								style={{ backgroundImage: `url(${e.image})`, backgroundSize: "cover" }}></div>
							<div className="overflow-hidden lg:h-[50px] lg:w-[200px] min-w-[120px] text-nowrap min-h-[40px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center">
								<p>{e.name}</p>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
