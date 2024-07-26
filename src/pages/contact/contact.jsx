import Header from '@/components/header/header'
import { icons } from '@/constants'

const Contact = () => {
	return (
		<div
			className={`w-full h-screen overflow-hidden bg-[url('./contact_image.png')] bg-cover bg-center bg-no-repeat`}
		>
			<div className='container h-full flex justify-center items-center'>
				<Header />
				<div className='bg-[#000] bg-opacity-[0.85] px-6 pb-8 flex flex-col gap-[56px] w-fit rounded-2xl'>
					<div>
						<h2 className='text-[38px]'>Contact Us</h2>
						<p>
							We connect innovative service providers <br />
							with eager participants
						</p>
					</div>
					<div className='flex gap-[16px] items-center'>
						<img
							src={icons.phone}
							alt='phone calling icon'
							className='w-[28px]'
						/>
						<div>
							<h4 className='text-[26px]'>Contact Our Experts</h4>
							<p className='text-[26px]'>Phone no. :</p>
						</div>
					</div>
					<div className='flex gap-[16px] items-center'>
						<img
							src={icons.mail}
							alt='mail icon'
							className='w-[27px]'
						/>
						<div>
							<h4 className='text-[26px]'>Send Us a Mail</h4>
							<p>
								Our friendly team is here to help you,
								<br />
								send us a mail at:
							</p>
						</div>
					</div>
					<div className='flex flex-col gap-[20px]'>
						<h4 className='text-[26px]'>
							Connect with us on social media:
						</h4>
						<div className='flex justify-around'>
							<img
								src={icons.youtube}
								alt='youtube icon'
								className='w-[30px]'
							/>
							<img
								src={icons.twitter}
								alt='twitter icon'
								className='w-[30px]'
							/>
							<img
								src={icons.instagram}
								alt='instagram icon'
								className='w-[30px]'
							/>
							<img
								src={icons.linkedin}
								alt='linkedin icon'
								className='w-[30px]'
							/>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Contact
