import React, { useState } from 'react';
import { images } from '@/constants';
import { Link } from 'react-router-dom';
import './Navbar.css';
import Dropdown from './DropDown'; // Importing DropdownMenu

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};
	return (
		<nav className='absolute top-0 left-0 w-full bg-transparent px-6 py-2 h-[60px] flex justify-between z-50'>
			<img src={images.logo} alt='Celesta' className='h-[40px] w-auto cursor-pointer' />

			<div className='navbar'>
				{/* Hamburger Menu Icon */}
				<div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
					<span className='bar'></span>
					<span className='bar'></span>
					<span className='bar'></span>
				</div>

				{/* Nav Menu */}
				<ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
					<li className='nav-item'>
						<Link to='/' className='nav-link' onClick={toggleMenu}>
							Home
						</Link>
					</li>

					{/* Dropdown Menu now behaves the same as desktop (hover-based) */}
					<li className='hidden md:flex nav-item dropdown-hover'>
						<Dropdown />
					</li>

					<li className='flex md:hidden nav-item'>
						<Link to='/sponsors' className='nav-link' onClick={toggleMenu}>
							Sponsors
						</Link>
					</li>
					<li className='flex md:hidden nav-item'>
						<Link to='/gallery' className='nav-link' onClick={toggleMenu}>
							Gallery
						</Link>
					</li>
					<li className='flex md:hidden nav-item'>
						<Link to='/team' className='nav-link' onClick={toggleMenu}>
							Our Team
						</Link>
					</li>
					<li className='flex md:hidden nav-item'>
						<Link to='/contact' className='nav-link' onClick={toggleMenu}>
							Contact Us
						</Link>
					</li>

					<li className='nav-item'>
						<Link to='/events' className='nav-link' onClick={toggleMenu}>
							Events
						</Link>
					</li>

					{/* Login Button */}
					<li className='nav-item'>
						<button
							onClick={() => {
								alert('Too Early for the Fest. The Fest will be live soon');
								toggleMenu();
							}}
							className='nav-button'
						>
							Login
						</button>
					</li>

					{/* Register Button */}
					<li className='nav-item'>
						<button
							onClick={() => {
								alert('Too Early for the Fest. The Fest will be live soon');
								toggleMenu();
							}}
							className='nav-button register-button'
						>
							Register
						</button>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
