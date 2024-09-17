import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./header.css";

export default function Dropdown() {
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
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown">
      <Link
        to="/"
        className="dropdown-toggle"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        The Fest
      </Link>
      {isOpen && (
        <div
          className="dropdown-menu"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          ref={menuRef}
        >
          {/* Your dropdown menu items here */}

          <div>
            <Link to="/sponsors">Sponsors</Link>
          </div>
          {/* <div>
            <Link to="/">Gallery</Link>
          </div> */}
          {/* <div>
            <Link to="/">Our Team</Link>
          </div> */}
          <div>
            <Link to="/contact">Contacts</Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default DropdownMenu;
