import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Dropdown() {
	const [isOpen, setIsOpen] = useState(false);
	const menuRef = useRef(null);

	const handleMouseEnter = () => {
		setIsOpen(true);
	};

	const handleMouseLeave = () => {
		setIsOpen(false);
	};

	const handleClickOutside = (event) => {
		if (menuRef.current && !menuRef.current.contains(event.target)) {
			setIsOpen(false);
		}
	};

	useEffect(() => {
		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, []);

	return (
		<div className='dropdown' onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
			<Link to='/' className='dropdown-toggle'>
				The Fest
			</Link>
			{isOpen && (
				<div className='dropdown-menu' ref={menuRef}>
					<div>
						<Link to='/sponsors'>Sponsors</Link>
					</div>
					<div>
						<Link to='/gallery'>Gallery</Link>
					</div>
					<div>
						<Link to='/team'>Our Team</Link>
					</div>
					<div>
						<Link to='/contact'>Contacts</Link>
					</div>
				</div>
			)}
		</div>
	);
}

export default Dropdown;
