import React, { useState, useRef, useEffect } from 'react';
import './header.css';

function DropdownMenu() {
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
    <div className="dropdown">
      <a href="/" className="dropdown-toggle" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        The Fest
      </a>
      {isOpen && (
        <div className="dropdown-menu" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} ref={menuRef}>
          {/* Your dropdown menu items here */}
          
          <div>
          <a href="/" >Sponsors</a>
          </div>
          <div>
          <a href="/" >Gallery</a>
          </div>
          <div>
          <a href="/" >Our Team</a>
          </div>
          <div>
          <a href="/contact" >Contacts</a>
          </div>
      

        </div>
      )}
    </div>
  );
}

export default DropdownMenu;