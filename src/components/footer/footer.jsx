import "./footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="lg:h-[250px] h-[350px] bg-transparent relative top-[-48px] z-[100]">
      <div className="w-44 sm:w-1/3 h-12 bg-[#3A3A3A] polygon translate-y-[1px]"></div>
      <div className=" bg-[#3A3A3A] flex flex-col lg:flex-row justify-evenly items-center h-full ">
        <div className="flex flex-col gap-4">
          <div className="flex gap-5 items-center justify-center">
            <div>
              <p className="text-[22px] sm:text-[40px] tracking-[4px]">
                Celesta
              </p>
            </div>
            <div className="w-[2px] h-[40px] bg-white"></div>
            <div>
              <p className="text-[15px] sm:text-xl">
                Exploring The <br /> Epochs
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center lg:justify-start gap-5 ">
            <a href="https://youtube.com/@CelestaIITPatna">
              <img className="h-[25px]" src="/youtube.svg" alt="youtube" />
            </a>
            <a href="https://twitter.com/celesta_iitp">
              <img className="h-[25px]" src="/twitter.svg" alt="twitter" />
            </a>
            <a href="https://instagram.com/celestaiitp_official/">
              <img className="h-[25px]" src="/instagram.svg" alt="instagram" />
            </a>
            <a href="https://linkedin.com/company/celesta-iit-patna/">
              <img className="h-[25px]" src="/linkedin.svg" alt="linkedin" />
            </a>
          </div>
        </div>

        <div className="hidden lg:flex flex-col">
          <p className="text-[25px]">Links</p>
          <div className="text-lg flex flex-col">
            <Link to="/" onClick={()=>{window.scrollTo(0,0)}}>Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/gallery">Gallery</Link>
          </div>
        </div>

        <div className="hidden lg:flex flex-col">
          <p className="text-[25px]">Information</p>
          <div className="text-lg flex flex-col">
            <Link to="/contact" onClick={()=>{window.scrollTo(0,0)}}>Contact Us</Link>
            <Link to="/sponsors">Sponsors</Link>
            <Link to="/team">Team</Link>
          </div>
        </div>

        <div className="flex lg:flex-col gap-5">
          <button
            onClick={() => {
              alert("Too Early for the Fest. The Fest will be live soon");
            }}
            className="w-[120px] h-[50px] sm:h-[55px] sm:w-[200px] text-[16px] text-center font-[500] sm:text-[22px] cursor-pointer py-[5px] border-white border-solid border-[1px] rounded-md"
          >
            Login
          </button>
          <button onClick={() => {
              alert("Too Early for the Fest. The Fest will be live soon");
            }} className="w-[120px] h-[50px] sm:h-[55px] sm:w-[200px] text-[16px] text-center font-[500] sm:text-[22px] bg-white text-black cursor-pointer py-[5px] border-white border-solid border-[1px] rounded-md ">
            Register
          </button>
        </div>
        <div className="lg:hidden flex gap-12 text-[16px] font-[300] tracking-[0.8px]">
          <div>
            <div className="text-lg flex flex-col">
              <Link to="/">Home</Link>
              <Link to="/events">Events</Link>
              <Link to="/gallery">Gallery</Link>
            </div>
          </div>
          <div>
            <div className="text-lg flex flex-col">
              <Link to="/contact">Contact Us</Link>
              <Link to="/sponsors">Sponsors</Link>
              <Link to="/team">Team</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
