import Header from '@/components/header/header'
import { icons } from '@/constants'
import { useForm } from 'react-hook-form'
import './contact.css'
import Footer from '@/components/footer/footer'

const ContactForm = () => {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm()

	const onSubmit = (data) => {
		console.log(data)
		reset()
	}

	const handleReset = () => {
		reset()
	}

	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<div className='bg-[#000] bg-opacity-[0.70] px-7 py-4 flex flex-col gap-[2vh] w-fit rounded-[2rem]'>
				<h2 className='text-[30px]'>Fill The Support Form</h2>
				<div className='flex flex-col relative'>
					<label>Name:</label>
					<input
						className='text-[#000] px-[10px] py-[5px] rounded-md outline-none'
						placeholder='Full Name'
						type='text'
						{...register('name', {
							required: 'Name is required',
						})}
					/>
					<div className='h-[24px]'>
						{errors.name && (
							<p className='text-red-500 text-[14px]'>
								{errors.name.message}
							</p>
						)}
					</div>
				</div>
				<div className='flex flex-col relative'>
					<label>Email:</label>
					<input
						className='text-[#000] px-[10px] py-[5px] rounded-md outline-none'
						placeholder='example@example.com'
						{...register('email', {
							required: 'Email is required',
							pattern: {
								value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
								message: 'Invalid email address',
							},
						})}
					/>
					<div className='h-[24px]'>
						{errors.email && (
							<p className='text-red-500 text-[14px]'>
								{errors.email.message}
							</p>
						)}
					</div>
				</div>
				<div className='flex flex-col relative'>
					<label>Phone No.:</label>
					<input
						className='text-[#000] px-[10px] py-[5px] rounded-md outline-none'
						placeholder='9876543210'
						{...register('number', {
							required: 'Phone number is required',
							pattern: {
								value: /^[0-9]{10}$/,
								message: 'Invalid phone number',
							},
							minLength: {
								value: 10,
								message: 'Phone number must be 10 digits',
							},
							maxLength: {
								value: 10,
								message: 'Phone number must be 10 digits',
							},
						})}
					/>
					<div className='h-[24px]'>
						{errors.number && (
							<p className='text-red-500 text-[14px]'>
								{errors.number.message}
							</p>
						)}
					</div>
				</div>
				<div className='flex flex-col relative'>
					<label>Message:</label>
					<textarea
						className='text-[#000] px-[10px] py-[5px] rounded-md outline-none resize-none'
						rows={3}
						placeholder='Type your message here...'
						{...register('message', {
							required: 'Message is required',
						})}
					/>
					<div className='h-[24px]'>
						{errors.message && (
							<p className='text-red-500 text-[14px]'>
								{errors.message.message}
							</p>
						)}
					</div>
				</div>
			</div>
			<div className='flex justify-around w-full pt-[5px]'>
				<input
					type='submit'
					className='px-[30px] py-[8px] rounded-lg cursor-pointer text-[20px] bg-[#262626]'
				/>
				<button
					onClick={handleReset}
					className='px-[30px] py-[8px] rounded-lg cursor-pointer text-[20px] bg-[#262626]'
				>
					Reset
				</button>
			</div>
		</form>
	)
}

const ContactInfo = () => {
	return (
		<div className='bg-[#000] bg-opacity-[0.7] px-7 pt-4 pb-8 flex flex-col gap-[7.5vh] w-fit rounded-[2rem]'>
			<div>
				<h2 className='text-[30px]'>Contact Us</h2>
				<p className='text-[12px]'>
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
					<h4 className='text-[18px]'>Contact Our Experts</h4>
					<p className='text-[14px]'>
						Phone no. : <br />
						<a
							href='https://wa.me/919546908462?text=I%20had%20some%20queries%20related%20to%20Celesta%20Fest'
							target='_blank'
							className='text-[18px] text-blue-500'
						>
							+91 9546908462
						</a>
					</p>
				</div>
			</div>
			<div className='flex gap-[16px] items-center'>
				<img src={icons.mail} alt='mail icon' className='w-[27px]' />
				<div>
					<h4 className='text-[18px]'>Send Us a Mail</h4>
					<p className='text-[14px]'>
						Our friendly team is here to help you,
						<br />
						send us a mail at:
						<br />
						<a
							href='mailto:celesta.iitp@gmail.com'
							target='_blank'
							className='text-[18px] text-blue-500'
						>
							celesta.iitp@gmail.com
						</a>
					</p>
				</div>
			</div>
			<div className='flex flex-col gap-[20px]'>
				<h4 className='text-[18px]'>
					Connect with us on social media:
				</h4>
				<div className='flex justify-around'>
					<a href='https://youtube.com/@CelestaIITPatna' target='_blank'>
						<img
							src={icons.youtube}
							alt='youtube icon'
							className='w-[30px]'
						/>
					</a>
					<a href='https://twitter.com/celesta_iitp' target='_blank'>
						<img
							src={icons.twitter}
							alt='twitter icon'
							className='w-[30px]'
						/>
					</a>
					<a
						href='https://instagram.com/celestaiitp_official/'
						target='_blank'
					>
						<img
							src={icons.instagram}
							alt='instagram icon'
							className='w-[30px]'
						/>
					</a>
					<a
						href='https://linkedin.com/company/celesta-iit-patna/'
						target='_blank'
					>
						<img
							src={icons.linkedin}
							alt='linkedin icon'
							className='w-[30px]'
						/>
					</a>
				</div>
			</div>
		</div>
	)
}

const Contact = () => {
	return (
		<div className="w-full min-h-screen h-auto text-[#D9D9D9] relative bg-[url('/contact_image.png')] bg-cover bg-center bg-no-repeat">
			<Header />
			<div className='min-h-screen flex justify-center items-center md:pt-[80px] pt-[100px] md:mb-[60px] mb-[80px]'>
				<div className='container flex md:flex-row md:justify-around md:items-start flex-col justify-start items-center gap-[50px]'>
					<ContactInfo />
					<ContactForm />
				</div>
			</div>
			<Footer />
		</div>
	)
}

export default Contact
