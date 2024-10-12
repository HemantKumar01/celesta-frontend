import Footer from '@/components/footer/footer';
import './landing.css';
import Navbar from '@/components/Navbar/Navbar';
import SkewButton from '@/components/SkewButton';
import { Quote } from 'lucide-react';
import { useEffect } from 'react';

const Triangle = ({ style }) => {
	return (
		<div
			className='triangle absolute left-0 bottom-[-2px]  w-[100px] h-[100px] bg-[#301C08]'
			style={{ ...style, clipPath: 'polygon(0% 0%, 0% 100%, 100% 100%)' }}
		></div>
	);
};

const HeroButtons = () => {
	return (
		<div className='relative margin-auto w-[300px] sm:w-[550px] h-min max-w-[95vw] '>
			<SkewButton
				className='absolute left-0 top-0 w-[300px] hover:w-[335px]'
				style={{
					background: 'linear-gradient(90deg, #FFB405 -7.98%, #E655CA 122.26%)',
				}}
			>
				Login
			</SkewButton>
			<SkewButton
				className='absolute left-0 sm:left-auto sm:right-0 top-[70px] sm:top-0 w-[300px] hover:w-[335px]'
				style={{
					background: 'linear-gradient(90deg, #E655CA 0%, #5090FD 100%)',
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
						<div className='font-medium text-l md:text-3xl tracking-[0.8ch] text-white text-center cursor-default'>
							CELESTA
						</div>
						<div
							className='theme gradient-text text-5xl md:text-8xl font-bold text-center min-h-[1.1em] cursor-default'
							style={{
								backgroundImage:
									'linear-gradient( 90deg, #ffac88 1.08%, #d197ff 47.47%,#8c8aff 94.79% )',
							}}
						>
							Exploring The Epochs
						</div>
						{/* <HeroButtons></HeroButtons> */}
					</div>
				</div>
			</div>
			<div
				className='scrollDown cursor-pointer absolute bottom-10 left-[50%] translate-x-[-50%] w-10 h-16 border-2 border-white rounded-full p-2'
				onClick={() => {
					document.querySelector('.EpochDescription').scrollIntoView();
				}}
			>
				<div className='ball w-full aspect-square bg-white rounded-full'></div>
			</div>
			{children}
		</div>
	);
};
const EpochsDescription = () => {
	return (
		<div
			className='EpochDescription bg-[#2F0C39] p-5 md:p-20 py-40 leading-[1.6] w-full'
			style={{ fontSize: 'calc(10px + 1.5vw)' }}
		>
			<blockquote className='relative bg-[rgba(204,94,255,0.08)] border-l-[20px] border-[#CC5EFF] p-5 md:p-10 pl-[calc(30px+2.5rem) text-[#E073FF] max-w-[1400px] m-auto py-10 md:py-16'>
				<Quote
					className='rotate-180 absolute left-2 md:left-10 top-10 md:top-16'
					size={75}
					strokeWidth={0.5}
				></Quote>
				<p className='mt-20 ml-3 md:ml-20 md:mt-7'>
					An epoch is a historical period defined by significant technological
					advancements. Exploring these epochs enhances understanding of past and present
					developments, societal shifts, and cultural influences, informing future
					endeavors.
				</p>
			</blockquote>
		</div>
	);
};

const Epoch = ({ epoch, desc, colors, inverted }) => {
	return (
		<>
			<div
				className={`${inverted ? 'inverted ' : ''}hidden md:block h-[62.5vw] min-h-[1024px] w-screen p-10 py-20 relative overflow-hidden z-10`}
				style={{ backgroundColor: colors[0] }}
			>
				<div className='background absolute right-0 bottom-0 z-10 h-min  w-screen overflow-hidden'>
					<img
						src={`/bg_${epoch}.png`}
						alt='background'
						className='w-screen h-auto object-cover object-right-bottom'
					/>
				</div>
				<div className='planet absolute bottom-0 left-0 z-30'>
					<img
						src={`/planet_${epoch}.png`}
						alt='planet'
						className='w-[25vw] min-w-[300px]'
					/>
				</div>
				<div className='flex flex-col content p-5 max-w-[700px] relative z-50 mt-20 lg:max-w-[50vw] items-start'>
					<div
						className='spaceship absolute right-0 top-0'
						style={{ transform: 'translate(calc(75px + 10vw), -25%)' }}
					>
						<img
							src={`/spaceship_${epoch}.png`}
							alt='spaceship'
							className='w-[400px]'
						/>
					</div>
					<h1
						className={`font-extrabold text-wipe-in-parts pl-5 rounded-lg py-3`}
						style={{
							color: colors[1],
							fontFamily: 'Lato, Poppins, sans-serif',
							borderLeft: '10px solid ' + colors[1],
							fontSize: 'max(3.4vw, 3rem)',
						}}
					>
						{epoch} Epoch
					</h1>
					<p
						className={`text-wipe-in-parts font-regular mt-10 w-[75%] max-w-[50vw] text-justify`}
						style={{
							color: colors[1],
							lineHeight: '1.5',
							fontSize: 'max(1.7vw, 1.5rem)',
						}}
					>
						{desc}
					</p>
				</div>
			</div>
		</>
	);
};

const MobileEpoch = ({ epoch, colors, desc }) => {
	return (
		<>
			<div
				className={`block md:hidden w-screen pt-20 relative`}
				style={{ backgroundColor: colors[0] }}
			>
				<h1
					className='font-extrabold py-3 bg-clip-text text-center relative'
					style={{
						fontFamily: 'Lato, Poppins, sans-serif',
						fontSize: 'max(3vw, 2.3rem)',
						background: `linear-gradient(271deg, ${colors[1]} 0.46%, ${colors[2]} 99.47%)`,
						WebkitBackgroundClip: 'text',
						WebkitTextFillColor: 'transparent',
					}}
				>
					{epoch} Epoch
					<div
						className={`absolute bottom-0 left-1/2 -translate-x-1/2 w-[100px] h-[5px] bg-[${colors[3]}] rounded-lg`}
					></div>
				</h1>
				<div className='max-w-full w-full h-auto overflow-hidden mt-10 relative'>
					<img src={`/mobile-bg_${epoch}.png`} alt='' className='w-full' />
					<Triangle style={{ background: colors[4] }} />
				</div>
				<div
					className={`content w-full p-10 py-20 bg-[${colors[4]}] text-center text-[${colors[5]}] text-lg relative`}
				>
					{desc}
					{colors[6] && <Triangle style={{ background: colors[6] }} />}
				</div>
			</div>
		</>
	);
};

const LandingPage = () => {
	let animationInjected = false;
	useEffect(() => {
		if (!animationInjected) {
			textWipeInParts(0.1);
			animationInjected = true;
		}
	}, []);
	return (
		<>
			<HeroSection>
				<Navbar />
			</HeroSection>
			<EpochsDescription />

			<Epoch
				epoch={'Ancient'}
				desc={
					'This is the vintage era of technological advancement. These gear-driven robots, composed of gears themselves, have mastered and enthusiastically experiment with every new concept they discover.'
				}
				colors={['#FAE5C3', '#301C08']}
				inverted={false}
			/>
			<Epoch
				epoch={'Modern'}
				desc={
					'In this modern era, robots look more human-like and use advanced technologies such as drones, hyperloops and artificial intelligence'
				}
				colors={['#FFE4FB', '#2E1B08']}
				inverted={true}
			/>
			<Epoch
				epoch={'Future'}
				desc={
					'This future era of technological advancement features AI robots utilizing artificial intelligence in all aspects of daily life equipped with holographic technology and teleportation'
				}
				colors={['#87ABC3', '#183C8C']}
				inverted={false}
			/>

			<MobileEpoch
				epoch={'Ancient'}
				colors={[
					'#FAE5C3',
					'#2F1C0B',
					'#B27632',
					'#301C08',
					'#301C08',
					'#F5E2C1',
					'#512667',
				]}
				desc={
					'This is the vintage era of technological advancement. These gear-driven robots, composed of gears themselves, have mastered and enthusiastically experiment with every new concept they discover'
				}
			/>
			<MobileEpoch
				epoch={'Modern'}
				colors={[
					'#512667',
					'#FF8383',
					'#CC5EFF',
					'#CC5EFF',
					'#512667',
					'#E299FF',
					'#183C8C',
				]}
				desc={
					'In this modern era, robots look more human-like and use advanced technologies such as drones, hyperloops and artificial intelligence'
				}
			/>
			<MobileEpoch
				epoch={'Future'}
				colors={['#183C8C', '#87A9FF', '#47FFC8', '#87A9FF', '#183C8C', '#5DC5E9']}
				desc={
					'This future era of technological advancement features AI robots utilizing artificial intelligence in all aspects of daily life equipped with holographic technology and teleportation'
				}
			/>

			<Footer />
		</>
	);
};

export default LandingPage;
