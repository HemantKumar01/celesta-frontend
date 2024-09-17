import Footer from '@/components/footer/footer';
import Navbar from '@/components/Navbar/Navbar';

const HeroSection = ({ children }) => {
	return (
		<div
			className={`hero relative w-full h-screen overflow-hidden bg-[url('/hero_image-min.png')] bg-cover bg-top bg-no-repeat sm:bg-cover sm:bg-[center_top_20%]`}
		>
			<div
				className='w-full h-full relative bg-contain'
				style={{
					background:
						'linear-gradient(180deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.00) 49.8%, rgba(23, 6, 28, 0.00) 90%, #2F0C39 100%), rgba(0, 0, 0, 0.25)',
				}}
			>
				<div className='main-content w-full max-w-[90vw] absolute top-1/3 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
					<div className='text flexbox flex-col'>
						<div className='font-medium text-l md:text-3xl tracking-[0.8ch] text-white text-center'>
							CELESTA
						</div>
						<div
							className='theme gradient-text text-5xl md:text-8xl font-bold text-center min-h-[1.1em]'
							style={{
								backgroundImage:
									'linear-gradient( 90deg, #ffac88 1.08%, #d197ff 47.47%,#8c8aff 94.79% )',
							}}
						>
							Exploring The Epochs
						</div>
						<div className='font-regular text-2xl md:text-4xl font-bold text-center mt-10'>
							Events Coming Soon...
							<br />
							<div className='flex flex-row items-center justify-center'>
								<img width={177 * 1.15} height={111 * 1.15} src='/builder.gif' />
								Sorry, we are under maintenance!
								<img width={177 * 1.15} height={111 * 1.15} src='/builder.gif' />
							</div>
						</div>
					</div>
				</div>
			</div>
			{children}
		</div>
	);
};

const EventsPage = () => {
	return (
		<>
			<HeroSection>
				<Navbar />
			</HeroSection>
			<Footer />
		</>
	);
};

export default EventsPage;
