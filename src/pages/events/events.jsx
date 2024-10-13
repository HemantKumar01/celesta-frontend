import Footer from '@/components/footer/footer';
import Navbar from '@/components/Navbar/Navbar';
import Eventscard from '@/components/Events/EventsData';

const HeroSection = ({ children }) => {
    return (
        <div
            className={`relative w-full min-h-screen bg-[url('/hero_image-min.png')] bg-cover bg-no-repeat bg-center`}
            style={{
                backgroundImage: `linear-gradient(
                    180deg, 
                    rgba(0, 0, 0, 0.75) 0%, 
                    rgba(0, 0, 0, 0.00) 49.8%, 
                    rgba(23, 6, 28, 0.00) 90%, 
                    rgba(0, 0, 0, 0.75) 100%
                ), url('/hero_image-min.png')`,
            }}
        >
            <div className="w-full min-h-screen flex flex-col">
               
                <Navbar />

              
                <div className="flex-grow pt-20 pb-10 flex flex-col items-center">
                    {children}
                    <Eventscard /> 
                </div>
            </div>
		
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
