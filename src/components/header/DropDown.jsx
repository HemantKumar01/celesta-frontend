import React, { useState, useRef, useEffect } from 'react';
import './header.css';

function DropdownMenu() {
  const [isOpen, setIsOpen] = useState(true);
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
    <div className="dropdown">
      <a href="/" className="dropdown-toggle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        The Fest
      </a>
      {isOpen && (
        <div className="dropdown-menu" ref={menuRef}>
          {/* Your dropdown menu items here */}
          
          <div href="/Contacts" >Sponsors</div>
          <div>Gallery</div>
          <div>Our Team</div>
          <a href="/contact" >Contacts</a>
      

        </div>
      )}
    </div>
  );
}

export default DropdownMenu;