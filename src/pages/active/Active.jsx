import {React,useEffect} from 'react'
import Navbar from '../../Components/Navbar'
import Footer from '../../Components/Footer'
import hero from '../../assets/hero6.jpg' 
import customArrow from '../../assets/arrow.png'
import banner from '../../assets/activebanner.png' 
import networkswitch from '../../assets/networkswitches.png' 
import wireless from '../../assets/wirelessSol3.png' 
import ruggedswitches from '../../assets/ruggedswitches.png' 
import survelliance from '../../assets/survelliance.png' 
import serverworkstation from '../../assets/serverworkstation.png' 
import networkstorage from '../../assets/networkstorage.png' 

// --- FilterOptions Component (Uniform Green & White Theme) ---
const FilterOptions = () => {
  const options = [
    { title: "Network Switches", description: "Reliable and scalable switching solutions for SMB to Enterprise networks.", link: "/networkSwitches", imageSrc: networkswitch },
    { title: "Industrial Switches", description: "Durable, high-performance switches built for critical industrial environments.", link: "/industrial-rugged", imageSrc: ruggedswitches },
    { title: "Wireless Solutions", description: "Secure and fast wireless networking for enterprises and smart cities.", link: "/wireless", imageSrc: wireless },
    { title: "Server and Workstations", description: "Find powerful servers, racks, and high-performance computing workstations.", link: "/servers-workstations", imageSrc: serverworkstation },
    { title: "Network Attached Storage", description: "Secure and centralize your data with high-capacity NAS devices.", link: "/nas", imageSrc: networkstorage },
    { title: "Surveillance", description: "View IP cameras, network video recorders (NVRs), and video analytics.", link: "/surveillance", imageSrc: survelliance }
  ];

  const theme = {
    title: "text-green-800",

    link: "text-green-600 group-hover:text-green-700",
    border: "border-b-green-700",
    // Base hover effect applied to the parent <a> tag for the "pop up"
    hoverEffect: "group-hover:shadow-2xl group-hover:ring-4 group-hover:ring-green-400 group-hover:-translate-y-2",
  };

  useEffect(() => {
        window.scrollTo(0, 0);
      }, []);

  return (
    <>
    {/* <div
  className="pt-40 pb-24 bg-cover bg-center"
  style={{
    backgroundImage: `url(${banner})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  }}
>
  <div className="max-w-7xl mx-auto px-4 pb-20 sm:px-6 lg:px-8 text-center">
    <h1 className="text-4xl font-bold text-white sm:text-5xl md:text-6xl">
      Active Products
    </h1>
  </div>
</div> */}

    <div className="container mx-auto px-4 py-10 pt-20 pb-30">
      
      <h2 className="text-4xl font-bold text-center mb-10 text-green-800">
        Active Products
      </h2> 

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {options.map((option) => (
          <a 
            key={option.title} 
            href={option.link}
            className={`group block h-full no-underline transition-all duration-300 ${theme.hoverEffect}`}
          >
            {/* This inner div has the requested styles, now combined:
              - overflow-hidden (already there)
              - flex flex-col (already there)
              - transition duration-300 (already there)
              - hover:shadow-xl (replaced the static 'shadow-lg' to ensure the requested shadow is present)
            */}
            <div className="bg-white rounded-md shadow-lg hover:shadow-xl h-full flex flex-col overflow-hidden transition-all duration-300">
                
                {/* IMAGE SECTION */}
                <img 
                    src={option.imageSrc} 
                    alt={`${option.title} Hero Image`} 
                    loading='lazy'
                    decoding='async'
                    className="w-full h-56 object-cover rounded-t-md" 
                />

                {/* TEXT/CONTENT SECTION: Uniform bottom border */}
                <div className={`p-6 flex flex-col grow text-left border-b-4 ${theme.border} transition-colors duration-300`}>
                    
                    <h3 className={`text-xl font-semibold mb-2 ${theme.title} transition-colors duration-150`}>
                        {option.title}
                    </h3>
                    
                    <p className="text-sm text-gray-600 mb-4 grow">
                        {option.description}
                    </p>
                    
                    <div className={`mt-auto text-base font-medium ${theme.link} transition-colors duration-150 flex items-center space-x-2`}>
                        <span>Explore Product</span> 
                        <img 
                            src={customArrow} 
                            alt="Explore Arrow"
                            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                        />
                    </div>
                </div>
            </div>
          </a>
        ))}
      </div>
    </div>
    </>
  );
};

// --- ActiveHome Component ---
const ActiveHome = () => {
  return (
    <div className="min-h-screen flex flex-col mt-20 bg-green-50"> 
      <Navbar/>
      <main className="grow">
        <FilterOptions /> 
      </main>
      <Footer/>
    </div>
  )
}

export default ActiveHome