

export default function Team_template({team_name, coordsarray, subcoordsarray}) {
  return (
    <div className="flex flex-col">
			<p className="lg:text-[50px] text-[30px] text-center font-bold">{team_name}</p>
		<div className="flex flex-col w-full gap-8 lg:items-start items-center">
			<p className="lg:text-[40px] text-[30px] font-[500]">Coordinators</p>
			<div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center w-[100%]">
				{coordsarray.map((e, index) => {
					return (
						<div key={index} className="md:w-1/4 flex flex-col gap-3 items-center m-3 mb-5 lg:m-5 lg:mb-8">
							<div className="overflow-hidden lg:h-[200px] lg:w-[190px] w-[120px] h-[120px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center"
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
        <p className="lg:text-[40px] text-[30px] font-[500]">Sub-Coordinators</p>
        <div className="grid lg:grid-cols-4 grid-cols-2 justify-items-center w-[100%]">
            {subcoordsarray.map((e, index) => {
                return (
                    <div key={index} className="md:w-1/4 flex flex-col gap-3 items-center m-3 mb-5 lg:m-5 lg:mb-8">
                        <div className="overflow-hidden lg:h-[200px] lg:w-[190px] w-[120px] h-[120px] shadow-custom hover:shadow-hover p-[3px] rounded-lg bg-black flex justify-center items-center"
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
  )
}
